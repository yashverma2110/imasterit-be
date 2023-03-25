import express from "express";
import { getARandomConcept, createConcept } from '../controllers/concept';

const router = express.Router();

router.get('/random', getARandomConcept);
router.post('/create', createConcept);

export default router;
