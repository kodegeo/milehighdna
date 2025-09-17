// server/src/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { paymentsRouter } from "./routes/payments.js";
import { webhookRouter } from "./routes/webhook.js";

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();

require("dotenv").config();

const sendConfirmationRoute = require('./src/routes/sendConfirmationRoute');

const app = express();
const port = process.env.PORT || 8080;

// ✅ Validate required environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY is missing from environment variables');
  process.exit(1);
}

if (!process.env.FRONTEND_URL) {
  console.error('❌ FRONTEND_URL is missing from environment variables');
  process.exit(1);
}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
app.use("/api/payments", paymentsRouter);

// ⚠️ Stripe webhook needs RAW body – mount FIRST
app.use("/api/payments", webhookRouter);

// Parse JSON bodies
app.use(express.json());

// Mount the confirmation email endpoint
app.use("/api/send-confirmation-email", sendConfirmationRoute);


// Optional health check endpoint
app.get("/", (req, res) => res.json({ status: "Server is online" }));

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error in Express:", err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Health check
app.get('/', (req, res) => {
  res.send('Mile High DNA Backend is running!');
});

// ✅ Stripe Checkout route with enhanced validation
app.post('/create-checkout-session', async (req, res) => {
  const { priceId } = req.body;

  // ✅ Validate input
  if (!priceId) {
    return res.status(400).json({ error: 'priceId is required' });
  }

  console.log('🔐 Stripe key prefix:', process.env.STRIPE_SECRET_KEY?.slice(0, 8));
  console.log('📦 Price ID sent:', priceId);
  console.log('🌐 Frontend URL:', process.env.FRONTEND_URL);

  try {
    // ✅ Verify price exists before creating session
    const price = await stripe.prices.retrieve(priceId);
    console.log('✅ Price found:', price.id, 'Type:', price.type, 'Active:', price.active);

    // ✅ Validate price type matches mode
    if (price.type === 'recurring') {
      return res.status(400).json({ 
        error: 'Recurring prices require mode: "subscription". Use mode: "payment" for one-time payments.' 
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    console.log('✅ Checkout session created:', session.id);
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error.message, error.stack);
    
    // ✅ Provide specific error messages
    if (error.code === 'resource_missing') {
      res.status(400).json({ 
        error: `Price ID '${priceId}' not found. Please check if the price exists and is active.` 
      });
    } else if (error.code === 'parameter_invalid_string') {
      res.status(400).json({ 
        error: 'Invalid price ID format. Price IDs should start with "price_".' 
      });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
  console.log('📦 Environment Variables:');
  console.log(`   - STRIPE_SECRET_KEY: ${process.env.STRIPE_SECRET_KEY ? '✅ Set' : '❌ Missing'}`);
  console.log(`   - FRONTEND_URL: ${process.env.FRONTEND_URL ? '✅ Set' : '❌ Missing'}`);
  console.log(`   - SENDGRID_API_KEY: ${process.env.SENDGRID_API_KEY ? '✅ Set' : '❌ Missing'}`);
});
