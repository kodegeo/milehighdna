// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

import { paymentsRouter } from "./src/routes/payments.js";
import { webhookRouter } from "./src/routes/webhook.js";
import { sendConfirmationRoute } from "./src/routes/sendConfirmationRoute.js";
import { shippingRoutes } from "./routes/shipping.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});


// ✅ Validate required environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ STRIPE_SECRET_KEY is missing from environment variables");
  process.exit(1);
}

if (!process.env.FRONTEND_URL) {
  console.error("❌ FRONTEND_URL is missing from environment variables");
  process.exit(1);
}

// ✅ Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Mount routers
app.use("/api/payments", paymentsRouter);
app.use("/api/payments", webhookRouter);
app.use("/api/send-confirmation-email", sendConfirmationRoute);
app.use("/api/shipping", shippingRoutes);



// ✅ Health check
app.get("/", (req, res) => {
  res.json({ status: "Mile High DNA Backend is running!" });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error in Express:", err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

// ✅ Optional direct Stripe checkout (uses priceId, not needed if you use /api/payments/create-session)
app.post("/create-checkout-session", async (req, res) => {
  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: "priceId is required" });
  }

  console.log("🔐 Stripe key prefix:", process.env.STRIPE_SECRET_KEY?.slice(0, 8));
  console.log("📦 Price ID sent:", priceId);
  console.log("🌐 Frontend URL:", process.env.FRONTEND_URL);

  try {
    const price = await stripe.prices.retrieve(priceId);

    if (price.type === "recurring") {
      return res.status(400).json({
        error:
          'Recurring prices require mode: "subscription". Use mode: "payment" for one-time payments.',
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    console.log("✅ Checkout session created:", session.id);
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error.message, error.stack);

    if (error.code === "resource_missing") {
      res.status(400).json({
        error: `Price ID '${priceId}' not found. Please check if the price exists and is active.`,
      });
    } else if (error.code === "parameter_invalid_string") {
      res.status(400).json({
        error: 'Invalid price ID format. Price IDs should start with "price_".',
      });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
  console.log("📦 Environment Variables:");
  console.log(
    `   - STRIPE_SECRET_KEY: ${
      process.env.STRIPE_SECRET_KEY ? "✅ Set" : "❌ Missing"
    }`
  );
  console.log(
    `   - FRONTEND_URL: ${process.env.FRONTEND_URL ? "✅ Set" : "❌ Missing"}`
  );
  console.log(
    `   - SENDGRID_API_KEY: ${
      process.env.SENDGRID_API_KEY ? "✅ Set" : "❌ Missing"
    }`
  );
});
