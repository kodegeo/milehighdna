import { getClientFromCode } from './googleAuth.js';

router.get('/oauth-callback', async (req, res) => {
  const code = req.query.code;

  try {
    const auth = await getClientFromCode(code);

    // Optionally store tokens in DB or env
    const calendar = google.calendar({ version: 'v3', auth });

    // Test query: list upcoming events
    const result = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 5,
      singleEvents: true,
      orderBy: 'startTime'
    });

    console.log(result.data.items);
    res.send('Google Calendar connected successfully!');
  } catch (err) {
    console.error('OAuth error:', err);
    res.status(500).send('OAuth failed');
  }
});
