import express from "express";
import { processCheckout } from "../utils/checkoutUtils.js";
import axios from "axios";

const router = express.Router();

router.post("/create-checkout", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      customerEmail,
      phoneNumber,        // ✅ Capture from frontend
      productName,
      unitPrice,
      shippingFee,
      country,
      shippingMethod,
      locations,
      primaryAddress,     // international/domestic structured address
      secondaryAddress,
    } = req.body;

    // Dynamic URLs
    const successUrl = `${process.env.FRONTEND_URL}/success`;
    const cancelUrl = `${process.env.FRONTEND_URL}/cancel`;

    // 🔥 Pass everything to checkoutUtils (FULL PAYLOAD)
    const result = await processCheckout({
      ...req.body,
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
