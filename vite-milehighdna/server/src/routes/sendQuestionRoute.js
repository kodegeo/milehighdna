import express from "express";
import formData from "form-data";
import Mailgun from "mailgun.js";

const router = express.Router();

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

router.post("/", async (req, res) => {
  const { name, email, question } = req.body;

  if (!name || !email || !question) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: "Mile High DNA Corner <info@milehighdnatesting.com>",
      to: ["info@milehighdnatesting.com"],
      subject: "New Question from Mile High DNA Corner",
      text: `
A new question was submitted through the DNA Corner form:

Name: ${name}
Email: ${email}

Question:
${question}
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Mailgun send error:", error);
    res.status(500).json({ success: false, message: "Error sending email", error: error.message });
  }
});

export default router;
