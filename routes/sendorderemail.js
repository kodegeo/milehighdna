import express from 'express';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();

router.post('/send-order-email', async (req, res) => {
  const { customerCode, form, order } = req.body;

  const msg = {
    to: 'info@milehighdnatesting.com', // Your operations email
    from: 'info@milehighdnatesting.com', // Verified sender
    subject: `New DNA Test Order - ${customerCode}`,
    text: `
      New order submitted:

      Customer Code: ${customerCode}
      Name: ${form.firstName} ${form.lastName}
      Email: ${form.email}
      Phone: ${form.phone}

      Address:
      ${form.address}
      ${form.city}, ${form.state || ''} ${form.zip || form.postalCode || ''}, ${form.country || 'United States'}

      Order Info:
      Product: Peace of Mind Paternity Test Kit
      Order Source: ${order.order_source}
      Order Status: ${order.order_status}
    `,
  };

  try {
    await sendgrid.send(msg);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.response?.body || error.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
