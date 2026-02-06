import React from "react";
import ShopBucketLayout from "./ShopBucketLayout";
import paternityBox from "../../assets/images/shop/paternity-box.png";
import { PRODUCT_CATALOG } from "../../data/productCatalog";

// Product keys for paternity category
const PATERNITY_PRODUCT_KEYS = [
  "PATERNITY_AT_HOME_SINGLE",
  "PATERNITY_AT_HOME_MULTI_CHILD",
  "PATERNITY_PEACE_OF_MIND",
  "PATERNITY_MULTI_LOCATION",
  "FAST_TRACK_RESULTS",
];

const PRODUCTS = PATERNITY_PRODUCT_KEYS.map((key) => {
  const product = PRODUCT_CATALOG[key] || {};
  return {
    name: product.name || "",
    description: product.shortDescription || "",
    participantSummary: product.participantSummary || "",
    detailUrl: `/shop/product/${key}`,
    image: paternityBox,
    price: product.price || 0,
    cta: "View Details",
  };
});

const WHO_THIS_IS_FOR = [
  "Individuals seeking private confirmation of biological fatherhood.",
  "Families who want answers for personal knowledge, not legal or court use.",
  "Those who prefer at-home collection and mail-in testing.",
  "Anyone who needs a clear, accurate result without in-person appointments.",
];

const PaternityDNATest = () => (
  <ShopBucketLayout
    title="At-Home Paternity DNA Tests"
    subhead="Private DNA testing to help confirm biological fatherhood"
    heroImage={paternityBox}
    products={PRODUCTS}
    whoThisIsFor={WHO_THIS_IS_FOR}
    canonicalUrl="https://milehighdnatesting.com/shop/paternity-dna-test"
    metaTitle="At-Home Paternity DNA Tests | Mile High DNA"
    metaDescription="Private at-home paternity DNA tests for peace of mind. Multiple options including single and multi-location. Accurate, confidential, mail-in testing."
  />
);

export default PaternityDNATest;
