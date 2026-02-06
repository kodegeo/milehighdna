/**
 * Grandparent DNA test products. Single source of truth for PDPs and checkout.
 */
export const GRANDPARENT_PRODUCTS = {
  atHomeGrandparent: {
    id: "atHomeGrandparent",
    slug: "at-home-grandparent-test",
    title: "2-Party At-Home Grandparent DNA Test",
    shortDescription:
      "Establish biological relationships when a parent is unavailable. One child, one grandparent, one location. Mail-in kit with confidential results.",
    unitPrice: 249,
    participantSummary: "1 Child / 1 Grandparent · 1 Location",
    metaDescription:
      "At-home grandparent DNA test. One child, one grandparent, one location. Private, accurate, mail-in testing. Domestic and international shipping.",
    breadcrumbParentLabel: "Grandparent DNA Test Kits",
    categorySlug: "grandparent-dna-test",
  },
  multiLocationGrandparent: {
    id: "multiLocationGrandparent",
    slug: "multi-location-grandparent-test",
    title: "Multi-Location Grandparent DNA Test",
    shortDescription:
      "When child and grandparent are in different locations. Two kits shipped to two addresses. Same lab, same accuracy, confidential results.",
    unitPrice: 299,
    participantSummary: "1 Child / 1 Grandparent · 2 Locations",
    metaDescription:
      "Multi-location grandparent DNA test. Kits shipped to two addresses. Private, accurate, mail-in. Domestic and international.",
    breadcrumbParentLabel: "Grandparent DNA Test Kits",
    categorySlug: "grandparent-dna-test",
  },
  peaceOfMind: {
    id: "peaceOfMind",
    slug: "peace-of-mind",
    title: "Peace of Mind Grandparent DNA Test",
    shortDescription:
      "Private relationship confirmation for grandparent and grandchild. One location. For personal knowledge only—not for court or immigration.",
    unitPrice: 249,
    participantSummary: "Private confirmation · 1 Location",
    metaDescription:
      "Peace of mind grandparent DNA test. Private confirmation, mail-in kit. Not for legal or court use.",
    breadcrumbParentLabel: "Grandparent DNA Test Kits",
    categorySlug: "grandparent-dna-test",
  },
};

export function getGrandparentProductBySlug(slug) {
  return Object.values(GRANDPARENT_PRODUCTS).find((p) => p.slug === slug) ?? null;
}
