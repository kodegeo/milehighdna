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

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const { google } = require('googleapis');

// Setup Google OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

oAuth2Client.setCredentials({
  access_token: process.env.GOOGLE_ACCESS_TOKEN,
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

// Route: GET /api/available-times?date=YYYY-MM-DD
app.get('/api/available-times', async (req, res) => {
  const date = req.query.date;
  if (!date) return res.status(400).json({ error: 'Date is required' });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  const timeMin = new Date(`${date}T08:00:00-06:00`).toISOString();
  const timeMax = new Date(`${date}T18:00:00-06:00`).toISOString();

  try {
    const result = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        timeZone: 'America/Denver',
        items: [{ id: process.env.GOOGLE_CALENDAR_ID }]
      }
    });

    const busy = result.data.calendars[process.env.GOOGLE_CALENDAR_ID].busy;

    // Build 30-minute slots
    const slots = [];
    const start = new Date(`${date}T08:00:00-06:00`);
    for (let i = 0; i < 20; i++) {
      const slot = new Date(start.getTime() + i * 30 * 60000);
      const slotEnd = new Date(slot.getTime() + 30 * 60000);

      const isBusy = busy.some(
        (b) => new Date(b.start) < slotEnd && new Date(b.end) > slot
      );

      if (!isBusy) {
        slots.push(slot.toISOString().slice(11, 16)); // "HH:MM"
      }
    }

    res.json(slots);
  } catch (err) {
    console.error('Google Calendar Error:', err);
    res.status(500).json({ error: 'Failed to fetch calendar availability' });
  }
});

