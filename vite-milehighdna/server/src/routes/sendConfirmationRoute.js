// server/src/routes/sendConfirmationRoute.js
import express from "express";
import { handleSendConfirmation } from "../controllers/sendConfirmationController.js";

const router = express.Router();

// POST /api/send-confirmation-email
router.post("/", handleSendConfirmation);

export default router;