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
      productName,
      unitPrice,
      shippingFee,
      country,
      shippingMethod,
      locations,
      primaryAddress,
      secondaryAddress,
    } = req.body;

    const successUrl = `${process.env.FRONTEND_URL}/success`;

    const result = await processCheckout({
      ...req.body,
      success_url: successUrl,
    });

    if (result.url) {
      try {
        await axios.post(
          `${process.env.BACKEND_URL}/api/send-confirmation`,
          {
            toCustomer: customerEmail,
            toAdmin: "cynthia@milehighdnatesting.com",
            from: "info@milehighdnatesting.com",
            subject: `Order Confirmation - Mile High DNA Testing`,
            orderDetails: {
              customerName: `${firstName} ${lastName}`,
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
          }
        );
      } catch (emailErr) {
        console.error("❌ Email error:", emailErr.message);
      }
    }

    res.json(result);
  } catch (err) {
    console.error("❌ Checkout error:", err);
    res.status(500).json({ error: "Error creating checkout session" });
  }
});

export default router;
