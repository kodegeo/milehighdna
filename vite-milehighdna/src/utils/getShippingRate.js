// Helper to get shipping rate for domestic and international shipments
// Imports JSON rates and returns a numeric value

import shippingRates from "../data/shippingRates.json";

export const getShippingRate = (countryCode, method = "regular") => {
  // Domestic (US) logic
  if (countryCode === "US") {
    const domesticRate =
      shippingRates?.DOMESTIC?.US?.[method] || (method === "regular" ? 20 : 50);
    return Number(domesticRate);
  }

  // International logic
  const intlRate = shippingRates?.INTERNATIONAL?.[countryCode];

  if (typeof intlRate === "number" && intlRate > 0) {
    return Number(intlRate);
  }

  if (intlRate && typeof intlRate === "object" && intlRate[method]) {
    return Number(intlRate[method]);
  }

  return method === "regular" ? 50 : 100;
};


