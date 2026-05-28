# AABB compliance remediation — Mile High DNA Testing

**Date:** May 12, 2026  
**Scope:** `vite-milehighdna/` application source, generated `public/sitemap.xml`, root `index.html`, internal marketing `docs/`, and `vite-milehighdna/docs/`.

## Summary

Language was corrected so **Mile High DNA Testing is not represented as AABB-accredited**. AABB is described as applying to **partner laboratory** where appropriate for legal and immigration relationship testing. **At-home / peace-of-mind kit** content now includes **“AABB does not accredit home DNA test kits.”** where those products are discussed.

Central approved strings live in:

- `src/constants/aabbComplianceCopy.js` (long form, short legal/immigration form, home-kit disclaimer, footer disclosure)

## Deliverables

### 1. Updated codebase

- **New:** `src/constants/aabbComplianceCopy.js` (currently **untracked** in git — add on commit).
- **Global pass:** ~79 JSX files received systematic `AABB-accredited laboratory` → `AABB-accredited partner laboratory` (and plural/facility variants) to clarify that accreditation attaches to the lab, not the collection business.
- **High-risk pages manually hardened:** `/aabb-accredited-dna-testing-denver`, `Home.jsx`, `LegalPaternityTesting.jsx`, `ImmigrationDNATesting.jsx`, `BestAtHomePaternityDNAKit.jsx` (Mile High DNA Corner), footers, navigation, FAQ, Spanish FAQ, appointment copy, prenatal overview, partner-lab wording fixes where bulk replace had doubled “partner.”
- **Docs:** Root `docs/*-dna-testing.md`, `city-page-template.md`, `copy-single-profile.md`, `copy-postmordum.md`, both `peace_of_mind_paternity_test_kit.md` files, `vite-milehighdna/docs/immigration-copy.md`, and `vite-milehighdna/docs/milehighcorner/At-Home-Paternity-DNA-Kit ` (note: filename ends with a space).

### 2. Replacement scale (approximate)

- **Git diff (tracked files):** ~111 files touched, **~550 insertions / ~496 deletions** (includes regenerated `public/sitemap.xml` from `npm run build`).
- **Additional:** 1 new constants module + doc/corner file edits; exact “replacement count” is not meaningful as single edits covered many lines (bulk + targeted).

### 3. URLs / items for manual review

| Item | Reason |
|------|--------|
| **`/aabb-accredited-dna-testing-denver`** | URL kept for SEO; on-page copy, FAQ schema, titles, and OG/Twitter now state clearly that **Mile High DNA Testing is not AABB accredited** and that partner labs hold accreditation where applicable. Confirm with counsel that meta titles still meet your risk tolerance. |
| **`/es/aabb-accreditation`** | Spanish narrative updated; verify translation with a native legal/marketing reviewer. |
| **External laboratory naming** | Copy references **DDC** and **UFC** network language in places; confirm all statements match **current** laboratory contracts and which partner performs each test type. |
| **`vite-milehighdna/docs/milehighcorner/At-Home-Paternity-DNA-Kit `** | Filename has a **trailing space** — awkward for tooling; consider renaming (separate change) when safe for your CMS/git history. |
| **`FAQSection--OLD.jsx`** | Still under `src/components/FAQ/`; if unused, consider deletion in a follow-up to avoid accidental reuse of old claims. |
| **Root `docs/`** | Internal content drafts updated; if any copy is published elsewhere (PDFs, ads, email), reconcile manually — not all channels are in-repo. |
| **AABB complaint PDF** | Path referenced in chat is local to your machine; **not** in this repository — any language in that PDF or outbound email must be reviewed separately. |

## Rules applied

- Did **not** remove legitimate explanations of **AABB as a laboratory standard** for courts/USCIS.
- Did **not** claim Mile High DNA Testing holds AABB accreditation.
- Preserved **SEO-relevant** URLs and keywords where possible by reframing to “partner,” “coordinated with,” and “standards.”

## Build verification

`npm run build` in `vite-milehighdna/` completed successfully after changes.
