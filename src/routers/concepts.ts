import express from "express";
import { getARandomConcept, createConcept } from '../controllers/concept';

const router = express.Router();

router.get('/random/:topicId', getARandomConcept);
router.post('/create', createConcept);

export default router;
