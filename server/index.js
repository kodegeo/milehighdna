const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Mile High DNA Backend is running!');
});

// Add your Supabase routes, upload handlers, etc. here

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
