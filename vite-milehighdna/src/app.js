const express = require("express");
require("dotenv").config();
const sendConfirmationRoute = require("./routes/sendConfirmationRoute");

const app = express();
app.use(express.json());
app.use("/api/send-confirmation-email", sendConfirmationRoute);

module.exports = app;
