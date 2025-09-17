// server/src/controllers/sendConfirmationController.js
import sgMail from "@sendgrid/mail";
import { buildCustomerEmail, buildAdminEmail } from "../utils/emailTemplates.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const handleSendConfirmation = async (req, res) => {
  const { toCustomer, toAdmin, from, subject, orderDetails } = req.body;

  const customerMsg = {
    to: toCustomer,
    from,
    subject,
    html: buildCustomerEmail(orderDetails),
    text: `Hi ${orderDetails.customerName}, your order ${orderDetails.orderNumber} is confirmed.`,
  };

  const adminMsg = {
    to: toAdmin,
    from,
    subject: `New Order: ${orderDetails.orderNumber}`,
    text: `New order received:\n\n${JSON.stringify(orderDetails, null, 2)}`,
    html: buildAdminEmail(orderDetails),
  };

  try {
    await sgMail.send(customerMsg);
    await sgMail.send(adminMsg);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("SendGrid Error:", err.response?.body || err);
    res.status(500).json({ error: "Failed to send confirmation emails" });
  }
};
