// src/data/productCatalog.ts
/**
 * Centralized product catalog for all at-home DNA test products.
 * Single source of truth for product data, Stripe price IDs, and metadata.
 */

export const PRODUCT_CATALOG = {
  // ─────────────────────────
  // PATERNITY
  // ─────────────────────────
  PATERNITY_AT_HOME_SINGLE: {
    name: "2 Party At-Home Paternity DNA Test",
    category: "paternity",
    stripePriceId: "price_1SxfjcK2515KuCq28DsWMVni",
    price: 139,
    shortDescription:
      "Private DNA testing to confirm biological fatherhood. One child, one alleged father, one location. Mail-in kit with confidential results.",
    participantSummary: "1 Child / 1 Alleged Father · 1 Location",
    metaDescription:
      "Order the at-home paternity DNA test kit. Private, accurate, mail-in testing with fast results. Domestic and international shipping.",
    breadcrumbParentLabel: "Paternity DNA Test Kits",
    categorySlug: "paternity-dna-test",
  },

  PATERNITY_AT_HOME_MULTI_CHILD: {
    name: "3 Party At-Home Paternity DNA Test",
    category: "paternity",
    stripePriceId: "price_1SxflsK2515KuCq2pxLPof0j",
    price: 199,
    shortDescription:
      "Peace-of-mind paternity testing for families with two or more children. One location. Same accuracy and confidentiality as our single-child test.",
    participantSummary: "2+ Children · 1 Location",
    metaDescription:
      "At-home paternity DNA test for multiple children. Private, accurate, mail-in. Domestic and international shipping.",
    breadcrumbParentLabel: "Paternity DNA Test Kits",
    categorySlug: "paternity-dna-test",
  },

  PATERNITY_MULTI_LOCATION: {
    name: "Multi-Location At-Home Paternity DNA Test",
    category: "paternity",
    stripePriceId: "price_1Sxfo3K2515KuCq2KUuSgBWK",
    price: 239,
    shortDescription:
      "When the child and alleged father are in different locations. Two kits shipped to two addresses. Same lab, same accuracy, confidential results.",
    participantSummary: "1 Child / 1 Alleged Father · 2 Locations",
    metaDescription:
      "At-home paternity test with kits shipped to two locations. Private, accurate, mail-in. Domestic and international.",
    breadcrumbParentLabel: "Paternity DNA Test Kits",
    categorySlug: "paternity-dna-test",
  },

  PATERNITY_PEACE_OF_MIND: {
    name: "Paternity Peace of Mind DNA Test",
    category: "paternity",
    stripePriceId: "price_1SxfmgK2515KuCq2igk4PNo9",
    price: 139,
    shortDescription:
      "Private, non-legal confirmation of biological fatherhood. One location. For personal knowledge only—not for court or immigration.",
    participantSummary: "Private confirmation · 1 Location",
    metaDescription:
      "Peace of mind paternity DNA test. Private confirmation, mail-in kit. Not for legal or court use.",
    breadcrumbParentLabel: "Paternity DNA Test Kits",
    categorySlug: "paternity-dna-test",
  },

  FAST_TRACK_RESULTS: {
    name: "Fast-Track Results Upgrade",
    category: "addon",
    stripePriceId: "price_1Sxg4GK2515KuCq2MmddfKWN",
    price: 49,
    shortDescription:
      "Expedited processing for faster results. Add this to your order for priority lab turnaround. Results typically within 1–2 business days after lab receipt.",
    participantSummary: "",
    metaDescription:
      "Fast-track DNA test results. Expedited processing for at-home paternity tests. Domestic and international shipping.",
    breadcrumbParentLabel: "Paternity DNA Test Kits",
    categorySlug: "paternity-dna-test",
  },

  // ─────────────────────────
  // GRANDPARENT
  // ─────────────────────────
  GRANDPARENT_SINGLE_LOCATION: {
    name: "2 Party Grandparent At-Home DNA Test",
    category: "grandparent",
    stripePriceId: "price_1SxiXuK2515KuCq2UwDYuVCU",
    price: 249,
    shortDescription:
      "Establish biological relationships when a parent is unavailable. One child, one grandparent, one location. Mail-in kit with confidential results.",
    participantSummary: "1 Child / 1 Grandparent · 1 Location",
    metaDescription:
      "At-home grandparent DNA test. One child, one grandparent, one location. Private, accurate, mail-in testing. Domestic and international shipping.",
    breadcrumbParentLabel: "Grandparent DNA Test Kits",
    categorySlug: "grandparent-dna-test",
  },

  GRANDPARENT_MULTI_LOCATION: {
    name: "Multi-Location Grandparent DNA Test",
    category: "grandparent",
    stripePriceId: "price_1SxiYZK2515KuCq20NMyHjrt",
    price: 299,
    shortDescription:
      "When child and grandparent are in different locations. Two kits shipped to two addresses. Same lab, same accuracy, confidential results.",
    participantSummary: "1 Child / 1 Grandparent · 2 Locations",
    metaDescription:
      "Multi-location grandparent DNA test. Kits shipped to two addresses. Private, accurate, mail-in. Domestic and international.",
    breadcrumbParentLabel: "Grandparent DNA Test Kits",
    categorySlug: "grandparent-dna-test",
  },

  GRANDPARENT_PEACE_OF_MIND: {
    name: "Grandparent Peace of Mind DNA Test",
    category: "grandparent",
    stripePriceId: "price_1SxgFrK2515KuCq2F4DPSaJc",
    price: 249,
    shortDescription:
      "Private relationship confirmation for grandparent and grandchild. One location. For personal knowledge only—not for court or immigration.",
    participantSummary: "Private confirmation · 1 Location",
    metaDescription:
      "Peace of mind grandparent DNA test. Private confirmation, mail-in kit. Not for legal or court use.",
    breadcrumbParentLabel: "Grandparent DNA Test Kits",
    categorySlug: "grandparent-dna-test",
  },

  // ─────────────────────────
  // SIBLING
  // ─────────────────────────
  SIBLING_SINGLE_LOCATION: {
    name: "At-Home Sibling DNA Test",
    category: "sibling",
    stripePriceId: "price_1SxiXuK2515KuCq2UwDYuVCU",
    price: 249,
    shortDescription:
      "Determine whether two individuals share one or both biological parents. Two siblings, one location. Mail-in kit with confidential results.",
    participantSummary: "2 Siblings · 1 Location",
    metaDescription:
      "At-home sibling DNA test. Two siblings, one location. Private, accurate, mail-in testing. Domestic and international shipping.",
    breadcrumbParentLabel: "Sibling DNA Test Kits",
    categorySlug: "sibling-dna-test",
  },

  SIBLING_MULTI_LOCATION: {
    name: "Multi-Location Sibling DNA Test",
    category: "sibling",
    stripePriceId: "price_1SxiYZK2515KuCq20NMyHjrt",
    price: 299,
    shortDescription:
      "When siblings are in different locations. Two kits shipped to two addresses. Same lab, same accuracy, confidential results.",
    participantSummary: "2 Siblings · 2 Locations",
    metaDescription:
      "Multi-location sibling DNA test. Kits shipped to two addresses. Private, accurate, mail-in. Domestic and international.",
    breadcrumbParentLabel: "Sibling DNA Test Kits",
    categorySlug: "sibling-dna-test",
  },

  SIBLING_PEACE_OF_MIND: {
    name: "Sibling Peace of Mind DNA Test",
    category: "sibling",
    stripePriceId: "price_1SxiZEK2515KuCq2IEH7Qkzq",
    price: 249,
    shortDescription:
      "Private sibling relationship confirmation. For personal knowledge only—not for court or immigration.",
    participantSummary: "Private sibling relationship confirmation",
    metaDescription:
      "Peace of mind sibling DNA test. Private confirmation, mail-in kit. Not for legal or court use.",
    breadcrumbParentLabel: "Sibling DNA Test Kits",
    categorySlug: "sibling-dna-test",
  },

  // ─────────────────────────
  // DISCREET
  // ─────────────────────────
  DISCREET_AT_HOME_DNA_TEST: {
    name: "Discreet At-Home DNA Test",
    category: "discreet",
    stripePriceId: "price_1SxiaHK2515KuCq27moKNB4s",
    price: 249,
    shortDescription:
      "Private testing using personal items such as toothbrush, hair, earwax, and more. One location. Confidential handling and results.",
    participantSummary: "Toothbrush, hair, earwax, etc. · 1 Location",
    metaDescription:
      "Discreet at-home DNA test using personal items. Private, confidential, mail-in. Domestic and international shipping.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },

  DISCREET_HAIR_FOLICLE: {
    name: "Discreet Hair Follicle DNA Test",
    category: "discreet",
    stripePriceId: "price_1SxibqK2515KuCq2BYNekoYv",
    price: 239,
    shortDescription:
      "Private testing using hair follicle samples. One location. Confidential handling and results.",
    participantSummary: "1 Location",
    metaDescription:
      "Discreet hair follicle DNA test. Private, confidential, mail-in. Domestic and international shipping.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },

  DISCREET_TWO_TOOTHBRUSH: {
    name: "Two-Sample Discreet Toothbrush DNA Test",
    category: "discreet",
    stripePriceId: "price_1SxibLK2515KuCq20pglz9fo",
    price: 299,
    shortDescription:
      "Testing using samples from both alleged father and child. Discreet collection, same lab accuracy.",
    participantSummary: "Alleged Father & Child",
    metaDescription:
      "Two-sample discreet DNA test. Alleged father and child. Private, confidential. Domestic and international.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },

  DISCREET_TOOTHBRUSH: {
    name: "Discreet Toothbrush DNA Test",
    category: "discreet",
    stripePriceId: "price_1SxiapK2515KuCq2ZpMuNH9R",
    price: 249,
    shortDescription:
      "Paternity testing using toothbrush samples when direct collection is not possible. One sample, one location.",
    participantSummary: "1 Sample · 1 Location",
    metaDescription:
      "Discreet toothbrush DNA test. Private, confidential. Domestic and international shipping.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },

  DISCREET_PEACE_OF_MIND_DNA_TEST: {
    name: "Discreet Peace of Mind DNA Test",
    category: "discreet",
    stripePriceId: "price_1SxicQK2515KuCq2bTha3MBh",
    price: 249,
    shortDescription:
      "Private confirmation using discreet collection methods. For personal knowledge only—not for court or immigration.",
    participantSummary: "Private confirmation",
    metaDescription:
      "Discreet peace of mind DNA test. Private confirmation, mail-in. Not for legal or court use.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },
};

/**
 * Get product by key from catalog
 */
export function getProductByKey(key: string) {
  return PRODUCT_CATALOG[key as keyof typeof PRODUCT_CATALOG] ?? null;
}

/**
 * Get all products for a category
 */
export function getProductsByCategory(category: string) {
  return Object.entries(PRODUCT_CATALOG)
    .filter(([_, product]) => product.category === category)
    .map(([key, product]) => ({ key, ...product }));
}
  