import express from 'express';
import { getUser, logIn, signUp, subscribeToTopic } from '../controllers/user';
import checkAuth from '../middlewares/auth';

const router = express.Router();

router.get('/get/:telegramId', getUser);
router.post('/signup', signUp);
router.post('/login', logIn);

router.post('/subscribe', checkAuth, subscribeToTopic);

export default router;
