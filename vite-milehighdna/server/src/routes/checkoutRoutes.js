import express from "express";
import { processCheckout } from "../utils/checkoutUtils.js";
import axios from "axios";

const router = express.Router();

// Create checkout session
router.post("/create-checkout", async (req, res) => {
  try {
    const result = await processCheckout(req.body);

    // If checkout session created, trigger confirmation email
    if (result.url) {
      try {
        await axios.post(`${process.env.BACKEND_URL}/api/send-confirmation-email`, {
          toCustomer: req.body.customerEmail, // must be sent from frontend form
          toAdmin: "cynthia@milehighdnatesting.com",
          from: "info@milehighdnatesting.com",
          subject: "Order Confirmed",
          orderDetails: {
            customerName: `${req.body.firstName || ""} ${req.body.lastName || ""}`.trim(),
            orderNumber: result.orderId || "N/A",
            productName: req.body.productName || "DNA Test",
            price: req.body.unitPrice,
            orderType: req.body.country === "US" ? "domestic" : "international"
          }
        });
        console.log("✅ Confirmation email triggered via Mailgun");
      } catch (emailErr) {
        console.error("❌ Error sending confirmation email:", emailErr.response?.data || emailErr.message);
      }
    }

    res.json(result);
  } catch (err) {
    console.error("❌ Checkout error:", err);
    res.status(500).json({ error: "Error creating checkout session" });
  }
});

export default router;
