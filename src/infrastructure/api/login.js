import express from 'express';
import { getAuthUrl } from './googleAuth.js';

const router = express.Router();

router.get('/login', (req, res) => {
  const url = getAuthUrl();
  res.redirect(url);
});
