import express from 'express';
import { logHistory } from '../controllers/history';
import checkAuth from '../middlewares/auth';

const router = express.Router();

router.post('/create', checkAuth, logHistory);

export default router;
