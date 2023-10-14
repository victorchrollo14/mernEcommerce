import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  addItem,
  removeItem,
  getCart,
  updateItem,
} from "../controller/cartController.js";

const cartRouter = Router();

cartRouter.get("/getCart/:userID", verifyToken, getCart);
cartRouter.post("/addItem", verifyToken, addItem);
cartRouter.post("/removeItem", verifyToken, removeItem);
cartRouter.put("/updateItem", verifyToken, updateItem);

export { cartRouter };
