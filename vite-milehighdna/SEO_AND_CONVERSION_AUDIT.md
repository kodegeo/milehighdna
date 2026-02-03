# SEO & Conversion Audit: Mile High DNA Testing

**Purpose:** Understand why the site gets little traffic and why visitors do not book or contact.  
**Scope:** Google algorithm alignment, discoverability, and conversion paths.  
**No code changes**—analysis and recommendations only.

---

## Executive summary

Two separate problems are at play:

1. **Traffic:** Few people find the site because of **discoverability and authority** (how Google chooses what to show), not only on-page SEO.
2. **Conversion:** Visitors who land on the site often don’t book or call because of **friction, clarity, and trust** in the path from “interested” to “appointment/call.”

The site’s technical and on-page SEO (titles, meta, canonicals, sitemap, schema) are in decent shape. The bigger levers are **off-site authority**, **keyword/position reality**, and **conversion design**.

---

# Part 1: Why “no one is going to the site”

## How Google’s algorithm affects you

Google ranks pages using:

- **Relevance:** Query intent, keywords, and content match.
- **Quality / E-E-A-T:** Experience, expertise, authoritativeness, trust (reviews, citations, backlinks, clear business info).
- **User experience:** Core Web Vitals, mobile-friendliness, clear structure.
- **Signals of demand:** Clicks, dwell time, low bounce when the result is shown.

Your site can have good titles and meta tags and still get almost no traffic if:

- The domain has **low authority** (few quality backlinks, new or small site).
- Competitors (national labs, big local players) **outrank you** for the same terms.
- You’re not **discoverable** where people look (Maps, “near me,” paid search, referrals).

So “no one is going to the site” is usually a mix of:

1. **Low rankings** for the terms you care about (e.g. “DNA testing Denver,” “paternity test Denver”).
2. **Low impressions** (your pages rarely appear in search results at all).
3. **Traffic going elsewhere** (competitors, Google Business Profile, directories, ads).

## What the site is doing well (SEO foundation)

- **Canonicals:** Pages use canonical URLs; helps avoid duplicate-content issues.
- **Sitemap:** `sitemap.xml` exists and is referenced in `robots.txt`; many URLs (services, locations, guides) are listed.
- **Structured data:** LocalBusiness, Service, FAQPage, breadcrumbs in places; supports rich results and understanding.
- **Titles and meta:** Home, Appointments, Services, and key service/location pages have unique titles and descriptions with location and service keywords.
- **Mobile:** Responsive layout; viewport set.
- **Spanish:** Hreflang and `/es` routes; good for bilingual intent.
- **robots.txt:** Allows crawling of public content; blocks admin/private paths.

So the **technical and on-page base** is there. The gap is less “missing tags” and more **visibility and authority**.

## Likely reasons traffic is low

### 1. Domain authority and backlinks

- If the site has **few strong backlinks** (from local news, legal/immigration sites, health directories, AABB or industry references), Google has little reason to treat it as a top result.
- **Action:** Build links from:
  - Local Denver/Colorado business and health directories.
  - Legal and immigration attorney sites (guest posts, listings, “resources we use”).
  - AABB or industry-related citations.
  - Local news or community sites (e.g. “DNA testing for families in Denver”).

### 2. Competition for commercial keywords

- Terms like “DNA testing Denver,” “paternity test Denver,” “legal paternity test Colorado” are **high intent and competitive**.
- National labs and larger local players often have more content, more links, and more history.
- **Action:** Focus on **long-tail and local** phrases: “court-admissible paternity test Denver,” “non-invasive prenatal paternity Denver,” “immigration DNA test Denver,” “AABB DNA testing Colorado,” plus city/neighborhood variants (e.g. “DNA testing Capitol Hill Denver”). Use these in titles, headings, and body copy where it stays natural.

### 3. Google Business Profile (GBP) and local pack

- Many “DNA test near me” or “paternity test Denver” searches show the **local pack** (map + 3 businesses).
- If your **GBP is missing, incomplete, or inconsistent** (name, address, phone, hours, categories), you won’t show or will rank poorly there.
- **Action:** Claim/optimize GBP with:
  - One consistent address (see data consistency below).
  - Primary category (e.g. “Medical laboratory” or “Diagnostic lab”) and relevant services.
  - Regular posts (offers, “what to expect,” FAQs).
  - Encourage Google reviews from real clients (reviews are a strong local ranking and trust signal).

### 4. Sitemap and indexing

- You have **many URLs** (services, locations, guides, corner articles). If only a few are indexed or getting impressions, most of the site is “invisible” in search.
- **Action:** In Google Search Console (GSC):
  - Check **Coverage / Pages**: how many indexed vs excluded/errors.
  - Check **Performance**: which URLs get impressions/clicks. Double down on improving and expanding content for those, and fix any indexing issues for important pages.
  - Submit sitemap and request indexing for key service and location pages if needed.

### 5. Data consistency (address and NAP)

- **Two addresses** appear in the codebase:
  - **975 N Lincoln St, Suite 205C, Denver, CO 80203** (Home, most service pages, index.html noscript, ServingColorado).
  - **975 N. Lincoln Street Suite 205 C, Denver, CO 80203** (Appointments page schema, FamilyRelationshipDNA schema).
- Inconsistent **NAP** (Name, Address, Phone) across the site and vs. GBP can:
  - Confuse users (“which address do I go to?”).
  - Hurt local SEO and trust (Google prefers one clear, consistent location).
- **Action:** Decide the **single** official address. Use it everywhere (schema, footer, contact, GBP). If you have two locations, present them clearly as two distinct locations with separate schema; otherwise use one everywhere.

### 6. Content depth and intent

- Google favors pages that **fully answer the query** and show expertise.
- Service and location pages have good structure; **Mile High DNA Corner** can be used to target more long-tail questions (e.g. “how much does a legal paternity test cost in Colorado,” “what to expect NIPP Denver”).
- **Action:** Align Corner articles with real search questions (use GSC “Queries” and a keyword tool). Ensure each has one clear H1, good paragraphs (not just bullets), and internal links to the relevant service/booking page.

---

# Part 2: Why users don’t reach out or book

## Conversion path today

1. **Home:** Hero has “Book Now” (→ `/appointments`) and “Call Now.”
2. **Appointments page:**
   - Hero: **only “Call Today”** (no “Book online” in the hero).
   - Below: “Free Consultation” section with **one Calendly iframe** (30-minute consultation).
   - Then **ScheduleTestSection**: many service cards, each with “Book Appointment” → **external Calendly** (different links per service).

So the main paths are:

- **Call** (phone CTA in nav, hero, CallToAction sections).
- **Book:** Go to `/appointments` → scroll to Calendly embed or click a service card → **leave the site** to Calendly.

## Friction and clarity issues

### 1. Appointments hero does not emphasize booking

- The appointments hero says “Schedule Your DNA Test” but the **only** CTA is “Call Today.” There is no “Book online” or “See times” in the hero.
- **Effect:** Users who prefer to book online may not see a clear path and may leave.
- **Recommendation:** Add a primary CTA in the appointments hero that goes to the same Calendly (or to the booking section on the page), e.g. “Book your appointment” or “See available times,” and keep “Call Today” as secondary.

### 2. Booking happens off-site (Calendly)

- Every “Book Appointment” goes to **Calendly** (external). That means:
  - User leaves your domain.
  - Extra step (Calendly’s UI, possibly login or form).
  - If they don’t complete there, you don’t have a clear “almost booked” moment on your site to retarget or simplify.
- **Recommendation:** Keep using Calendly if it works operationally, but (a) make the **first** step on-site (e.g. “Choose your test” → then “Book” opens Calendly with the right link), and (b) consider a post-Calendly thank-you or email that brings them back to your site (e.g. “What to expect at your appointment”) to reinforce trust and reduce no-shows.

### 3. Too many choices before booking

- Appointments page lists **many** test types (legal, non-legal, prenatal, siblingship, grandparentage, immigration, etc.). Someone who just wants “a paternity test” may feel unsure which card to click.
- **Recommendation:** Add a short “Not sure which test?” block with 1–2 sentences and a link to “Free consultation” or “Call us.” Optionally a simple “Most popular: Legal paternity” / “Most popular: Peace of mind” so indecisive users have a default path.

### 4. Trust and “what happens next”

- **Trust:** One testimonial on the Services page helps; more (Google reviews, short quotes, “as seen in” or “used by attorneys”) would strengthen credibility.
- **Clarity:** Many pages don’t spell out “what happens after I book” (e.g. “You’ll get a confirmation → come to our office at 975 N Lincoln St → we collect samples → results in 3–5 days”). Reducing uncertainty increases completion.
- **Recommendation:** Add a short “What happens next” or “What to expect” on the Appointments page and in the global footer or a sticky CTA. Repeat the same story in confirmation emails and on key service pages.

### 5. Phone as the only hero CTA on Appointments

- If the goal is to **increase bookings**, having only “Call Today” in the hero under-serves users who prefer to book online.
- **Recommendation:** Make “Book your appointment” (or “See times”) the primary hero CTA on `/appointments`, and “Call (720) 900-9342” the secondary CTA. Keep “Call” prominent elsewhere (nav, footer, CallToAction sections).

### 6. Free consultation vs. “book my test”

- The big Calendly embed is labeled “Free Consultation.” Some users want to **book the test**, not a consultation. If the same Calendly is used for both, the label can be clarified: e.g. “Book a free consultation or your DNA test appointment.”
- **Recommendation:** Clarify in copy whether this Calendly is for consultation only or also for booking the test. If both, say so explicitly so users know they can book directly.

---

# Part 3: Checklist of actions (no code)

Use this as a prioritised to-do list.

## Traffic (get more people to the site)

- [ ] **Google Search Console:** Confirm property, check indexed pages and impressions; fix coverage errors; see which queries and URLs get traction.
- [ ] **Keyword focus:** Emphasise long-tail + local (e.g. “court-admissible paternity test Denver,” “AABB DNA testing Colorado,” “non-invasive prenatal paternity Denver”) in titles and content.
- [ ] **Google Business Profile:** One consistent NAP; complete profile; regular posts; ask for Google reviews.
- [ ] **Backlinks:** List in local and legal/health directories; pursue 2–3 quality links from attorney or immigration sites, or local/industry references.
- [ ] **Address consistency:** Choose one official address (or two, if both real); use it in all schema, footer, GBP, and copy.
- [ ] **Content:** Use Mile High DNA Corner to answer real search questions; add internal links to the right service and `/appointments`.

## Conversion (turn visitors into calls and bookings)

- [ ] **Appointments hero:** Add a primary “Book your appointment” / “See times” CTA next to or above “Call Today.”
- [ ] **Clarify Calendly:** Label whether the main embed is “consultation,” “book your test,” or both; reduce confusion.
- [ ] **“Not sure which test?”:** Short block on Appointments (and maybe Services) with “Call for a free consultation” or “Most popular options.”
- [ ] **“What happens next”:** One short section (Appointments + footer or key pages) explaining: book → confirm → come in → samples → results in 3–5 days.
- [ ] **Trust:** Add 1–2 more testimonials or review quotes; consider “Trusted by Colorado families and attorneys” or similar near CTAs.
- [ ] **Post-booking:** Simple confirmation email or page that sets expectations and repeats address and next steps.

---

# Summary

- **Traffic:** The site has a solid technical and on-page SEO base. The main limits are likely **authority** (backlinks, GBP, reviews) and **competition** for generic terms. Focus on GSC data, long-tail/local keywords, GBP, NAP consistency, and a few strong backlinks.
- **Conversion:** The path to book is **multi-step and partly off-site**, and the Appointments page **does not lead with “book online.”** Reducing friction (clear primary CTA, fewer confusing choices, “what happens next”) and strengthening trust (reviews, clear process) should help more visitors become calls and bookings.

No code was modified in this audit; the above are strategic and operational recommendations you can implement in content, design, and marketing.
