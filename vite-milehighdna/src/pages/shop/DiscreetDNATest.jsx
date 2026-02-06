import React from "react";
import ShopBucketLayout from "./ShopBucketLayout";
import discreetBox from "../../assets/images/shop/discreet-box.png";
import { PRODUCT_CATALOG } from "../../data/productCatalog";

// Product keys for discreet category
const DISCREET_PRODUCT_KEYS = [
  "DISCREET_AT_HOME_DNA_TEST",
  "DISCREET_TOOTHBRUSH",
  "DISCREET_TWO_TOOTHBRUSH",
  "DISCREET_HAIR_FOLICLE",
  "DISCREET_PEACE_OF_MIND_DNA_TEST",
];

const PRODUCTS = DISCREET_PRODUCT_KEYS.map((key) => {
  const product = PRODUCT_CATALOG[key] || {};
  return {
    name: product.name || "",
    description: product.shortDescription || "",
    participantSummary: product.participantSummary || "",
    detailUrl: `/shop/product/${key}`,
    image: discreetBox,
    price: product.price || 0,
    cta: "View Details",
  };
});

const DiscreetDNATest = () => (
  <ShopBucketLayout
    title="Discreet DNA Test Kits"
    subhead="Private, at-home DNA testing to confirm biological relationships"
    heroImage={discreetBox}
    products={PRODUCTS}
    whoThisIsFor={[]}
    canonicalUrl="https://milehighdnatesting.com/shop/discreet-dna-test"
    metaTitle="Discreet DNA Test Kits | Mile High DNA"
    metaDescription="At-home discreet DNA tests using personal items. Toothbrush, hair, and other options. Private, confidential, mail-in testing."
    categoryLayout
  />
);

export default DiscreetDNATest;
