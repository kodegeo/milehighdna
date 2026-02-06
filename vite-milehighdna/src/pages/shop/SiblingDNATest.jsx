import React from "react";
import ShopBucketLayout from "./ShopBucketLayout";
import siblingBox from "../../assets/images/shop/sibling-box.png";
import { PRODUCT_CATALOG } from "../../data/productCatalog";

// Product keys for sibling category
const SIBLING_PRODUCT_KEYS = [
  "SIBLING_SINGLE_LOCATION",
  "SIBLING_MULTI_LOCATION",
  "SIBLING_PEACE_OF_MIND",
];

const PRODUCTS = SIBLING_PRODUCT_KEYS.map((key) => {
  const product = PRODUCT_CATALOG[key] || {};
  return {
    name: product.name || "",
    description: product.shortDescription || "",
    participantSummary: product.participantSummary || "",
    detailUrl: `/shop/product/${key}`,
    image: siblingBox,
    price: product.price || 0,
    cta: "View Details",
  };
});

const SiblingDNATest = () => (
  <ShopBucketLayout
    title="Sibling DNA Test Kits"
    subhead="Private, at-home DNA testing to confirm biological relationships"
    heroImage={siblingBox}
    products={PRODUCTS}
    whoThisIsFor={[]}
    canonicalUrl="https://milehighdnatesting.com/shop/sibling-dna-test"
    metaTitle="Sibling DNA Test Kits | Mile High DNA"
    metaDescription="At-home sibling DNA tests for peace of mind. Single and multi-location options. Private, accurate, mail-in testing."
    categoryLayout
  />
);

export default SiblingDNATest;
