const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Mile High DNA Backend is running!');
});

// ✅ Stripe Checkout route
app.post('/create-checkout-session', async (req, res) => {
  const { priceId } = req.body;

  console.log('🔐 Stripe key prefix:', process.env.STRIPE_SECRET_KEY?.slice(0, 8));
  console.log('📦 Price ID sent:', priceId);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error.message, error.stack);  // ✅ debug Stripe issue
    res.status(500).json({ error: error.message });              // ✅ send real error back
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

