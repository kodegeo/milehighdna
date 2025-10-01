// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import checkoutRoutes from "./src/routes/checkoutRoutes.js";


// ✅ Load env first
dotenv.config();

// ✅ Validate required environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ STRIPE_SECRET_KEY is missing from environment variables");
  process.exit(1);
}
if (!process.env.FRONTEND_URL) {
  console.error("❌ FRONTEND_URL is missing from environment variables");
  process.exit(1);
}

import paymentsRouter from "./src/routes/payments.js";
import webhookRouter from "./src/routes/webhook.js";
import sendConfirmationRoute from "./src/routes/sendConfirmationRoute.js";
import shippingRoutes from "./src/routes/shipping.js";
import healthRoutes from "./src/routes/health.js";


const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Mount routers
app.use("/api/payments", paymentsRouter);
app.use("/api/payments", webhookRouter);
app.use("/api/send-confirmation-email", sendConfirmationRoute);
app.use("/api/shipping", shippingRoutes);
app.use("/api", checkoutRoutes);
app.use("/health", healthRoutes);



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
