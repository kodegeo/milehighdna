import axios from "axios";

/**
 * Controller for sending detailed order confirmation emails.
 *
 * Expects req.body:
 * {
 *   toCustomer: string,
 *   toAdmin: string,
 *   from: string,
 *   subject: string,
 *   orderDetails: {
 *     orderNumber: string,
 *     customerName: string,
 *     productName: string,
 *     price: string,
 *     phoneNumber: string,
 *     shippingFee: string,
 *     total: string,
 *     orderType: string,
 *     shippingMethod: string,
 *     locations: number,
 *     primaryAddress: { street, city, state, zip },
 *     secondaryAddress?: { street, city, state, zip }
 *   }
 * }
 */

export const handleSendConfirmation = async (req, res) => {
  const { toCustomer, toAdmin, from, subject, orderDetails } = req.body;
  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const mailgunApiKey = process.env.MAILGUN_API_KEY;

  const logoUrl = "https://milehighdnatesting.com/images/milehigh-dna-logo-white.png";

  // Normalize for safety
  const primary = orderDetails.primaryAddress || {};
  const secondary = orderDetails.secondaryAddress || {};

  // 🆕 Add dynamic region labels (state/province/etc.)
  const regionLabel = orderDetails.orderType === "International" ? "Region" : "State";
  const postalLabel = orderDetails.orderType === "International" ? "Postal Code" : "ZIP Code";
  
  // 🧾 Plain text fallback
  const plainText = `
Order Confirmation
-------------------------
Customer: ${orderDetails.customerName}
Phone: ${orderDetails.phoneNumber || "N/A"}
Order #: ${orderDetails.orderNumber || "N/A"}
Product: ${orderDetails.productName}
Price: $${orderDetails.price}
Shipping Fee: $${orderDetails.shippingFee}
Total: $${orderDetails.total}
Type: ${orderDetails.orderType}
Shipping Method: ${orderDetails.shippingMethod}
Locations: ${orderDetails.locations}


Primary Shipping Address:
${primary.street || ""}
${primary.city || ""}, ${primary.state || primary.region || ""} ${primary.zip || primary.postalCode || ""}

${
  orderDetails.secondaryAddress
    ? `Secondary Shipping Address:
${secondary.street || ""}
${secondary.city || ""}, ${secondary.state || ""} ${secondary.zip || ""}`
    : ""
}
  `;


  // 💌 HTML version (nicely formatted for email)
  const htmlBody = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #244669; color: #fff; text-align: center; padding: 20px;">
      <img src="${logoUrl}" alt="Mile High DNA Testing" style="max-width: 180px; height: auto;" />
    </div>
    <div style="padding: 20px;">
      <h2 style="color: #244669; margin-top: 0;">Order Confirmation</h2>
      <p>Thank you for your order, <strong>${orderDetails.customerName}</strong>!</p>
      <p>Below are your order details:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr><td><strong>Phone</strong></td><td>${orderDetails.phoneNumber || "N/A"}</td></tr>
        <tr><td><strong>Order #</strong></td><td>${orderDetails.orderNumber || "N/A"}</td></tr>
        <tr><td><strong>Product</strong></td><td>${orderDetails.productName}</td></tr>
        <tr><td><strong>Price</strong></td><td>$${orderDetails.price}</td></tr>
        <tr><td><strong>Shipping Fee</strong></td><td>$${orderDetails.shippingFee}</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>$${orderDetails.total}</strong></td></tr>
        <tr><td><strong>Type</strong></td><td>${orderDetails.orderType}</td></tr>
        <tr><td><strong>Shipping Method</strong></td><td>${orderDetails.shippingMethod}</td></tr>
        <tr><td><strong>Locations</strong></td><td>${orderDetails.locations}</td></tr>
      </table>

      <h3 style="margin-top: 20px; color: #244669;">Primary Shipping Address</h3>

      <p>
        ${primary.street || ""}<br/>
        ${primary.city || ""}, ${primary.state || primary.region || ""} 
        ${primary.zip || primary.postalCode || ""}
      </p>

      ${
        orderDetails.secondaryAddress
          ? `
            <h3 style="margin-top: 20px; color: #244669;">Secondary Shipping Address</h3>
            <p>
              ${secondary.street || ""}<br/>
              ${secondary.city || ""}, ${secondary.state || ""} ${secondary.zip || ""}
            </p>
          `
          : ""
      }

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
        html: htmlBody,
        "h:Reply-To": "info@milehighdnatesting.com",
      }),
      {
        auth: { username: "api", password: mailgunApiKey },
      }
    );

    console.log("✅ Mailgun email sent:", response.data);
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("❌ Mailgun error:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Failed to send Mailgun email" });
  }
};
