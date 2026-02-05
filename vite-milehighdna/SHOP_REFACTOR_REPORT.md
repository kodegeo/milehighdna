# Shop Refactor Report — Ecommerce IA & Intent Separation

## Summary

The single product page `/products/peace-of-mind-dna-kit` has been replaced with a scalable **/shop** architecture. Clinical services remain under **/services**; at-home DNA kits and ecommerce live under **/shop**. Checkout is only reachable from shop product pages.

---

## Target information architecture

| Path | Purpose |
|------|--------|
| `/shop` | Collection hub — at-home DNA test kits, expandable for future products |
| `/shop/at-home-paternity-test` | Product detail — at-home paternity kit (canonical ecommerce page) |
| `/services/*` | In-person, clinical, appointment-based DNA testing (unchanged) |

**Mapping:** `/services/*` = clinical; `/shop/*` = at-home kits, ecommerce, mail-in. No mixing of CTAs, language, or intent between the two.

---

## New files created

| File | Purpose |
|------|--------|
| `src/pages/shop/ShopCollection.jsx` | **/shop** — Hero (“At-Home DNA Test Kits”), product grid (card layout), trust signals, footer cross-link to `/services` only |
| `src/pages/shop/AtHomePaternityTest.jsx` | **/shop/at-home-paternity-test** — Hero product block, What’s Included, How It Works, Who This Is For, Who This Is NOT For (with links to legal + immigration services), product FAQ, Buy Now → checkout (domestic/international) |

---

## Old files deprecated (not deleted)

| File | Status |
|------|--------|
| `src/pages/PeaceOfMindDNAKit.jsx` | **Deprecated.** No longer used in routing. Kept in repo; route now redirects to `/shop/at-home-paternity-test`. Can be removed in a future cleanup. |

---

## Routes added

| Route | Component |
|-------|-----------|
| `/shop` | `ShopCollection` |
| `/shop/at-home-paternity-test` | `AtHomePaternityTest` |

---

## Redirects implemented

| Source | Destination |
|--------|-------------|
| `/products/peace-of-mind-dna-kit` | `/shop/at-home-paternity-test` (client-side `Navigate` in App.jsx + permanent redirect in `vercel.json`) |
| `/peace-of-mind-dna-kit` | `/shop/at-home-paternity-test` (updated in `vercel.json`; was previously → `/products/peace-of-mind-dna-kit`) |

---

## Internal links updated

All former links to `/products/peace-of-mind-dna-kit` now point to `/shop/at-home-paternity-test` in:

- `src/components/Navigation.jsx`
- `src/pages/Home.jsx`
- `src/pages/DNATestingTypes.jsx`
- `src/pages/services/NonLegalPaternityTesting.jsx`
- `src/pages/services/AtHomeDNAKits.jsx`
- `src/pages/services/DiscreetDNATesting.jsx`
- `src/pages/mile-high-dna-corner/LegalVsNonLegal.jsx`
- `src/pages/mile-high-dna-corner/BestAtHomePaternityDNAKit.jsx`

---

## Checkout flow

- **Preserved:** `CheckoutDomestic.jsx`, `CheckoutInternational.jsx` — unchanged except for a **from-shop guard**.
- **Guard:** Checkout pages require `location.state.fromShop === true`. If missing (e.g. direct visit or from a non-shop page), user is redirected to `/shop`. Only `AtHomePaternityTest` passes `fromShop: true` when navigating to checkout.
- **Trigger:** Checkout is triggered only from `/shop/at-home-paternity-test` (and future shop product pages). Service pages do not link to checkout.

---

## Sitemap & SEO

- **public/sitemap.xml:** Replaced `/products/peace-of-mind-dna-kit` with `/shop` and `/shop/at-home-paternity-test` (priority 0.8, weekly).
- **generateSitemap.js** (root): Product entry replaced with `/shop` and `/shop/at-home-paternity-test`.
- **scripts/generateSitemap.js:** `/products/peace-of-mind-dna-kit` added to `EXCLUDED_ROUTES`; `/shop` and `/shop/at-home-paternity-test` get priority 0.8 and weekly changefreq.

---

## Design & UX rules applied

- **Shop:** Ecommerce-first, card-based layout; no medical/clinical tone; no appointment or “schedule” CTAs.
- **Footer cross-link (shop only):** “Need a court-admissible or in-person test? View our DNA testing services.” → `/services`.
- **Product page:** Clear “Who This Is NOT For” with links to `/services/legal-paternity-testing` and `/services/immigration-dna-testing` so kit intent stays separate from clinical intent.

---

## Success criteria

- **Google:** `/services` = clinical; `/shop` = ecommerce; kit keywords map to `/shop/at-home-paternity-test`.
- **Services SEO:** No structural changes to `/services/*`; authority and intent remain intact.
- **Scalability:** New products can be added to `SHOP_PRODUCTS` in `ShopCollection.jsx` and new routes/pages under `/shop/[slug]` without changing the overall IA.
