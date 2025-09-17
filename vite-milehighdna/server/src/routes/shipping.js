import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const ratesPath = path.join(process.cwd(), "server/config/shippingRates.json");

// Load once at startup (or read on each request if you expect edits during runtime)
const shippingRates = JSON.parse(fs.readFileSync(ratesPath, "utf8"));

router.get("/rate", (req, res) => {
  const { country } = req.query;
  const rate = shippingRates[country] ?? shippingRates["DEFAULT"] ?? 50;
  res.json({ shipping: rate });
});

export default router;
