/**
 * Single source of truth for paternity DNA test products.
 * Used by product detail pages and checkout flow. Do not hardcode prices elsewhere.
 */
export const PATERNITY_PRODUCTS = {
  atHomeSingle: {
    id: "atHomeSingle",
    slug: "at-home-paternity-test",
    title: "At-Home Paternity DNA Test",
    shortDescription:
      "Private DNA testing to confirm biological fatherhood. One child, one alleged father, one location. Mail-in kit with confidential results.",
    unitPrice: 179,
    locations: 1,
    children: 1,
    metaDescription:
      "Order the at-home paternity DNA test kit. Private, accurate, mail-in testing with fast results. Domestic and international shipping.",
    breadcrumbParentLabel: "Paternity DNA Tests",
  },
  atHomeMultiple: {
    id: "atHomeMultiple",
    slug: "at-home-paternity-test-multiple-children",
    title: "At-Home Paternity DNA Test (Multiple Children)",
    shortDescription:
      "Peace-of-mind paternity testing for families with two or more children. One location. Same accuracy and confidentiality as our single-child test.",
    unitPrice: 229,
    locations: 1,
    children: 2,
    metaDescription:
      "At-home paternity DNA test for multiple children. Private, accurate, mail-in. Domestic and international shipping.",
    breadcrumbParentLabel: "Paternity DNA Tests",
  },
  peaceOfMind: {
    id: "peaceOfMind",
    slug: "peace-of-mind-dna-test",
    title: "Peace of Mind DNA Test",
    shortDescription:
      "Private, non-legal confirmation of biological fatherhood. One location. For personal knowledge only—not for court or immigration.",
    unitPrice: 179,
    locations: 1,
    children: 1,
    metaDescription:
      "Peace of mind paternity DNA test. Private confirmation, mail-in kit. Not for legal or court use.",
    breadcrumbParentLabel: "Paternity DNA Tests",
  },
  multiLocation: {
    id: "multiLocation",
    slug: "multi-location-paternity-dna-test",
    title: "Multi-Location At-Home Paternity DNA Test",
    shortDescription:
      "When the child and alleged father are in different locations. Two kits shipped to two addresses. Same lab, same accuracy, confidential results.",
    unitPrice: 199,
    locations: 2,
    children: 1,
    metaDescription:
      "At-home paternity test with kits shipped to two locations. Private, accurate, mail-in. Domestic and international.",
    breadcrumbParentLabel: "Paternity DNA Tests",
  },
  fastTrack: {
    id: "fastTrack",
    slug: "fast-track-results-upgrade",
    title: "Fast-Track Results Upgrade",
    shortDescription:
      "Expedited processing for faster results. Add this to your order for priority lab turnaround. Results typically within 1–2 business days after lab receipt.",
    unitPrice: 249,
    locations: 1,
    children: 1,
    isAddOn: true,
    metaDescription:
      "Fast-track DNA test results. Expedited processing for at-home paternity tests. Domestic and international shipping.",
    breadcrumbParentLabel: "Paternity DNA Tests",
  },
};

/** Get product by slug for routing */
export function getPaternityProductBySlug(slug) {
  return Object.values(PATERNITY_PRODUCTS).find((p) => p.slug === slug) ?? null;
}
