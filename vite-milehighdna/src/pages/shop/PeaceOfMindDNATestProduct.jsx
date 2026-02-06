import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Legacy route redirects to unified product page using catalog key.
 * Old route: /shop/peace-of-mind-dna-test
 * New route: /shop/product/PATERNITY_PEACE_OF_MIND
 */
const PeaceOfMindDNATestProduct = () => (
  <Navigate to="/shop/product/PATERNITY_PEACE_OF_MIND" replace />
);

export default PeaceOfMindDNATestProduct;
