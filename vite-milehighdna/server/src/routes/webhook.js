import express from "express";
import Stripe from "stripe";
import axios from "axios";
import { supabase } from "../infrastructure/supabaseClient.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// Stripe webhook endpoint
router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("❌ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      // Handle the event
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        const orderId = session.metadata?.orderId;
        if (orderId) {
          // ✅ Update order in Supabase
          await supabase
            .from("orders")
            .update({
              order_status: "Paid",
              stripe_payment_intent_id: session.payment_intent,
              stripe_session_id: session.id,
            })
            .eq("id", orderId);

          // ✅ Trigger confirmation email via backend route
          await axios.post(`${process.env.BACKEND_URL}/api/send-confirmation-email`, {
            toCustomer: session.customer_email,
            toAdmin: "cynthia@milehighdnatesting.com",
            from: "info@milehighdnatesting.com",
            subject: "Order Confirmed - Mile High DNA Testing",
            orderDetails: {
              orderId,
              productName: session.metadata.productName,
              shippingMethod: session.metadata.shippingMethod,
              locations: session.metadata.shippingLocations,
              customerName: `${session.metadata.firstName || ""} ${session.metadata.lastName || ""}`.trim(),
              email: session.customer_email,
            },
          });

          console.log("✅ Order updated and confirmation email sent");
        }
      }

      if (
        event.type === "checkout.session.expired" ||
        event.type === "checkout.session.async_payment_failed"
      ) {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;

        if (orderId) {
          // ❌ Mark order canceled
          await supabase
            .from("orders")
            .update({ order_status: "Canceled" })
            .eq("id", orderId);

          console.log("⚠️ Order marked as canceled");
        }
      }

      // ✅ Only one final response
      res.json({ received: true });
    } catch (err) {
      console.error("❌ Webhook handler error:", err.message);
      res.status(500).send(`Webhook handler failed: ${err.message}`);
    }
  }
);

export default router;
