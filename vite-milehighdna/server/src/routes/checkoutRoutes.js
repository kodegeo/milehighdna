import express from "express";
import { processCheckout } from "../utils/checkoutUtils.js";
import { getProductConfig, isValidProductKey } from "../config/productCatalog.js";
import axios from "axios";

const router = express.Router();

router.post("/create-checkout", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      customerEmail,
      phoneNumber,
      productName,
      unitPrice,
      productKey, // Accept productKey instead of stripePriceId
      shippingFee,
      country,
      shippingMethod,
      locations,
      primaryAddress,
      secondaryAddress,
    } = req.body;

    // 🔍 DEBUG: Log incoming productKey
    console.log("🔍 [ROUTE] Incoming productKey:", productKey);
    console.log("🔍 [ROUTE] Request body keys:", Object.keys(req.body));

    // ⚠️ STRICT VALIDATION: Fail loudly if productKey is missing
    if (!productKey || !productKey.trim()) {
      const errorMsg = `❌ [ROUTE] productKey is REQUIRED but missing or empty. Product: ${productName || "unknown"}`;
      console.error(errorMsg);
      return res.status(400).json({ error: "Product key is required for shop orders" });
    }

    // Resolve productKey to Stripe configuration
    let stripePriceId = null;
    let testType = null;
    let legal = false;

    const trimmedProductKey = productKey.trim();
    
    if (!isValidProductKey(trimmedProductKey)) {
      const errorMsg = `❌ [ROUTE] Invalid productKey: "${trimmedProductKey}". Product: ${productName || "unknown"}`;
      console.error(errorMsg);
      return res.status(400).json({ error: `Invalid product key: ${trimmedProductKey}` });
    }

    const productConfig = getProductConfig(trimmedProductKey);
    if (!productConfig) {
      const errorMsg = `❌ [ROUTE] Product config not found for key: "${trimmedProductKey}". Product: ${productName || "unknown"}`;
      console.error(errorMsg);
      return res.status(400).json({ error: `Product configuration not found for key: ${trimmedProductKey}` });
    }

    stripePriceId = productConfig.stripePriceId;
    testType = productConfig.testType;
    legal = productConfig.legal;

    // 🔍 DEBUG: Log resolved values
    console.log("🔍 [ROUTE] Resolved stripePriceId:", stripePriceId);
    console.log("🔍 [ROUTE] Resolved testType:", testType);
    console.log("🔍 [ROUTE] Resolved legal:", legal);

    // ⚠️ FINAL VALIDATION: Ensure stripePriceId was resolved
    if (!stripePriceId || !stripePriceId.trim()) {
      const errorMsg = `❌ [ROUTE] stripePriceId is missing after resolution. ProductKey: ${trimmedProductKey}, Product: ${productName || "unknown"}`;
      console.error(errorMsg);
      return res.status(500).json({ error: "Failed to resolve Stripe price ID from product key" });
    }

    // Dynamic URLs
    // session_id + product let the Success page fire a purchase event for
    // GA4/Google Ads attribution. {CHECKOUT_SESSION_ID} is replaced by Stripe.
    const successUrl = `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}&product=${encodeURIComponent(trimmedProductKey)}`;
    const cancelUrl = `${process.env.FRONTEND_URL}/cancel`;

    // 🔥 Pass everything to checkoutUtils (FULL PAYLOAD)
    const result = await processCheckout({
      ...req.body,
      stripePriceId, // Resolved from productKey
      productKey, // Pass productKey for metadata
      testType, // Pass testType for metadata
      legal, // Pass legal flag for metadata
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    // Only send confirmation email if Stripe session succeeded
    if (result.url) {
      try {
        await axios.post(`${process.env.BACKEND_URL}/api/send-confirmation`, {
          toCustomer: customerEmail,
          toAdmin: "cynthia@milehighdnatesting.com",
          from: "info@milehighdnatesting.com",
          subject: `Order Confirmation - Mile High DNA Testing`,
          orderDetails: {
            customerName: `${firstName} ${lastName}`,
            phoneNumber,      // ✅ Include phone
            productName,
            price: unitPrice,
            shippingFee,
            total: Number(unitPrice) + Number(shippingFee),
            orderType: country === "US" ? "Domestic" : "International",
            shippingMethod,
            locations,
            primaryAddress,
            secondaryAddress,
          },
        });
      } catch (emailErr) {
        console.error("❌ Email sending error:", emailErr.message);
        // Do not crash checkout – Stripe already created session
      }
    }

    res.json(result);
  } catch (err) {
    console.error("❌ Checkout route error:", err);
    res.status(500).json({ error: "Error creating checkout session" });
  }
});

export default router;
