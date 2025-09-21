import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Correct path: go up into config
const ratesPath = path.join(process.cwd(), "config/shippingRates.json");

// Load once at startup
const shippingRates = JSON.parse(fs.readFileSync(ratesPath, "utf8"));

router.get("/rate", (req, res) => {
  const { country } = req.query;
  let rate;

  if (country === "US") {
    rate = shippingRates.DOMESTIC.US;
  } else if (shippingRates.INTERNATIONAL[country]) {
    rate = shippingRates.INTERNATIONAL[country];
  } else {
    return res.status(400).json({
      error: "We do not ship to this country. Please contact us for details.",
      contact: "info@milehighdnatesting.com"
    });
  }

  res.json({ shipping: rate });
});

export default router;
