 // server/src/utils/shipping.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON config once
const ratesPath = path.join(__dirname, "../config/shippingRates.json");
const rates = JSON.parse(fs.readFileSync(ratesPath, "utf-8"));

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
