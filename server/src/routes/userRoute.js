import { Router } from "express";
import { getMe, login, register } from "../controller/userController.js";
import { verifyToken } from "../middleware/auth.js";
import { githubRegister } from "../controller/oauthController.js";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/register/github", githubRegister);
userRouter.get("/me", verifyToken, getMe);

export { userRouter };
