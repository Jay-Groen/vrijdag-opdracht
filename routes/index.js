import express from 'express';
import { getWords } from '../controllers/vrijdagController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/vrijdag' ,getWords)

export default router;
