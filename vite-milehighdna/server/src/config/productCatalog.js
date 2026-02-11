/**
 * Backend product catalog mapping productKey → Stripe configuration.
 * Single source of truth for Stripe price IDs, test types, and legal flags.
 * 
 * This catalog must stay in sync with the frontend productCatalog.ts
 */

export const PRODUCT_CATALOG = {
  // ─────────────────────────
  // PATERNITY
  // ─────────────────────────
  PATERNITY_AT_HOME_SINGLE: {
    stripePriceId: "price_1SzXYSK2515KuCq2snadta8S",
    testType: "paternity",
    legal: false, // Peace of mind / non-legal
  },

  PATERNITY_AT_HOME_MULTI_CHILD: {
    stripePriceId: "price_1SzXeMK2515KuCq2fp7dSAsO",
    testType: "paternity",
    legal: false,
  },

  PATERNITY_MULTI_LOCATION: {
    stripePriceId: "price_1Sxfo3K2515KuCq2KUuSgBWK",
    testType: "paternity",
    legal: false,
  },

  PATERNITY_PEACE_OF_MIND: {
    stripePriceId: "price_1SzXifK2515KuCq2KxTB4HAK",
    testType: "paternity",
    legal: false,
  },

  FAST_TRACK_RESULTS: {
    stripePriceId: "price_1Sxg4GK2515KuCq2MmddfKWN",
    testType: "addon",
    legal: false,
  },

  // ─────────────────────────
  // GRANDPARENT
  // ─────────────────────────
  GRANDPARENT_SINGLE_LOCATION: {
    stripePriceId: "price_1SzXzgK2515KuCq2U4PDIGKF",
    testType: "grandparent",
    legal: false,
  },

  GRANDPARENT_MULTI_LOCATION: {
    stripePriceId: "price_1SzYCZK2515KuCq2J5wFnb5f",
    testType: "grandparent",
    legal: false,
  },

  GRANDPARENT_PEACE_OF_MIND: {
    stripePriceId: "price_1SzY4EK2515KuCq2hnfWp5rT",
    testType: "grandparent",
    legal: false,
  },

  // ─────────────────────────
  // SIBLING
  // ─────────────────────────
  SIBLING_SINGLE_LOCATION: {
    stripePriceId: "price_1SzYGXK2515KuCq2KC8wdAaM",
    testType: "sibling",
    legal: false,
  },

  SIBLING_MULTI_LOCATION: {
    stripePriceId: "price_1SxiYZK2515KuCq20NMyHjrt",
    testType: "sibling",
    legal: false,
  },

  SIBLING_PEACE_OF_MIND: {
    stripePriceId: "price_1SxiZEK2515KuCq2IEH7Qkzq",
    testType: "sibling",
    legal: false,
  },

  // ─────────────────────────
  // DISCREET
  // ─────────────────────────
  DISCREET_AT_HOME_DNA_TEST: {
    stripePriceId: "price_1SxiaHK2515KuCq27moKNB4s",
    testType: "discreet",
    legal: false,
  },

  DISCREET_HAIR_FOLICLE: {
    stripePriceId: "price_1SxibqK2515KuCq2BYNekoYv",
    testType: "discreet",
    legal: false,
  },

  DISCREET_TWO_TOOTHBRUSH: {
    stripePriceId: "price_1SxibLK2515KuCq20pglz9fo",
    testType: "discreet",
    legal: false,
  },

  DISCREET_TOOTHBRUSH: {
    stripePriceId: "price_1SxiapK2515KuCq2ZpMuNH9R",
    testType: "discreet",
    legal: false,
  },

  DISCREET_PEACE_OF_MIND_DNA_TEST: {
    stripePriceId: "price_1SxicQK2515KuCq2bTha3MBh",
    testType: "discreet",
    legal: false,
  },
};

/**
 * Get product configuration by key
 * @param {string} productKey - Product key (e.g., "PATERNITY_AT_HOME_SINGLE")
 * @returns {Object|null} Product config with stripePriceId, testType, legal
 */
export function getProductConfig(productKey) {
  return PRODUCT_CATALOG[productKey] || null;
}

/**
 * Validate that a productKey exists in the catalog
 * @param {string} productKey - Product key to validate
 * @returns {boolean} True if product exists
 */
export function isValidProductKey(productKey) {
  return productKey && PRODUCT_CATALOG.hasOwnProperty(productKey);
}
