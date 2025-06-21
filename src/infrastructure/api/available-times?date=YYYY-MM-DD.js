// routes/availability.js
import express from 'express';
import { google } from 'googleapis';
import { getStoredOAuthClient } from './googleAuth'; // assumes you saved credentials

const router = express.Router();

router.get('/available-times', async (req, res) => {
  const date = req.query.date; // e.g. '2025-06-20'
  const auth = await getStoredOAuthClient(); // load stored tokens

  const calendar = google.calendar({ version: 'v3', auth });

  const timeMin = new Date(`${date}T08:00:00-06:00`).toISOString();
  const timeMax = new Date(`${date}T18:00:00-06:00`).toISOString();

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin,
      timeMax,
      timeZone: 'America/Denver',
      items: [{ id: 'primary' }]
    }
  });

  const busy = response.data.calendars.primary.busy;

  // Build 30-min slots from 8AM to 6PM
  const slots = [];
  const start = new Date(`${date}T08:00:00-06:00`);
  for (let i = 0; i < 20; i++) {
    const slot = new Date(start.getTime() + i * 30 * 60000);
    const slotEnd = new Date(slot.getTime() + 30 * 60000);

    const isBusy = busy.some(
      (b) =>
        new Date(b.start) < slotEnd &&
        new Date(b.end) > slot
    );

    if (!isBusy) {
      slots.push(slot.toISOString().slice(11, 16)); // "HH:MM"
    }
  }

  res.json(slots);
});
