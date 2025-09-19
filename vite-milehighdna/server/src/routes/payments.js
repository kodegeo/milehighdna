// server/src/routes/payments.js
import express from "express";
import Stripe from "stripe";

const router = express.Router();

// ✅ Initialize Stripe after dotenv has already run in index.js
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

router.post("/create-session", async (req, res) => {
  try {
    const { orderId, customerCode, firstName, lastName, email, productName, subtotalUsd, shippingUsd, orderSource, country } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: productName },
            unit_amount: subtotalUsd * 100,
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
        orderSource,
        country,
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
