// server/src/routes/checkoutRoutes.js
import express from "express";
import { processCheckout } from "../utils/checkoutUtils.js";
import { getShippingFee } from "../utils/shipping.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ratesPath = path.resolve(__dirname, "../../config/shippingRates.json");
const rates = JSON.parse(fs.readFileSync(ratesPath, "utf-8"));

const router = express.Router();

// Checkout endpoint
router.post("/create-checkout", async (req, res) => {
  try {
    const result = await processCheckout(req.body);
    res.json(result);
  } catch (err) {
    console.error("Checkout error:", err);
    res.status(500).json({ error: "Error creating checkout session" });
  }
});

// Shipping fee endpoint with validation
router.get("/shipping/:type/:country", async (req, res) => {
  try {
    const { type, country } = req.params;

    // validate type
    if (!["domestic", "international"].includes(type)) {
      return res.status(400).json({
        error: `Unsupported shipping type: ${type}`,
        contact: "info@milehighdnatesting.com",
      });
    }

    // validate country using uppercase keys
    const validCountries = Object.keys(rates[type.toUpperCase()]);
    if (!validCountries.includes(country) && !rates[type.toUpperCase()]["DEFAULT"]) {
      return res.status(400).json({
        error: `No shipping rate found for ${country}`,
        contact: "info@milehighdnatesting.com",
      });
    }

    // call utility function
    const result = await getShippingFee(type, country);
    res.json(result);
  } catch (err) {
    console.error("Shipping error:", err);
    res.status(500).json({ error: "Error calculating shipping fee" });
  }
});

export default router;
