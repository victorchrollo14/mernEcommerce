import { Router } from "express";
import { getMe, login, register } from "../controller/userController.js";
import { verifyToken } from "../middleware/auth.js";
import { githubAuth } from "../controller/oauthController.js";
import { googleAuth } from "../controller/googleController.js";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/register/google-auth", googleAuth);
userRouter.get("/register/github", githubAuth);
userRouter.get("/me", verifyToken, getMe);

export { userRouter };
