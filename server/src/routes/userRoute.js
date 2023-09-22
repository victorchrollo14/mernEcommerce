import { Router } from "express";
import { getMe, login, register } from "../controller/userController.js";
import { verifyToken } from "../middleware/auth.js";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/me", verifyToken, getMe);

export { userRouter };
