exports.buildCustomerEmail = (orderDetails) => `
  <p>Hi ${orderDetails.customerName},</p>
  <p>Thanks for your order (${orderDetails.orderNumber}). Your ${
    orderDetails.orderType === "domestic" ? "domestic order" : "international shipment"
  } is confirmed.</p>
  <p>You'll get tracking and next steps via email shortly.</p>
  <p>Best regards,<br>Mile High DNA Testing</p>
`;

exports.buildAdminEmail = (orderDetails) => `
  <p>New DNA kit order received:</p>
  <pre>${JSON.stringify(orderDetails, null, 2)}</pre>
`;
