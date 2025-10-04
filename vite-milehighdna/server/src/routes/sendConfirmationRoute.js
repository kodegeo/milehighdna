import express from "express";
import axios from "axios";
import { handleSendConfirmation } from "../controllers/sendConfirmationController.js";


const router = express.Router();

router.post("/", handleSendConfirmation);

export default router;
