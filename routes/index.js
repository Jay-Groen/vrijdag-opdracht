import express from 'express';
import { getWords } from '../controllers/vrijdagController.js';
import { setWord } from '../controllers/vrijdagController.js';
import bodyParser from 'body-parser'
const router = express.Router();
const jsonParser = bodyParser.json()

// routes
router.get('/', (req, res, next) => {
  res.json('erdtfyguhi');
});

router.get('/vrijdag' ,getWords)

router.post('/create', jsonParser, setWord)

export default router;
