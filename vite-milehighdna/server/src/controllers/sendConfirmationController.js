import axios from "axios";

/**
 * Controller for sending order confirmation emails.
 *
 * Expects req.body:
 * {
 *   toCustomer: string,
 *   toAdmin: string,
 *   from: string,
 *   subject: string,
 *   orderDetails: {
 *     orderId: string,
 *     productName: string,
 *     shippingMethod?: string,
 *     locations?: number,
 *     customerName?: string,
 *     email?: string
 *   }
 * }
 */

export const handleSendConfirmation = async (req, res) => {
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
        <tr><td><strong>Customer</strong></td><td>${orderDetails.customerName}</td></tr>
        <tr><td><strong>Order #</strong></td><td>${orderDetails.orderNumber}</td></tr>
        <tr><td><strong>Product</strong></td><td>${orderDetails.productName}</td></tr>
        <tr><td><strong>Price</strong></td><td>$${orderDetails.price}</td></tr>
        <tr><td><strong>Type</strong></td><td>${orderDetails.orderType}</td></tr>
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
        auth: { username: "api", password: mailgunApiKey }
      }
    );

    console.log("✅ Mailgun email sent:", response.data);
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("❌ Mailgun error:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Failed to send Mailgun email" });
  }
};
