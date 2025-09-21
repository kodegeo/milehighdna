// server/src/routes/webhook.js
import express from "express";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const router = express.Router();

// IMPORTANT: raw body parser for Stripe verification
router.use("/webhook", express.raw({ type: "application/json" }));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY // service role key
);

// POST /api/payments/webhook
router.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const orderId = session?.metadata?.orderId;

        if (orderId) {
          const { error } = await supabase
            .from("orders")
            .update({
              order_status: "Paid",
              stripe_payment_intent_id: session.payment_intent,
              stripe_session_id: session.id,
            })
            .eq("id", orderId);

          if (error) console.error("Supabase update error:", error);
        }
        break;
      }

      case "checkout.session.expired":
      case "payment_intent.payment_failed": {
        const session = event.data.object;
        const orderId =
          session?.metadata?.orderId ||
          session?.metadata?.order_id ||
          session?.metadata?.orderIdRef ||
          null;

        if (orderId) {
          const { error } = await supabase
            .from("orders")
            .update({
              order_status: "Canceled",
            })
            .eq("id", orderId);

          if (error) console.error("Supabase update error:", error);
        }
        break;
      }

      default:
        break;
    }

    return res.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return res.status(500).send("Server error");
  }
});

export default router;
