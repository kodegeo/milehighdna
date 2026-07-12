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
    >
      {children}
    </a>
  );
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
