import sgMail from "@sendgrid/mail";
import { buildCustomerEmail, buildAdminEmail } from "./emailTemplates.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send order confirmation emails to customer and admin
 */
export async function sendOrderConfirmation({ toCustomer, toAdmin, from, subject, orderDetails }) {
  try {
    // Customer email
    const customerMsg = {
      to: toCustomer,
      from,
      subject,
      ...buildCustomerEmail(orderDetails),
    };

    // Admin email
    const adminMsg = {
      to: toAdmin,
      from,
      subject: `New Order Received - ${orderDetails.orderId}`,
      ...buildAdminEmail(orderDetails),
    };

    await sgMail.send(customerMsg);
    await sgMail.send(adminMsg);

    return { success: true };
  } catch (err) {
    console.error("SendGrid Error:", err);
    throw new Error("Failed to send order confirmation emails");
  }
}
