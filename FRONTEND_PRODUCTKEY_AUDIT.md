# Frontend productKey Audit Report
**Date:** 2026-01-24
**Purpose:** Find all places where productKey is defined, defaulted, hard-coded, or passed via navigate() state

---

## 📍 1. PRODUCTKEY DEFINITIONS & ASSIGNMENTS

### ✅ URL Parameter Extraction (Route)
**File:** `src/pages/shop/ProductPage.jsx`
**Line:** 22
**Code:**
```javascript
const { productKey } = useParams();
```
**Value:** Dynamic from URL `/shop/product/:productKey`
**Source:** React Router URL parameter
**Status:** ✅ CORRECT - Extracted from route

---

### ✅ Prop Assignment (ProductPage → ProductDetailTemplate)
**File:** `src/pages/shop/ProductPage.jsx`
**Line:** 39
**Code:**
```javascript
productKey: productKey, // Pass productKey instead of stripePriceId
```
**Value:** Same as URL param (from line 22)
**Context:** Inside `templateProduct` object passed to `ProductDetailTemplate`
**Status:** ✅ CORRECT - Passes URL param to component

---

### ✅ Prop Access (ProductDetailTemplate)
**File:** `src/components/shop/ProductDetailTemplate.jsx`
**Line:** 74, 94
**Code:**
```javascript
productKey: product.productKey, // Pass productKey instead of stripePriceId
```
**Value:** From `product` prop (which comes from ProductPage)
**Context:** Inside `navigate()` state objects for domestic/international checkout
**Status:** ✅ CORRECT - Passes prop value to checkout

---

## 📍 2. NAVIGATE() CALLS WITH STATE

### ✅ Shop Checkout - Domestic
**File:** `src/components/shop/ProductDetailTemplate.jsx`
**Line:** 64-77
**Code:**
```javascript
navigate("/checkout-domestic", {
  state: {
    fromShop: true,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    customerEmail: customerEmail.trim(),
    phoneNumber: phoneNumber.trim(),
    country: "US",
    productName: product.title,
    unitPrice: product.unitPrice,
    productKey: product.productKey, // Line 74
    shippingFee: domesticShipping,
  },
});
```
**productKey Value:** `product.productKey` (from prop)
**Status:** ✅ CORRECT - Passes productKey to checkout

---

### ✅ Shop Checkout - International
**File:** `src/components/shop/ProductDetailTemplate.jsx`
**Line:** 85-97
**Code:**
```javascript
navigate("/checkout-international", {
  state: {
    fromShop: true,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    customerEmail: customerEmail.trim(),
    phoneNumber: phoneNumber.trim(),
    productName: product.title,
    unitPrice: product.unitPrice,
    productKey: product.productKey, // Line 94
    shippingFee: internationalShipping,
  },
});
```
**productKey Value:** `product.productKey` (from prop)
**Status:** ✅ CORRECT - Passes productKey to checkout

---

### ❌ MISSING PRODUCTKEY - Legacy Page (Deprecated)
**File:** `src/pages/PeaceOfMindDNAKit.jsx`
**Line:** 44-55 (domestic), 63-73 (international)
**Code:**
```javascript
navigate("/checkout-domestic", {
  state: {
    firstName,
    lastName,
    customerEmail,
    phoneNumber,
    country: "US",
    productName,
    unitPrice: price,
    shippingFee: domesticShipping,
    // ❌ MISSING: productKey
  },
});
```
**productKey Value:** ❌ NOT PRESENT
**Status:** ⚠️ **BLOCKING BUG** - This page is deprecated but still exists. If accessed, checkout will fail validation.

---

## 📍 3. PRODUCTKEY RECEPTION (Checkout Pages)

### ✅ CheckoutDomestic - Receives productKey
**File:** `src/pages/CheckoutDomestic.jsx`
**Line:** 18
**Code:**
```javascript
productKey, // Accept productKey instead of stripePriceId
```
**Value:** From `location.state` (passed via navigate)
**Default:** ❌ NO DEFAULT - Will be `undefined` if not passed
**Validation:** Line 99-104 - Checks if missing and shows error
**Status:** ✅ CORRECT - No default, fails loudly if missing

---

### ✅ CheckoutInternational - Receives productKey
**File:** `src/pages/CheckoutInternational.jsx`
**Line:** 22
**Code:**
```javascript
productKey, // Accept productKey instead of stripePriceId
```
**Value:** From `location.state` (passed via navigate)
**Default:** ❌ NO DEFAULT - Will be `undefined` if not passed
**Validation:** Line 133-138 - Checks if missing and shows error
**Status:** ✅ CORRECT - No default, fails loudly if missing

---

## 📍 4. HARD-CODED PRODUCTKEY VALUES

### ✅ Legacy Route Redirects (Hard-coded in Navigate)
**File:** `src/pages/shop/AtHomePaternityTest.jsx`
**Line:** 10
**Code:**
```javascript
<Navigate to="/shop/product/PATERNITY_AT_HOME_SINGLE" replace />
```
**Value:** `"PATERNITY_AT_HOME_SINGLE"` (hard-coded string)
**Status:** ✅ CORRECT - Legacy redirect, productKey becomes URL param

---

**File:** `src/pages/shop/AtHomePaternityTestMultipleChildren.jsx`
**Line:** 10
**Code:**
```javascript
<Navigate to="/shop/product/PATERNITY_AT_HOME_MULTI_CHILD" replace />
```
**Value:** `"PATERNITY_AT_HOME_MULTI_CHILD"` (hard-coded string)
**Status:** ✅ CORRECT - Legacy redirect

---

**File:** `src/pages/shop/MultiLocationPaternityDNATest.jsx`
**Line:** 10
**Code:**
```javascript
<Navigate to="/shop/product/PATERNITY_MULTI_LOCATION" replace />
```
**Value:** `"PATERNITY_MULTI_LOCATION"` (hard-coded string)
**Status:** ✅ CORRECT - Legacy redirect

---

**File:** `src/pages/shop/PeaceOfMindDNATestProduct.jsx`
**Line:** 10
**Code:**
```javascript
<Navigate to="/shop/product/PATERNITY_PEACE_OF_MIND" replace />
```
**Value:** `"PATERNITY_PEACE_OF_MIND"` (hard-coded string)
**Status:** ✅ CORRECT - Legacy redirect

---

**File:** `src/pages/shop/FastTrackResultsUpgrade.jsx`
**Line:** 10
**Code:**
```javascript
<Navigate to="/shop/product/FAST_TRACK_RESULTS" replace />
```
**Value:** `"FAST_TRACK_RESULTS"` (hard-coded string)
**Status:** ✅ CORRECT - Legacy redirect

---

### ✅ Product Category Pages (Hard-coded in Arrays)
**File:** `src/pages/shop/PaternityDNATest.jsx`
**Lines:** 7-13
**Code:**
```javascript
const PATERNITY_PRODUCT_KEYS = [
  "PATERNITY_AT_HOME_SINGLE",
  "PATERNITY_AT_HOME_MULTI_CHILD",
  "PATERNITY_PEACE_OF_MIND",
  "PATERNITY_MULTI_LOCATION",
  "FAST_TRACK_RESULTS",
];
```
**Values:** Hard-coded product key strings
**Usage:** Used to build `detailUrl: `/shop/product/${key}``
**Status:** ✅ CORRECT - These become URL params, then extracted via useParams()

---

**File:** `src/pages/shop/GrandparentDNATest.jsx`
**Lines:** 7-11
**Code:**
```javascript
const GRANDPARENT_PRODUCT_KEYS = [
  "GRANDPARENT_SINGLE_LOCATION",
  "GRANDPARENT_MULTI_LOCATION",
  "GRANDPARENT_PEACE_OF_MIND",
];
```
**Status:** ✅ CORRECT

---

**File:** `src/pages/shop/SiblingDNATest.jsx`
**Lines:** 7-11
**Code:**
```javascript
const SIBLING_PRODUCT_KEYS = [
  "SIBLING_SINGLE_LOCATION",
  "SIBLING_MULTI_LOCATION",
  "SIBLING_PEACE_OF_MIND",
];
```
**Status:** ✅ CORRECT

---

**File:** `src/pages/shop/DiscreetDNATest.jsx`
**Lines:** 7-13
**Code:**
```javascript
const DISCREET_PRODUCT_KEYS = [
  "DISCREET_AT_HOME_DNA_TEST",
  "DISCREET_TOOTHBRUSH",
  "DISCREET_TWO_TOOTHBRUSH",
  "DISCREET_HAIR_FOLICLE",
  "DISCREET_PEACE_OF_MIND_DNA_TEST",
];
```
**Status:** ✅ CORRECT

---

## 📍 5. PRODUCTKEY DEFAULTS & FALLBACKS

### ✅ No Defaults Found
**Search Pattern:** `productKey ||`, `productKey ??`, `productKey =`
**Result:** ❌ NO MATCHES FOUND
**Status:** ✅ CORRECT - No fallback defaults exist

---

## 📍 6. LINK COMPONENTS WITH STATE

### ✅ Shop Product Links (No State, URL Only)
**File:** `src/pages/shop/ShopBucketLayout.jsx`
**Line:** 130-135
**Code:**
```javascript
<Link
  to={product.detailUrl || "#"}
  className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
>
  {product.cta || "Buy Now"}
</Link>
```
**State:** ❌ NO STATE - Uses URL only (`/shop/product/${key}`)
**productKey:** Extracted from URL via `useParams()` in ProductPage
**Status:** ✅ CORRECT - productKey comes from URL, not state

---

## 🚨 BLOCKING BUGS IDENTIFIED

### ❌ BLOCKING BUG #1: PeaceOfMindDNAKit Missing productKey
**Severity:** HIGH
**File:** `src/pages/PeaceOfMindDNAKit.jsx`
**Lines:** 44-55, 63-73
**Issue:** 
- Page is marked as `@deprecated` but still exists
- Navigate calls to checkout do NOT include `productKey`
- Checkout validation will fail with: "Product key is required for shop orders"

**Impact:**
- If user somehow accesses this page, checkout will fail
- Page should redirect or be removed

**Recommendation:**
- Add redirect at top of component: `<Navigate to="/shop/product/PATERNITY_AT_HOME_SINGLE" replace />`
- OR delete the file entirely

---

## ✅ VERIFIED CORRECT FLOWS

### Flow 1: Category Page → Product Page → Checkout
```
Category Page (PaternityDNATest.jsx)
  ↓ (Link with detailUrl: `/shop/product/${key}`)
ProductPage.jsx (extracts productKey from URL via useParams)
  ↓ (passes productKey in templateProduct prop)
ProductDetailTemplate.jsx (receives product.productKey)
  ↓ (navigate with state: { productKey: product.productKey })
CheckoutDomestic/International (receives productKey from state)
  ↓ (sends productKey to backend)
Backend resolves stripePriceId from productKey
```

**Status:** ✅ ALL STEPS VERIFIED

---

## 📋 SUMMARY

### productKey Sources:
1. ✅ URL parameter (`/shop/product/:productKey`) - Extracted via `useParams()`
2. ✅ Props (`product.productKey`) - Passed from ProductPage to ProductDetailTemplate
3. ✅ Navigate state (`state: { productKey }`) - Passed to checkout pages

### productKey Destinations:
1. ✅ CheckoutDomestic - Receives from state, validates, sends to backend
2. ✅ CheckoutInternational - Receives from state, validates, sends to backend

### Hard-coded Values:
- ✅ Legacy redirects (Navigate components) - Correct usage
- ✅ Product key arrays in category pages - Correct usage (become URL params)

### Defaults/Fallbacks:
- ✅ NONE FOUND - No fallback defaults exist

### Issues:
- ❌ **1 BLOCKING BUG:** PeaceOfMindDNAKit.jsx missing productKey in navigate state

---

## 🎯 CONCLUSION

**Frontend productKey flow is correct EXCEPT for deprecated PeaceOfMindDNAKit.jsx.**

All shop checkout flows properly pass productKey:
- ✅ Category pages link to `/shop/product/${key}` (URL param)
- ✅ ProductPage extracts productKey from URL
- ✅ ProductDetailTemplate receives productKey via props
- ✅ ProductDetailTemplate passes productKey in navigate state
- ✅ Checkout pages receive productKey and validate it

**If same priceId appears, check:**
1. Is `product.productKey` undefined in ProductDetailTemplate?
2. Is ProductPage receiving correct productKey from URL?
3. Is browser caching old code without productKey?
