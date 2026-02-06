import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Legacy route redirects to unified product page using catalog key.
 * Old route: /shop/at-home-paternity-test-multiple-children
 * New route: /shop/product/PATERNITY_AT_HOME_MULTI_CHILD
 */
const AtHomePaternityTestMultipleChildren = () => (
  <Navigate to="/shop/product/PATERNITY_AT_HOME_MULTI_CHILD" replace />
);

export default AtHomePaternityTestMultipleChildren;
