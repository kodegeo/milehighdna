/**
 * Discreet DNA test products. Single source of truth for PDPs and checkout.
 */
export const DISCREET_PRODUCTS = {
  discreetAtHome: {
    id: "discreetAtHome",
    slug: "discreet-at-home",
    title: "Discreet At-Home DNA Test",
    shortDescription:
      "Private testing using personal items such as toothbrush, hair, earwax, and more. One location. Confidential handling and results.",
    unitPrice: 249,
    participantSummary: "Toothbrush, hair, earwax, etc. · 1 Location",
    metaDescription:
      "Discreet at-home DNA test using personal items. Private, confidential, mail-in. Domestic and international shipping.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },
  toothbrushTest: {
    id: "toothbrushTest",
    slug: "toothbrush-test",
    title: "Discreet Toothbrush DNA Test",
    shortDescription:
      "Paternity testing using toothbrush samples when direct collection is not possible. One sample, one location.",
    unitPrice: 249,
    participantSummary: "1 Sample · 1 Location",
    metaDescription:
      "Discreet toothbrush DNA test. Private, confidential. Domestic and international shipping.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },
  twoSample: {
    id: "twoSample",
    slug: "two-sample",
    title: "Two-Sample Discreet DNA Test",
    shortDescription:
      "Testing using samples from both alleged father and child. Discreet collection, same lab accuracy.",
    unitPrice: 299,
    participantSummary: "Alleged Father & Child",
    metaDescription:
      "Two-sample discreet DNA test. Alleged father and child. Private, confidential. Domestic and international.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },
  hairFollicle: {
    id: "hairFollicle",
    slug: "hair-follicle",
    title: "Discreet Hair Follicle DNA Test",
    shortDescription:
      "Private testing using hair follicle samples. One location. Confidential handling and results.",
    unitPrice: 249,
    participantSummary: "1 Location",
    metaDescription:
      "Discreet hair follicle DNA test. Private, confidential, mail-in. Domestic and international shipping.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },
  peaceOfMind: {
    id: "peaceOfMind",
    slug: "peace-of-mind",
    title: "Discreet Peace of Mind DNA Test",
    shortDescription:
      "Private confirmation using discreet collection methods. For personal knowledge only—not for court or immigration.",
    unitPrice: 249,
    participantSummary: "Private confirmation",
    metaDescription:
      "Discreet peace of mind DNA test. Private confirmation, mail-in. Not for legal or court use.",
    breadcrumbParentLabel: "Discreet DNA Test Kits",
    categorySlug: "discreet-dna-test",
  },
};

export function getDiscreetProductBySlug(slug) {
  return Object.values(DISCREET_PRODUCTS).find((p) => p.slug === slug) ?? null;
}
