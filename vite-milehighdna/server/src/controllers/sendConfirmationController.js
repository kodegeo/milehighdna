import { sendOrderConfirmation } from "../utils/sendConfirmation.js";

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
  try {
    await sendOrderConfirmation(req.body);
    return res
      .status(200)
      .json({ success: true, message: "Confirmation emails sent" });
  } catch (err) {
    console.error("SendConfirmationController error:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to send confirmation emails",
    });
  }
};
