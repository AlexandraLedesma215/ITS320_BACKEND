import { createQuote, getQuotes } from '../controller/quoteController.js';
import e from 'express';

export const router = e.Router();

router.post('/create', createQuote);
router.get('/get', getQuotes)

