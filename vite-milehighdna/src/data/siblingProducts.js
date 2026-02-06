/**
 * Sibling DNA test products. Single source of truth for PDPs and checkout.
 */
export const SIBLING_PRODUCTS = {
  atHomeSibling: {
    id: "atHomeSibling",
    slug: "at-home-sibling-test",
    title: "At-Home Sibling DNA Test",
    shortDescription:
      "Determine whether two individuals share one or both biological parents. Two siblings, one location. Mail-in kit with confidential results.",
    unitPrice: 249,
    participantSummary: "2 Siblings · 1 Location",
    metaDescription:
      "At-home sibling DNA test. Two siblings, one location. Private, accurate, mail-in testing. Domestic and international shipping.",
    breadcrumbParentLabel: "Sibling DNA Test Kits",
    categorySlug: "sibling-dna-test",
  },
  multiLocationSibling: {
    id: "multiLocationSibling",
    slug: "multi-location-sibling-test",
    title: "Multi-Location Sibling DNA Test",
    shortDescription:
      "When siblings are in different locations. Two kits shipped to two addresses. Same lab, same accuracy, confidential results.",
    unitPrice: 299,
    participantSummary: "2 Siblings · 2 Locations",
    metaDescription:
      "Multi-location sibling DNA test. Kits shipped to two addresses. Private, accurate, mail-in. Domestic and international.",
    breadcrumbParentLabel: "Sibling DNA Test Kits",
    categorySlug: "sibling-dna-test",
  },
  peaceOfMind: {
    id: "peaceOfMind",
    slug: "peace-of-mind",
    title: "Peace of Mind Sibling DNA Test",
    shortDescription:
      "Private sibling relationship confirmation. For personal knowledge only—not for court or immigration.",
    unitPrice: 249,
    participantSummary: "Private sibling relationship confirmation",
    metaDescription:
      "Peace of mind sibling DNA test. Private confirmation, mail-in kit. Not for legal or court use.",
    breadcrumbParentLabel: "Sibling DNA Test Kits",
    categorySlug: "sibling-dna-test",
  },
};

export function getSiblingProductBySlug(slug) {
  return Object.values(SIBLING_PRODUCTS).find((p) => p.slug === slug) ?? null;
}
