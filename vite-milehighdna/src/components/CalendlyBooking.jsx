import { useCallback, useEffect, useRef } from 'react';

/**
 * CalendlyBooking — popup-embeds any Calendly scheduling page and tracks
 * completed bookings.
 *
 * Why: booking used to happen on calendly.com (external link), where our
 * GTM container can't see it. The embedded widget posts messages back to
 * this window, so `calendly.event_scheduled` becomes a real, trackable
 * `book_appointment` conversion — tagged with the service that was booked.
 *
 * Works with any number of Calendly event pages: pass each service's own
 * `url`. Interim solution until booking moves to Inveryx.
 *
 * Usage:
 *   <CalendlyPopupButton
 *     url="https://calendly.com/milehighdnatesting/legal-paternity-test"
 *     serviceName="Legal Paternity Testing"
 *     className="..."
 *   >
 *     Book Appointment
 *   </CalendlyPopupButton>
 */

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

/**
 * Google Ads conversion for a completed booking.
 *
 * Why this is here and not in GTM: the GTM container (GTM-PHRBWK96) contains
 * no reference to AW-992655834 at all — Ads is loaded straight from gtag.js in
 * index.html. GTM does forward `book_appointment` to GA4, so GA4 sees bookings;
 * Google Ads never has, which is why it reported ~1 conversion while Calendly
 * recorded 31. Smart Bidding has been optimising against an empty signal.
 *
 * TO ACTIVATE: Google Ads → Goals → Conversions → New conversion action →
 * Website. Name it "Calendly booking completed", category "Submit lead form",
 * count "One". Paste the send_to value it gives you (looks like
 * AW-992655834/AbC-D_efG12345) below. Until then this no-ops safely and GA4
 * tracking is unaffected.
 */
const ADS_CONVERSION_SEND_TO = '';

function fireAdsConversion() {
  if (!ADS_CONVERSION_SEND_TO) return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: ADS_CONVERSION_SEND_TO,
    value: 1.0,
    currency: 'USD',
  });
}

// Module-level state: which service the currently-open widget belongs to.
let activeService = null;
let listenerAttached = false;
let assetsRequested = false;
// Inline iframes register their contentWindow -> serviceName here so a
// booking made in an inline embed is attributed to the right service.
const inlineRegistry = new Map();

function pushDataLayer(payload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

function isCalendlyMessage(e) {
  return (
    typeof e.origin === 'string' &&
    e.origin.indexOf('https://calendly.com') === 0 &&
    e.data &&
    typeof e.data.event === 'string' &&
    e.data.event.indexOf('calendly.') === 0
  );
}

function attachListener() {
  if (listenerAttached) return;
  listenerAttached = true;
  window.addEventListener('message', (e) => {
    if (!isCalendlyMessage(e)) return;
    if (e.data.event === 'calendly.event_scheduled') {
      const inlineService = inlineRegistry.get(e.source);
      pushDataLayer({
        event: 'book_appointment',
        service_name: inlineService || activeService || 'Unknown service',
        calendly_event_uri:
          (e.data.payload && e.data.payload.event && e.data.payload.event.uri) || '',
        calendly_invitee_uri:
          (e.data.payload && e.data.payload.invitee && e.data.payload.invitee.uri) || '',
      });
      // GA4 is handled by GTM off the dataLayer push above; Ads is not in the
      // container, so fire it directly here.
      fireAdsConversion();
    }
  });
}

function loadAssets() {
  if (assetsRequested) return;
  assetsRequested = true;
  if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = WIDGET_CSS;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${WIDGET_JS}"]`)) {
    const script = document.createElement('script');
    script.src = WIDGET_JS;
    script.async = true;
    document.head.appendChild(script);
  }
}

export function CalendlyPopupButton({ url, serviceName, className, children }) {
  useEffect(() => {
    loadAssets();
    attachListener();
  }, []);

  const handleClick = useCallback(
    (e) => {
      pushDataLayer({
        event: 'calendly_open',
        service_name: serviceName || 'Unknown service',
      });
      activeService = serviceName || null;
      if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
        e.preventDefault();
        window.Calendly.initPopupWidget({ url });
      }
      // If the widget script hasn't loaded, fall through to the plain link
      // (href) so booking still works — just untracked.
    },
    [url, serviceName]
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      data-calendly-tracked="true"
    >
      {children}
    </a>
  );
}

/**
 * CalendlyGlobalTracking — site-wide safety net for booking analytics.
 *
 * Many pages link straight to calendly.com with plain <a> tags, which GTM
 * can't see (booking completes on calendly.com, outside our page). This
 * component installs one document-level click listener that catches ANY
 * calendly.com link, fires `calendly_open`, and upgrades the click to the
 * embedded popup widget so `calendly.event_scheduled` → `book_appointment`
 * is trackable. If the widget script hasn't loaded, the link falls through
 * to normal navigation (booking still works, calendly_open still recorded).
 *
 * Mount once in App.jsx: <CalendlyGlobalTracking />
 */
const SLUG_SERVICE_NAMES = {
  'legal-paternity-test': 'Legal Paternity Testing',
  'non-legal-paternity-test': 'Non-Legal Paternity Testing',
  'noninvasive-prenatal-paternity': 'Prenatal Paternity Testing',
  'full-siblingship-dna-test': 'Siblingship Testing',
  'grandparentage-dna-test': 'Grandparentage Testing',
  'immigration': 'Immigration DNA Testing',
  '30-minute-dna-test-appointment': 'General DNA Test Appointment',
};

function serviceNameFromUrl(href) {
  try {
    const path = new URL(href).pathname.replace(/\/+$/, '');
    const slug = path.split('/').pop() || '';
    if (SLUG_SERVICE_NAMES[slug]) return SLUG_SERVICE_NAMES[slug];
    if (!slug) return 'Unknown service';
    return slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  } catch {
    return 'Unknown service';
  }
}

export function CalendlyGlobalTracking() {
  useEffect(() => {
    loadAssets();
    attachListener();

    const onClick = (e) => {
      const anchor = e.target.closest && e.target.closest('a[href*="calendly.com"]');
      if (!anchor) return;
      // Skip anchors already handled by CalendlyPopupButton (avoid double-firing).
      if (anchor.getAttribute('data-calendly-tracked') === 'true') return;
      const href = anchor.getAttribute('href') || '';
      if (href.indexOf('calendly.com') === -1) return;

      const serviceName = serviceNameFromUrl(href);
      pushDataLayer({ event: 'calendly_open', service_name: serviceName });
      activeService = serviceName;

      if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
        e.preventDefault();
        window.Calendly.initPopupWidget({ url: href });
      }
      // Otherwise: fall through to plain navigation (untracked booking,
      // but the click itself was recorded).
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

/**
 * Inline Calendly embed with the same booking tracking.
 * Drop-in replacement for a raw <iframe src="https://calendly.com/...">.
 */
export function CalendlyInline({ url, serviceName, height = 700, title, className }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    attachListener();
    const frame = iframeRef.current;
    if (frame && frame.contentWindow) {
      inlineRegistry.set(frame.contentWindow, serviceName || 'Inline embed');
    }
    return () => {
      if (frame && frame.contentWindow) inlineRegistry.delete(frame.contentWindow);
    };
  }, [serviceName]);

  return (
    <iframe
      ref={iframeRef}
      src={url}
      width="100%"
      height={height}
      frameBorder="0"
      title={title || serviceName || 'Schedule appointment'}
      className={className}
    />
  );
}

export default CalendlyPopupButton;
