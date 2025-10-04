// server/src/utils/sendConfirmation.js
import formData from "form-data";
import Mailgun from "mailgun.js";
import { buildCustomerEmail, buildAdminEmail } from "./emailTemplates.js";

export async function sendOrderConfirmation({
  toCustomer,
  toAdmin,
  from,
  subject,
  orderDetails,
}) {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const domain = process.env.MAILGUN_DOMAIN;
  if (!domain) throw new Error("MAILGUN_DOMAIN not set");

  // build HTML emails
  const customerHtml = buildCustomerEmail(orderDetails);
  const adminHtml = buildAdminEmail(orderDetails);

  // send to customer
  await client.messages.create(domain, {
    from,
    to: toCustomer,
    subject,
    html: customerHtml,
  });

  // send to admin
  await client.messages.create(domain, {
    from,
    to: toAdmin,
    subject: `New Order: ${orderDetails.productName}`,
    html: adminHtml,
  });

  console.log("✅ Mailgun confirmation emails sent");
}
