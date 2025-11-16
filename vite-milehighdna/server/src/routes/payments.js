// server/src/routes/payments.js
import express from "express";
import Stripe from "stripe";

const router = express.Router();

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// POST /api/payments/create-session
router.post("/create-session", async (req, res) => {
  try {
    const {
      orderId,
      customerCode,
      firstName,
      lastName,
      email,
      productName,
      subtotalUsd,
      shippingUsd,
      orderSource,
      country,
    } = req.body;

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: productName },
            unit_amount: subtotalUsd * 100, // convert to cents
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Shipping" },
            unit_amount: shippingUsd * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/success?orderId=${orderId}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: {
        orderId,
        customerCode,
        firstName,
        lastName,
        email,
        phoneNumber: req.body.phoneNumber || "",
        orderSource,
        country,
      },
    });

    // Respond with Checkout URL
    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
