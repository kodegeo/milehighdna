import shippingRates from "../data/shippingRates.json";

/** Domestic regular outbound kit shipping (per address). Keep in sync with server/config/shippingRates.json */
export const DOMESTIC_REGULAR_SHIPPING_FEE = shippingRates.DOMESTIC.US.regular;

export const DOMESTIC_SHIPPING_SUFFIX = `+ $${DOMESTIC_REGULAR_SHIPPING_FEE.toFixed(0)} shipping`;

export const DOMESTIC_SHIPPING_SUFFIX_ES = `+ $${DOMESTIC_REGULAR_SHIPPING_FEE.toFixed(0)} envío`;
