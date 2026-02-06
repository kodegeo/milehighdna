# Stripe Price ID Audit Report
**Date:** 2026-01-24
**Purpose:** Identify all code paths that could override resolved stripePriceId

---

## 🔍 SEARCH RESULTS

### 1. "price_" Pattern Matches

#### ✅ SAFE - Product Catalog (Source of Truth)
- **File:** `server/src/config/productCatalog.js`
- **Lines:** 13, 19, 25, 31, 37, 46, 52, 58, 67, 73, 79, 88, 94, 100, 106, 112
- **Type:** Static catalog definitions
- **Can Override?** ❌ NO - This IS the source
- **Execution:** Unconditional (catalog lookup)
- **Status:** ✅ CORRECT

#### ⚠️ POTENTIAL ISSUE - Old Products Config (Not Imported)
- **File:** `server/config/products.js`
- **Lines:** 13, 24, 35, 46
- **Contains:** `price_1RJf6IK2515KuCq2JBnXBDgO` (the problematic price ID)
- **Can Override?** ❌ NO - File exists but NOT imported anywhere
- **Execution:** N/A (dead code)
- **Status:** ⚠️ DEAD CODE (should be deleted but not blocking)

#### ✅ SAFE - Database Fields
- **File:** `server/src/utils/checkoutUtils.js`
- **Lines:** 141, 148
- **Type:** `unit_price_usd` database fields
- **Can Override?** ❌ NO - Database storage only
- **Status:** ✅ CORRECT

---

### 2. "STRIPE_" Pattern Matches

#### ✅ SAFE - Environment Variables
- **Files:** 
  - `server/src/utils/checkoutUtils.js:4` - `STRIPE_SECRET_KEY`
  - `server/src/routes/webhook.js:7,25` - `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
  - `server/index.js:11,86` - `STRIPE_SECRET_KEY` validation
  - `server/src/routes/payments.js:8` - `STRIPE_SECRET_KEY`
- **Type:** API keys and secrets
- **Can Override?** ❌ NO - Authentication only
- **Status:** ✅ CORRECT

**⚠️ NO `STRIPE_LIVE_PRICE_ID` FOUND** - Good! No fallback env var exists.

---

### 3. "line_items" Pattern Matches

#### ✅ SAFE - Shop Checkout Flow
- **File:** `server/src/utils/checkoutUtils.js:185`
- **Line:** 185
- **Context:** Uses resolved `stripePriceId` from catalog
- **Code:**
  ```javascript
  const productLineItem = { price: trimmedPriceId, quantity: 1 };
  const lineItems = [productLineItem, { price_data: { ... shipping ... } }];
  ```
- **Can Override?** ❌ NO - Uses resolved priceId
- **Execution:** Unconditional (after validation)
- **Status:** ✅ CORRECT

#### ⚠️ SEPARATE ROUTE - Payments Route (Different Endpoint)
- **File:** `server/src/routes/payments.js:32`
- **Line:** 32
- **Route:** `/api/payments/create-session` (NOT `/api/create-checkout`)
- **Context:** Uses `price_data` (dynamic pricing), NOT price IDs
- **Code:**
  ```javascript
  line_items: [
    {
      price_data: {
        currency: "usd",
        product_data: { name: productName },
        unit_amount: subtotalUsd * 100,
      },
      quantity: 1,
    },
    // ... shipping
  ]
  ```
- **Can Override?** ❌ NO - Different route, different purpose
- **Execution:** Unconditional (separate endpoint)
- **Status:** ⚠️ DIFFERENT ROUTE - Verify frontend isn't calling this by mistake

---

### 4. "checkout.sessions.create" Pattern Matches

#### ✅ SAFE - Shop Checkout Flow
- **File:** `server/src/utils/checkoutUtils.js:182`
- **Line:** 182
- **Route:** Called from `/api/create-checkout`
- **Uses:** Resolved `stripePriceId` from catalog
- **Can Override?** ❌ NO - Uses validated priceId
- **Status:** ✅ CORRECT

#### ⚠️ SEPARATE ROUTE - Payments Route
- **File:** `server/src/routes/payments.js:29`
- **Line:** 29
- **Route:** `/api/payments/create-session`
- **Uses:** `price_data` (dynamic), NOT price IDs
- **Can Override?** ❌ NO - Different route
- **Status:** ⚠️ DIFFERENT ROUTE - Verify frontend routing

---

### 5. "DEFAULT" Pattern Matches

#### ✅ SAFE - Shipping Rates Only
- **File:** `server/src/utils/shipping.js:19,43`
- **Lines:** 19, 43
- **Context:** Shipping rate fallbacks (`rates.DOMESTIC.DEFAULT`, `rates.INTERNATIONAL.DEFAULT`)
- **Can Override?** ❌ NO - Shipping only, not price IDs
- **Status:** ✅ CORRECT

---

### 6. "fallback" Pattern Matches

#### ✅ SAFE - Non-Price Related
- **File:** `server/src/controllers/sendConfirmationController.js:44`
- **Line:** 44
- **Context:** "Plain text fallback" for email templates
- **Can Override?** ❌ NO - Email formatting only
- **Status:** ✅ CORRECT

- **File:** `server/src/routes/shipping.js:24`
- **Line:** 24
- **Context:** Comment "Fallback: single rate by country"
- **Can Override?** ❌ NO - Shipping rates only
- **Status:** ✅ CORRECT

---

### 7. "process.env" Pattern Matches

#### ✅ SAFE - Configuration Only
All matches are for:
- `STRIPE_SECRET_KEY` - API authentication
- `FRONTEND_URL` - Redirect URLs
- `BACKEND_URL` - Email service URLs
- `MAILGUN_*` - Email service config
- `SUPABASE_*` - Database config
- `INDEXNOW_API_KEY` - SEO service
- `STRIPE_WEBHOOK_SECRET` - Webhook verification

**⚠️ NO `process.env.STRIPE_LIVE_PRICE_ID` FOUND** - Good!

---

## 🚨 BLOCKING BUGS IDENTIFIED

### ✅ VERIFIED: Frontend Calls Correct Endpoint
**Status:** ✅ CORRECT
**Verification:**
- `CheckoutDomestic.jsx:110` → Calls `/api/create-checkout` ✅
- `CheckoutInternational.jsx:144` → Calls `/api/create-checkout` ✅
- Both use correct endpoint with productKey flow

**Note:** 
- `BookAppointment.jsx` and `BookAppointmentEs.jsx` call `/create-checkout-session` (non-existent route)
- This is unrelated to shop checkout flow
- These calls would fail (separate issue, not blocking shop checkout)

---

## ✅ VERIFIED SAFE PATHS

### Shop Checkout Flow (Correct Path)
```
Frontend → POST /api/create-checkout
  ↓
checkoutRoutes.js (resolves productKey → stripePriceId)
  ↓
checkoutUtils.js (validates stripePriceId)
  ↓
stripe.checkout.sessions.create({ line_items: [{ price: stripePriceId }] })
```

**Status:** ✅ NO FALLBACKS - Fails loudly if productKey missing

---

## 📋 RECOMMENDATIONS

1. **DELETE DEAD CODE:**
   - Remove `server/config/products.js` (not imported, contains old price IDs)
   - Contains `price_1RJf6IK2515KuCq2JBnXBDgO` but never executed

2. **FIX BROKEN ROUTES (Non-blocking for shop checkout):**
   - `BookAppointment.jsx:71` calls `/create-checkout-session` (doesn't exist)
   - `BookAppointmentEs.jsx:72` calls `/create-checkout-session` (doesn't exist)
   - These are appointment booking routes, not shop checkout

3. **MONITOR LOGS:**
   - Watch for `🔍 [ROUTE] Incoming productKey:` logs
   - Watch for `🔍 [ROUTE] Resolved stripePriceId:` logs
   - Watch for `🔍 [CHECKOUT] Creating Stripe session with priceId:` logs
   - If productKey is undefined, you'll see: `❌ [ROUTE] productKey is REQUIRED but missing`

---

## 🎯 CONCLUSION

**✅ NO FALLBACK PRICE MECHANISMS FOUND IN SHOP CHECKOUT FLOW.**

The resolved `stripePriceId` from `productCatalog.js` is:
- ✅ Validated at route entry (`checkoutRoutes.js:31-35`)
- ✅ Validated after catalog lookup (`checkoutRoutes.js:67-71`)
- ✅ Validated before Stripe API call (`checkoutUtils.js:44-55`)
- ✅ Used unconditionally in `line_items` (no fallback)

**Frontend Verification:**
- ✅ `CheckoutDomestic.jsx` calls `/api/create-checkout` correctly
- ✅ `CheckoutInternational.jsx` calls `/api/create-checkout` correctly
- ✅ Both pass `productKey` in request body

**If same priceId is still appearing:**
1. Check server logs for `🔍 [ROUTE] Incoming productKey:` - Is it undefined?
2. Check server logs for `🔍 [ROUTE] Resolved stripePriceId:` - What value is resolved?
3. Verify frontend is sending `productKey` in request body (not `stripePriceId`)
4. Check browser network tab - what is actually sent in POST body?

**Root Cause Likely:**
- Frontend not sending `productKey` (sending `stripePriceId` instead?)
- Frontend sending wrong `productKey` value
- Browser caching old checkout code
