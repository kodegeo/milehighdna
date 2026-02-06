import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Legacy route redirects to unified product page using catalog key.
 * Old route: /shop/multi-location-paternity-dna-test
 * New route: /shop/product/PATERNITY_MULTI_LOCATION
 */
const MultiLocationPaternityDNATest = () => (
  <Navigate to="/shop/product/PATERNITY_MULTI_LOCATION" replace />
);

export default MultiLocationPaternityDNATest;
