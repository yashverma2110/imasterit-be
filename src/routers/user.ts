import express from "express";
import { getUser, logIn, signUp } from "../controllers/user";

const router = express.Router();

router.get("/get/:telegramId", getUser);
router.post("/signup", signUp);
router.post("/login", logIn);

export default router;
