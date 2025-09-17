const express = require("express");
const router = express.Router();
const { handleSendConfirmation } = require("../controllers/sendConfirmationController");

router.post("/", handleSendConfirmation);

module.exports = router;
