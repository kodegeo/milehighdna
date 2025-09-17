// server/routes/payments.js
import express from "express";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const paymentsRouter = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY // service role key (server-side ONLY)
);

// POST /api/payments/create-session
paymentsRouter.post("/create-session", async (req, res) => {
  try {
    const {
      // customer/order info from your checkout
      orderId,              // <- the orders.id you created in Supabase
      customerCode,         // your human-friendly order code
      firstName,
      lastName,
      email,
      subtotalUsd,          // e.g., 99
      shippingUsd,          // e.g., 12 (domestic) or rate from JSON (intl)
      orderSource           // "online_domestic" | "online_international"
    } = req.body;

    if (!orderId || !email || subtotalUsd == null || shippingUsd == null) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const total = Number(subtotalUsd) + Number(shippingUsd);

    // Optional: create/find Stripe customer
    const customer = await stripe.customers.create({
      email,
      name: `${firstName || ""} ${lastName || ""}`.trim(),
      metadata: { customerCode, orderSource },
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customer.id,
      success_url: `${process.env.PUBLIC_BASE_URL}/checkout/success?code=${encodeURIComponent(
        customerCode || ""
      )}`,
      cancel_url: `${process.env.PUBLIC_BASE_URL}/checkout/cancel`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: { name: "At-Home Paternity DNA Kit" },
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
        orderId: String(orderId),
        customerCode: customerCode || "",
        orderSource: orderSource || "",
        subtotalUsd: String(subtotalUsd),
        shippingUsd: String(shippingUsd),
        totalUsd: String(total),
      },
    });

    // Store Stripe session id on the order for traceability
    await supabase
      .from("orders")
      .update({
        stripe_session_id: session.id,
        order_status: "Pending",
      })
      .eq("id", orderId);

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-session error:", err);
    return res.status(400).json({ error: err?.message || "Unknown error" });
  }
});
