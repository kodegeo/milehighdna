import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ratesPath = path.resolve(__dirname, "../../config/shippingRates.json");
const rates = JSON.parse(fs.readFileSync(ratesPath, "utf-8"));

export function getShippingFee(type, countryCode, options = {}) {
  try {
    if (type === "domestic") {
      const method = options.method || "regular";
      const locations = options.locations || 1;

      const baseRate =
        rates.DOMESTIC[countryCode]?.[method] ||
        rates.DOMESTIC.DEFAULT?.[method];

      if (!baseRate) {
        return { error: "No shipping rate found" };
      }

      // cutoff for overnight
      if (method === "overnight") {
        const now = new Date();
        const mstHour = (now.getUTCHours() + 24 - 7) % 24; // MST = UTC-7
        if (mstHour >= 14) {
          return {
            error: "Overnight orders must be placed before 2:00 PM MST",
          };
        }
      }

      return { shipping: baseRate * locations };
    }

    if (type === "international") {
      return {
        shipping:
          rates.INTERNATIONAL[countryCode] ||
          rates.INTERNATIONAL.DEFAULT,
      };
    }

    return { error: "Unsupported shipping type" };
  } catch (err) {
    console.error("Shipping error:", err);
    return { error: "Unable to calculate shipping" };
  }
}

