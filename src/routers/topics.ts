import express from 'express';
import { createTopic, getAllTopics } from '../controllers/topics';

const router = express.Router();

router.get('/all', getAllTopics);
router.post('/create', createTopic);

export default router;
