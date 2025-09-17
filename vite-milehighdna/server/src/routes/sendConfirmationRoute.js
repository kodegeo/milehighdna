// server/src/routes/sendConfirmationRoute.js
import express from "express";
import { handleSendConfirmation } from "../controllers/sendConfirmationController.js";

export const sendConfirmationRoute = express.Router();

sendConfirmationRoute.post("/", handleSendConfirmation);
