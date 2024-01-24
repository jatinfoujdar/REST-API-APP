import express from "express";
import { loginUser, signupUser } from "../Controllers/userControllers.js";

const router = express.Router();

router.post("/signup",signupUser);
router.post("/login",loginUser);

export default router;