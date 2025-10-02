// server/src/routes/webhook.js
import express from "express";
import Stripe from "stripe";
import supabase from "../infrastructure/supabaseClient.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20", // lock to stable version
});

// Stripe requires raw body for signature verification
router.post(
  "/webhook",
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
      console.error("⚠️ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

      // handle event.type here
    res.json({ received: true });

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;
          const orderId = session?.metadata?.orderId;

          if (!orderId) {
            console.error("⚠️ No orderId in session metadata");
            break;
          }

          // 1. Update order in Supabase
          const { error: orderErr } = await supabase
            .from("orders")
            .update({
              order_status: "Paid",
              stripe_payment_intent_id: session.payment_intent,
              stripe_session_id: session.id,
            })
            .eq("id", orderId);

          if (orderErr) {
            console.error("Supabase order update error:", orderErr);
          } else {
            console.log(`✅ Order ${orderId} marked as Paid`);
          }

          // 2. Trigger confirmation emails
          try {
            await sendOrderConfirmation({
              toCustomer: session.customer_email,
              toAdmin: "info@milehighdnatesting.com",
              from: "info@milehighdnatesting.com",
              subject: "Order Confirmed - Mile High DNA Testing",
              orderDetails: {
                orderId,
                productName: session.metadata.productName,
                shippingMethod: session.metadata.shippingMethod,
                locations: session.metadata.shippingLocations,
                customerName: `${session.metadata.firstName || ""} ${
                  session.metadata.lastName || ""
                }`.trim(),
                email: session.customer_email,
              },
            });
            console.log(`📧 Confirmation emails sent for order ${orderId}`);
          } catch (mailErr) {
            console.error("Email send error:", mailErr);
          }
          break;
        }

        case "checkout.session.expired":
        case "checkout.session.async_payment_failed": {
          const session = event.data.object;
          const orderId = session?.metadata?.orderId;

          if (orderId) {
            const { error: cancelErr } = await supabase
              .from("orders")
              .update({ order_status: "Canceled" })
              .eq("id", orderId);

            if (cancelErr) {
              console.error("Supabase cancel update error:", cancelErr);
            } else {
              console.log(`⚠️ Order ${orderId} marked as Canceled`);
            }
          }
          break;
        }

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      return res.json({ received: true });
    } catch (err) {
      console.error("Webhook handler error:", err);
      return res.status(500).json({ error: "Webhook processing failed" });
    }
  }
);

export default router;
