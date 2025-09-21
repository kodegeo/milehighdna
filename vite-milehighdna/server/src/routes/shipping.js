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

  // Domestic rule
  if (country === "US") {
    rate = shippingRates.DOMESTIC.US;
  } else {
    // International rules
    rate =
      shippingRates.INTERNATIONAL[country] ??
      shippingRates.INTERNATIONAL.DEFAULT ??
      50;
  }

  res.json({ shipping: rate });
});

export default router;
