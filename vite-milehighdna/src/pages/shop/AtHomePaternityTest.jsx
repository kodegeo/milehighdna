import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Legacy route redirects to unified product page using catalog key.
 * Old route: /shop/at-home-paternity-test
 * New route: /shop/product/PATERNITY_AT_HOME_SINGLE
 */
const AtHomePaternityTest = () => (
  <Navigate to="/shop/product/PATERNITY_AT_HOME_SINGLE" replace />
);

export default AtHomePaternityTest;
