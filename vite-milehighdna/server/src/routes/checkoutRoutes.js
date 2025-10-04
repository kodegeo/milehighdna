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

    // ✅ Build success URL with all order data as query params
    const successUrl = `${process.env.FRONTEND_URL}/confirmation?orderId={CHECKOUT_SESSION_ID}&customerEmail=${encodeURIComponent(
      customerEmail
    )}&customerName=${encodeURIComponent(
      `${firstName} ${lastName}`
    )}&productName=${encodeURIComponent(
      productName
    )}&price=${unitPrice}&shippingFee=${shippingFee}&shippingMethod=${shippingMethod}&locations=${locations}&orderType=${
      country === "US" ? "Domestic" : "International"
    }&primaryStreet=${encodeURIComponent(
      primaryAddress.street
    )}&primaryCity=${encodeURIComponent(
      primaryAddress.city
    )}&primaryState=${encodeURIComponent(
      primaryAddress.state
    )}&primaryZip=${encodeURIComponent(primaryAddress.zipCode)}${
      locations === 2
        ? `&secondaryStreet=${encodeURIComponent(
            secondaryAddress.street
          )}&secondaryCity=${encodeURIComponent(
            secondaryAddress.city
          )}&secondaryState=${encodeURIComponent(
            secondaryAddress.state
          )}&secondaryZip=${encodeURIComponent(secondaryAddress.zipCode)}`
        : ""
    }`;

    // ✅ Create checkout session using your utility
    const result = await processCheckout({ ...req.body, success_url: successUrl });

    if (result.url) {
      // Build order details for confirmation email
      const orderDetails = {
        customerName: `${firstName || ""} ${lastName || ""}`.trim(),
        productName: productName || "At Home DNA Test",
        price: Number(unitPrice || 0).toFixed(2),
        shippingFee: Number(shippingFee || 0).toFixed(2),
        total: (Number(unitPrice || 0) + Number(shippingFee || 0)).toFixed(2),
        orderType: country === "US" ? "Domestic" : "International",
        shippingMethod: shippingMethod || "Regular",
        locations: locations || 1,
        primaryAddress: primaryAddress || {},
        secondaryAddress: locations === 2 ? secondaryAddress : null,
      };

      console.log("📦 Order Details for Confirmation Email:", orderDetails);

      // ✅ Trigger confirmation email
      try {
        await axios.post(
          `${process.env.BACKEND_URL || "https://milehighdna-backend.onrender.com"}/api/send-confirmation`,
          {
            toCustomer: customerEmail,
            toAdmin: "cynthia@milehighdnatesting.com",
            from: "info@milehighdnatesting.com",
            subject: `Order Confirmation - Mile High DNA Testing`,
            orderDetails,
          }
        );
        console.log("✅ Confirmation email sent successfully via Mailgun");
      } catch (emailErr) {
        console.error(
          "❌ Error sending confirmation email:",
          emailErr.response?.data || emailErr.message
        );
      }
    }

    res.json(result);
  } catch (err) {
    console.error("❌ Checkout error:", err);
    res.status(500).json({ error: "Error creating checkout session" });
  }
});

export default router;
