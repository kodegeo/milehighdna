// server/src/utils/shipping.js
import rates from "../config/shippingRates.json" assert { type: "json" };

export async function getShippingFee(type, countryCode) {
  try {
    if (type === "domestic") {
      return { shipping: rates.domestic[countryCode] || rates.domestic["DEFAULT"] };
    }

    if (type === "international") {
      return { shipping: rates.international[countryCode] || rates.international["DEFAULT"] };
    }

    return { error: "Unsupported shipping type", contact: "info@milehighdnatesting.com" };
  } catch (err) {
    console.error("Shipping error:", err);
    return { error: "Unable to calculate shipping", contact: "info@milehighdnatesting.com" };
  }
}
