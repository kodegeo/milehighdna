// server/src/routes/payments.js
import express from "express";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const paymentsRouter = express.Router();

// ✅ Fix JSON import (works in all Node.js ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const shippingRatesPath = path.resolve(__dirname, "../../config/shippingRates.json");
const shippingRates = JSON.parse(fs.readFileSync(shippingRatesPath, "utf-8"));

// ✅ Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// ✅ Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

paymentsRouter.post("/create-session", async (req, res) => {
  try {
    console.log("➡️ Request body:", req.body);

    const {
      orderId,
      customerCode,
      firstName,
      lastName,
      email,
      productName,
      subtotalUsd,
      orderSource,
      country,
    } = req.body;

    // Validate
    if (!orderId || !email || subtotalUsd == null || !orderSource) {
      return res.status(400).json({
        error: "Missing required fields: orderId, email, subtotalUsd, orderSource",
      });
    }

    // Shipping logic
    let shippingUsd = 0;
    if (orderSource === "online_domestic") {
      shippingUsd = 15;
    } else if (orderSource === "online_international") {
      if (!country) {
        return res.status(400).json({ error: "Country required for international orders" });
      }
      if (!shippingRates[country]) {
        return res.status(400).json({
          error: `We do not ship to ${country}. Contact info@milehighdnatesting.com`,
        });
      }
      shippingUsd = shippingRates[country];
    }

    // Create Stripe customer
    const customer = await stripe.customers.create({
      email,
      name: `${firstName || ""} ${lastName || ""}`.trim(),
      metadata: { customerCode, orderSource },
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customer.id,
      success_url: `${process.env.FRONTEND_URL}/checkout-success?order=${encodeURIComponent(
        orderId
      )}`,
      cancel_url: `${process.env.FRONTEND_URL}/checkout-cancel`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: { name: productName || "DNA Test Kit" },
            unit_amount: Math.round(Number(subtotalUsd) * 100),
          },
        },
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: { name: "Shipping" },
            unit_amount: Math.round(Number(shippingUsd) * 100),
          },
        },
      ],
      metadata: {
        orderId,
        customerCode,
        orderSource,
        country,
        subtotalUsd: String(subtotalUsd),
        shippingUsd: String(shippingUsd),
      },
    });

    console.log("✅ Stripe session created:", session.id);
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("❌ create-session error:", err);
    return res.status(500).json({ error: err.message || "Unknown error" });
  }
});
