import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Legacy route redirects to unified product page using catalog key.
 * Old route: /shop/fast-track-results-upgrade
 * New route: /shop/product/FAST_TRACK_RESULTS
 */
const FastTrackResultsUpgrade = () => (
  <Navigate to="/shop/product/FAST_TRACK_RESULTS" replace />
);

export default FastTrackResultsUpgrade;
