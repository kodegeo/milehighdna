import express from "express";
import axios from "axios";
import { sendConfirmationEmail } from "../controllers/sendConfirmationController.js";


const router = express.Router();

router.post("/", async (req, res) => {
  const { toCustomer, toAdmin, from, subject, orderDetails } = req.body;

  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const mailgunApiKey = process.env.MAILGUN_API_KEY;

  const logoUrl = "https://milehighdnatesting.com/images/milehigh-dna-logo.png";

  const plainText = `
Order Confirmation
-----------------
Customer: ${orderDetails.customerName}
Order #: ${orderDetails.orderNumber}
Product: ${orderDetails.productName}
Price: $${orderDetails.price}
Type: ${orderDetails.orderType}
  `;

  const htmlBody = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #244669; color: #fff; text-align: center; padding: 20px;">
      <img src="${logoUrl}" alt="Mile High DNA Testing" style="max-width: 180px; height: auto;" />
    </div>
    <div style="padding: 20px;">
      <h2 style="color: #244669; margin-top: 0;">Order Confirmation</h2>
      <p>Thank you for your order. Here are your details:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Customer</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${orderDetails.customerName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Order #</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${orderDetails.orderNumber}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Product</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${orderDetails.productName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Price</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">$${orderDetails.price}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Type</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${orderDetails.orderType}</td>
        </tr>
      </table>
      <p style="margin-top: 20px;">We’ll contact you soon with next steps. If you have any questions, please reply to this email.</p>
      <p style="color: #244669; font-weight: bold;">Thank you for choosing Mile High DNA Testing.</p>
    </div>
    <div style="background-color: #60A3D8; text-align: center; padding: 15px; color: #fff; font-size: 14px;">
      &copy; ${new Date().getFullYear()} Mile High DNA Testing. All rights reserved.
    </div>
  </div>
  `;

  try {
    const response = await axios.post(
      `https://api.mailgun.net/v3/${mailgunDomain}/messages`,
      new URLSearchParams({
        from: `Mile High DNA <${from}>`,
        to: `${toCustomer}, ${toAdmin}`,
        subject,
        text: plainText,
        html: htmlBody
      }),
      {
        auth: {
          username: "api",
          password: mailgunApiKey
        }
      }
    );

    console.log("✅ Mailgun email sent:", response.data);
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error("❌ Mailgun error:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Failed to send Mailgun email" });
  }
});

export default router;
