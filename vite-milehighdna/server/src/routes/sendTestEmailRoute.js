import express from "express";
import formData from "form-data";
import Mailgun from "mailgun.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });

    const domain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.MAILGUN_FROM || `info@${domain}`;

    const message = {
      from: fromEmail,
      to,
      subject,
      text,
    };

    const response = await client.messages.create(domain, message);
    return res.json({ success: true, id: response.id });
  } catch (err) {
    console.error("Mailgun error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
