import express from 'express';
import { getARandomConcept } from '../controllers/concept';

const router = express.Router();

router.get('/random', getARandomConcept);

export default router;
