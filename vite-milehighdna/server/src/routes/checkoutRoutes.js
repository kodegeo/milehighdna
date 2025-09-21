import express from "express";
import { processCheckout } from "../utils/checkoutUtils.js";
import { getShippingFee } from "../utils/shipping.js";

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

// Shipping fee endpoint
router.get("/shipping/:type/:country", async (req, res) => {
  try {
    const { type, country } = req.params;
    const result = await getShippingFee(type, country);
    res.json(result);
  } catch (err) {
    console.error("Shipping error:", err);
    res.status(500).json({ error: "Error calculating shipping fee" });
  }
});

export default router;
