// src/routes/send-confirmation-email.js
const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email template function
const buildCustomerEmail = (orderDetails) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Mile High DNA Testing</h1>
        <h2 style="margin: 10px 0 0 0;">Order Confirmation</h2>
      </div>
      
      <div style="padding: 20px; background-color: #f8fafc;">
        <h3 style="color: #1e40af;">Order Details</h3>
        <p><strong>Order Number:</strong> ${orderDetails.orderNumber}</p>
        <p><strong>Product:</strong> ${orderDetails.productName}</p>
        <p><strong>Price:</strong> $${orderDetails.price}</p>
        <p><strong>Order Type:</strong> ${orderDetails.orderType === 'domestic' ? 'Domestic Shipping' : 'International Shipping'}</p>
        
        <h3 style="color: #1e40af; margin-top: 20px;">What's Next?</h3>
        ${orderDetails.orderType === 'domestic' ? `
          <ul>
            <li>You will receive a confirmation email with tracking information</li>
            <li>Your test kit will be shipped within 1-2 business days</li>
            <li>Follow the instructions included in your kit</li>
            <li>Return your samples using the prepaid envelope</li>
            <li>Results will be available in 3-5 business days</li>
          </ul>
        ` : `
          <ul>
            <li>You will receive a confirmation email with shipping details</li>
            <li>Your test kit will be shipped internationally within 2-3 business days</li>
            <li>Follow the instructions included in your kit</li>
            <li>Return your samples using the prepaid international envelope</li>
            <li>Results will be available in 5-7 business days</li>
          </ul>
        `}
        
        <p style="margin-top: 20px;">
          If you have any questions, please contact us at (720) 900-9342 or info@milehighdnatesting.com
        </p>
      </div>
      
      <div style="background-color: #1f2937; color: white; padding: 15px; text-align: center;">
        <p style="margin: 0;">© 2024 Mile High DNA Testing. All rights reserved.</p>
      </div>
    </div>
  `;
};

// Route handler
router.post('/send-confirmation-email', async (req, res) => {
  const { toCustomer, toAdmin, from, subject, orderDetails } = req.body;
  
  const customerMsg = {
    to: toCustomer,
    from,
    subject,
    text: `Hi ${orderDetails.customerName}, your order ${orderDetails.orderNumber} is confirmed.`,
    html: buildCustomerEmail(orderDetails),
  };

  const adminMsg = {
    to: toAdmin,
    from,
    subject: `New Order: ${orderDetails.orderNumber}`,
    text: `New order received:\n\n${JSON.stringify(orderDetails, null, 2)}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Order Received</h2>
        <h3>Order Details:</h3>
        <p><strong>Order Number:</strong> ${orderDetails.orderNumber}</p>
        <p><strong>Customer:</strong> ${orderDetails.customerName}</p>
        <p><strong>Email:</strong> ${orderDetails.email}</p>
        <p><strong>Product:</strong> ${orderDetails.productName}</p>
        <p><strong>Price:</strong> $${orderDetails.price}</p>
        <p><strong>Order Type:</strong> ${orderDetails.orderType}</p>
      </div>
    `
  };

  try {
    await sgMail.send(customerMsg);
    await sgMail.send(adminMsg);
    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (err) {
    console.error("SendGrid Error:", err.response?.body || err);
    res.status(500).json({ error: "Failed to send emails", details: err.message });
  }
});

module.exports = router;
