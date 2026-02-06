import React from "react";
import ShopBucketLayout from "./ShopBucketLayout";
import grandparentBox from "../../assets/images/shop/grandparent-box.png";
import { PRODUCT_CATALOG } from "../../data/productCatalog";

// Product keys for grandparent category
const GRANDPARENT_PRODUCT_KEYS = [
  "GRANDPARENT_SINGLE_LOCATION",
  "GRANDPARENT_MULTI_LOCATION",
  "GRANDPARENT_PEACE_OF_MIND",
];

const PRODUCTS = GRANDPARENT_PRODUCT_KEYS.map((key) => {
  const product = PRODUCT_CATALOG[key] || {};
  return {
    name: product.name || "",
    description: product.shortDescription || "",
    participantSummary: product.participantSummary || "",
    detailUrl: `/shop/product/${key}`,
    image: grandparentBox,
    price: product.price || 0,
    cta: "View Details",
  };
});

const GrandparentDNATest = () => (
  <ShopBucketLayout
    title="Grandparent DNA Test Kits"
    subhead="Private, at-home DNA testing to confirm biological relationships"
    heroImage={grandparentBox}
    products={PRODUCTS}
    whoThisIsFor={[]}
    canonicalUrl="https://milehighdnatesting.com/shop/grandparent-dna-test"
    metaTitle="Grandparent DNA Test Kits | Mile High DNA"
    metaDescription="At-home grandparent DNA tests for peace of mind. Single and multi-location options. Private, accurate, mail-in testing when a parent is unavailable."
    categoryLayout
  />
);

export default GrandparentDNATest;
