import { Router } from "express";
import { getMe, login, register } from "../controller/userController.js";
import { verifyToken } from "../middleware/auth.js";
import { githubAuth } from "../controller/oauthController.js";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/register/github", githubAuth);
userRouter.get("/me", verifyToken, getMe);

export { userRouter };
