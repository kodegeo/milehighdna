import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sendOrderEmailRouter from './routes/sendOrderEmail.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', sendOrderEmailRouter);

// Health check route for Render
app.get('/', (req, res) => {
  res.send('Mile High DNA backend is running ✅');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
