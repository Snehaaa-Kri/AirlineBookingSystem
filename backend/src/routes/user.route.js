import express from "express";
import {sendOtp,login,signUp, getUserInfo} from '../controllers/index.js'

const userRouter = express.Router();

userRouter.post("/sendotp", sendOtp);
userRouter.post("/signup", signUp);
userRouter.post("/login", login);

export default userRouter;
