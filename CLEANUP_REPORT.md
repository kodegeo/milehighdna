# Mile High DNA Testing - Codebase Cleanup Report

**Generated:** $(date)  
**Scope:** Complete static analysis of `src/` directory  
**Methodology:** Dependency graph analysis, import/export mapping, route verification

---

## Executive Summary

This report identifies **unused components, pages, utilities, and duplicate files** across the Mile High DNA Testing Vite + React codebase. The analysis scanned all files in `src/`, mapped imports/exports, verified routing in `App.jsx`, and checked for dynamic imports.

**Total Findings:**
- **3 unused pages** (not in routing)
- **23+ unused components** (never imported)
- **3 unused utilities/data files**
- **2 duplicate component pairs** (one version unused)
- **2 legacy/misnamed files**

---

## A. Unused Pages

### HIGH Confidence - Safe to Delete

#### 1. `src/pages/ViewResults.jsx`
- **Status:** Not imported in `App.jsx`, no routes defined
- **Reason:** Replaced by `GetResults.jsx` and `MyResults.jsx`
- **Confidence:** HIGH
- **Action:** DELETE

#### 2. `src/pages/es/ViewResultsEs.jsx`
- **Status:** Not imported in `App.jsx`, no routes defined
- **Reason:** Spanish version of unused `ViewResults.jsx`
- **Confidence:** HIGH
- **Action:** DELETE

#### 3. `src/pages/es/ServicesEs.jsx`
- **Status:** Not imported in `App.jsx`, no routes defined
- **Reason:** Spanish services page exists but not wired to routing
- **Confidence:** HIGH
- **Action:** DELETE (or add route if intended to be used)

---

## B. Unused Components

### HIGH Confidence - Safe to Delete

#### Root Components (`src/components/`)

1. **`src/components/Hero.jsx`**
   - Never imported anywhere
   - Replaced by `common/HeroSection.jsx`
   - **Confidence:** HIGH

2. **`src/components/CTASection.jsx`**
   - Never imported
   - Replaced by service-specific CTA components
   - **Confidence:** HIGH

3. **`src/components/ProcessOverview.jsx`**
   - Never imported
   - Generic process overview, not used
   - **Confidence:** HIGH

4. **`src/components/ServicesPreview.jsx`**
   - Never imported
   - Generic services preview, not used
   - **Confidence:** HIGH

5. **`src/components/WhyChooseUs.jsx`**
   - Never imported
   - Replaced by service-specific `WhyChooseUs` components (e.g., `immigration/WhyChooseUs`, `prenatal/PrenatalWhyChooseUs`)
   - **Confidence:** HIGH

6. **`src/components/Footer.jsx`**
   - Never imported
   - No footer component used in app layout
   - **Confidence:** HIGH

7. **`src/components/AdminAuth.jsx`**
   - Never imported
   - Admin authentication component unused
   - **Confidence:** HIGH

#### About Components (`src/components/about/`)

8. **`src/components/about/CallToAction.jsx`**
   - Never imported
   - About page uses `common/CallToAction.jsx` instead
   - **Confidence:** HIGH

9. **`src/components/about/HeroSection.jsx`**
   - Never imported
   - About page uses `common/HeroSection.jsx` instead
   - **Confidence:** HIGH

10. **`src/components/about/ServingColorado.jsx`**
    - Never imported
    - About page uses `common/ServingColorado.jsx` instead
    - **Confidence:** HIGH

#### Spanish Components (`src/components/es/`)

11. **`src/components/es/CTASectionEs.jsx`**
    - Never imported
    - Spanish version of unused `CTASection.jsx`
    - **Confidence:** HIGH

12. **`src/components/es/FooterEs.jsx`**
    - Never imported
    - Spanish version of unused `Footer.jsx`
    - **Confidence:** HIGH

13. **`src/components/es/HeroEs.jsx`**
    - Never imported
    - Spanish version of unused `Hero.jsx`
    - **Confidence:** HIGH

14. **`src/components/es/ProcessOverviewEs.jsx`**
    - Never imported
    - Spanish version of unused `ProcessOverview.jsx`
    - **Confidence:** HIGH

15. **`src/components/es/ServicesPreviewEs.jsx`**
    - Never imported
    - Spanish version of unused `ServicesPreview.jsx`
    - **Confidence:** HIGH

16. **`src/components/es/WhyChooseUsEs.jsx`**
    - Never imported
    - Replaced by service-specific Spanish components
    - **Confidence:** HIGH

17. **`src/components/es/AdminAuthEs.jsx`**
    - Never imported
    - Spanish version of unused `AdminAuth.jsx`
    - **Confidence:** HIGH

18. **`src/components/es/about/CallToActionEs.jsx`**
    - Never imported
    - About page uses `common/CallToActionEs.jsx` instead
    - **Confidence:** HIGH

19. **`src/components/es/about/ServingColoradoEs.jsx`**
    - Never imported
    - About page uses `common/ServingColoradoEs.jsx` instead
    - **Confidence:** HIGH

#### Service-Specific Unused Components

20. **`src/components/es/legalPaternity/ServingColoradoEs.jsx`**
    - Never imported
    - Different from `common/ServingColoradoEs.jsx` (which IS used)
    - Legal paternity pages use `common/ServingColoradoEs.jsx`
    - **Confidence:** HIGH

21. **`src/components/es/legalPaternity/ServiceOverviewEs.jsx`**
    - Never imported
    - Spanish legal paternity page uses `legalPaternity/ServiceOverview.jsx` (English version) instead
    - **Confidence:** HIGH

22. **`src/components/es/immigration/ComplianceEs.jsx`**
    - Never imported
    - Spanish immigration page uses `es/immigration/Compliance.jsx` (without "Es" suffix) instead
    - **Confidence:** HIGH

23. **`src/components/es/immigration/WhoNeedsThisEs.jsx`**
    - Never imported
    - Spanish immigration page uses `es/immigration/WhoNeedsTestEs.jsx` instead
    - **Confidence:** HIGH

### MEDIUM Confidence - Verify Before Deleting

24. **`src/components/Testimonials.jsx`**
    - Used in `Prenatal.jsx` (English)
    - Spanish version `es/TestimonialsEs.jsx` is used in `es/PrenatalEs.jsx`
    - **Confidence:** MEDIUM (verify if generic testimonials are still needed)

---

## C. Unused Utilities & Data Files

### HIGH Confidence - Safe to Delete

1. **`src/utils/shipping.js`**
   - Never imported
   - Replaced by `utils/getShippingRate.js` (which IS used)
   - **Confidence:** HIGH

2. **`src/data/Intl_Shipping_Rates.json`**
   - Never imported
   - Not referenced anywhere
   - **Confidence:** HIGH

3. **`src/data/shipping_rates.json`**
   - Never imported
   - Replaced by `data/shippingRates.json` (which IS used by `getShippingRate.js`)
   - **Confidence:** HIGH

---

## D. Likely Duplicates

### Duplicate Component Pairs

#### 1. Immigration Compliance Components
- **Used:** `src/components/es/immigration/Compliance.jsx`
- **Unused:** `src/components/es/immigration/ComplianceEs.jsx`
- **Issue:** Spanish page imports `Compliance.jsx` (without "Es" suffix), but `ComplianceEs.jsx` exists
- **Recommendation:** 
  - Option A: Delete `ComplianceEs.jsx` if `Compliance.jsx` is the correct Spanish version
  - Option B: Update `ImmigrationDNATestsEs.jsx` to import `ComplianceEs.jsx` if that's the intended version
- **Confidence:** HIGH

#### 2. Immigration "Who Needs" Components
- **Used:** `src/components/es/immigration/WhoNeedsTestEs.jsx`
- **Unused:** `src/components/es/immigration/WhoNeedsThisEs.jsx`
- **Issue:** Two similar components, only one is used
- **Recommendation:** Delete `WhoNeedsThisEs.jsx` if `WhoNeedsTestEs.jsx` is the correct version
- **Confidence:** HIGH

#### 3. Legal Paternity ServiceOverview
- **Used:** `src/components/legalPaternity/ServiceOverview.jsx` (English)
- **Unused:** `src/components/es/legalPaternity/ServiceOverviewEs.jsx` (Spanish)
- **Issue:** Spanish legal paternity page uses English `ServiceOverview` component
- **Recommendation:** 
  - Option A: Delete `ServiceOverviewEs.jsx` if English version is intentionally used
  - Option B: Update `LegalPaternityTestsEs.jsx` to use `ServiceOverviewEs.jsx` if Spanish version is needed
- **Confidence:** HIGH

---

## E. Deprecated or Legacy Files

### HIGH Confidence - Safe to Delete

1. **`src/app.js`**
   - Express server file (CommonJS)
   - Not used in frontend React app
   - Likely belongs to a separate server directory
   - **Confidence:** HIGH
   - **Action:** DELETE (or move to server directory if needed)

2. **`src/App.css`**
   - Never imported
   - Contains default Vite template styles (unused)
   - **Confidence:** HIGH
   - **Action:** DELETE

3. **`src/components/es/Navigation.Es`**
   - Wrong file extension (`.Es` instead of `.jsx`)
   - Never imported (correct file is `NavigationEs.jsx`)
   - **Confidence:** HIGH
   - **Action:** DELETE

---

## F. Files That Should NOT Be Deleted

### Dynamically Referenced (Keep These)

1. **`src/components/peaceOfMind/ServiceOverview.jsx`**
   - ✅ USED in `es/PeaceOfMindPaternityTestsEs.jsx`
   - Keep this file

2. **`src/components/prenatal/PrenatalFAQ.jsx`**
   - ✅ USED in `Prenatal.jsx`
   - Keep this file

3. **`src/components/siblingship/CallToAction.jsx`**
   - ✅ USED in `Siblingship.jsx`
   - Keep this file

4. **`src/components/about/WhoWeAre.jsx`**
   - ✅ USED in `AboutUs.jsx` and `es/AboutUsEs.jsx`
   - Keep this file

5. **`src/components/about/ValuePillars.jsx`**
   - ✅ USED in `AboutUs.jsx` and `es/AboutUsEs.jsx`
   - Keep this file

6. **`src/components/AppointmentForm.jsx`**
   - ✅ USED in `AppointmentFormPage.jsx`
   - Keep this file

7. **`src/components/Testimonials.jsx`**
   - ✅ USED in `Prenatal.jsx`
   - Keep this file

8. **`src/components/es/TestimonialsEs.jsx`**
   - ✅ USED in `es/PrenatalEs.jsx`
   - Keep this file

9. **`src/infrastructure/api/*.js`**
   - Server-side API routes (not frontend imports)
   - May be used by backend/server
   - **Action:** VERIFY with backend team before deleting

10. **`src/scripts/*.js`**
    - Admin/utility scripts (not imported in React app)
    - May be run manually or via CLI
    - **Action:** VERIFY usage before deleting

11. **`src/data/shippingRates.json`**
    - ✅ USED by `utils/getShippingRate.js`
    - Keep this file

12. **`src/i18n.js`**
    - ✅ USED in `main.jsx`
    - Keep this file

13. **`src/infrastructure/supabaseClient.js`**
    - ✅ USED extensively throughout the app
    - Keep this file

14. **`src/infrastructure/googleAuth.js`**
    - ✅ USED by `infrastructure/api/*.js` files
    - Keep this file

---

## G. Summary by Confidence Level

### HIGH Confidence (Safe to Delete - 28 files)

**Pages (3):**
- `src/pages/ViewResults.jsx`
- `src/pages/es/ViewResultsEs.jsx`
- `src/pages/es/ServicesEs.jsx`

**Components (23):**
- `src/components/Hero.jsx`
- `src/components/CTASection.jsx`
- `src/components/ProcessOverview.jsx`
- `src/components/ServicesPreview.jsx`
- `src/components/WhyChooseUs.jsx`
- `src/components/Footer.jsx`
- `src/components/AdminAuth.jsx`
- `src/components/about/CallToAction.jsx`
- `src/components/about/HeroSection.jsx`
- `src/components/about/ServingColorado.jsx`
- `src/components/es/CTASectionEs.jsx`
- `src/components/es/FooterEs.jsx`
- `src/components/es/HeroEs.jsx`
- `src/components/es/ProcessOverviewEs.jsx`
- `src/components/es/ServicesPreviewEs.jsx`
- `src/components/es/WhyChooseUsEs.jsx`
- `src/components/es/AdminAuthEs.jsx`
- `src/components/es/about/CallToActionEs.jsx`
- `src/components/es/about/ServingColoradoEs.jsx`
- `src/components/es/legalPaternity/ServingColoradoEs.jsx`
- `src/components/es/legalPaternity/ServiceOverviewEs.jsx`
- `src/components/es/immigration/ComplianceEs.jsx`
- `src/components/es/immigration/WhoNeedsThisEs.jsx`

**Utilities/Data (3):**
- `src/utils/shipping.js`
- `src/data/Intl_Shipping_Rates.json`
- `src/data/shipping_rates.json`

**Legacy/Misnamed (3):**
- `src/app.js`
- `src/App.css`
- `src/components/es/Navigation.Es`

### MEDIUM Confidence (Verify Before Deleting - 1 file)

- `src/components/Testimonials.jsx` (used but may be replaceable)

### LOW Confidence (Keep - Verify Usage)

- `src/infrastructure/api/*.js` (server-side, verify with backend)
- `src/scripts/*.js` (may be CLI tools, verify usage)

---

## H. Recommended Cleanup Actions

### Phase 1: High-Confidence Deletions (28 files)

1. Delete all unused pages (3 files)
2. Delete all unused root components (7 files)
3. Delete all unused about components (3 files)
4. Delete all unused Spanish generic components (7 files)
5. Delete unused service-specific Spanish components (4 files)
6. Delete unused utilities/data files (3 files)
7. Delete legacy/misnamed files (3 files)

### Phase 2: Duplicate Resolution

1. Resolve `Compliance.jsx` vs `ComplianceEs.jsx` conflict
2. Delete `WhoNeedsThisEs.jsx` (duplicate of `WhoNeedsTestEs.jsx`)
3. Resolve `ServiceOverviewEs.jsx` usage in Spanish legal paternity page

### Phase 3: Verification

1. Verify `infrastructure/api/*.js` usage with backend team
2. Verify `scripts/*.js` usage (may be CLI tools)
3. Test application after deletions to ensure no broken imports

---

## I. Notes & Warnings

### ⚠️ Important Considerations

1. **Spanish Component Naming Inconsistency:**
   - Some Spanish pages import English components (e.g., `LegalPaternityTestsEs.jsx` uses `legalPaternity/ServiceOverview.jsx`)
   - Some Spanish components have inconsistent naming (`Compliance.jsx` vs `ComplianceEs.jsx`)
   - **Recommendation:** Standardize naming convention and update imports

2. **Missing Spanish Routes:**
   - `ServicesEs.jsx` exists but has no route in `App.jsx`
   - **Recommendation:** Either add route or delete file

3. **ViewResults Replacement:**
   - `ViewResults.jsx` and `ViewResultsEs.jsx` appear to be replaced by `GetResults.jsx` and `MyResults.jsx`
   - **Recommendation:** Verify no external links reference old routes before deletion

4. **Test Coverage:**
   - Run full test suite after deletions
   - Check for any dynamic imports or string-based component references

5. **Build Verification:**
   - Run `npm run build` after deletions to catch any missing imports
   - Check for console warnings about unused exports

---

## J. File Count Summary

| Category | Count | Confidence |
|----------|-------|------------|
| Unused Pages | 3 | HIGH |
| Unused Components | 23 | HIGH |
| Unused Utilities/Data | 3 | HIGH |
| Legacy/Misnamed | 3 | HIGH |
| Duplicates | 3 | HIGH |
| **Total Safe to Delete** | **35** | **HIGH** |
| Verify Before Delete | 1 | MEDIUM |
| Keep (Used) | ~150+ | N/A |

---

## K. Next Steps

1. **Review this report** with the development team
2. **Backup the codebase** before deletions
3. **Delete files in phases** (start with HIGH confidence)
4. **Run tests** after each phase
5. **Update documentation** if needed
6. **Commit changes** with clear messages

---

**End of Report**

