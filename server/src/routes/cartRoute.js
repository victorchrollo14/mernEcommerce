import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  addItem,
  deleteItem,
  getCart,
  updateItem,
} from "../controller/cartController.js";

const cartRouter = Router();

cartRouter.get("/getCart/:userID", verifyToken, getCart);
cartRouter.post("/addItem", verifyToken, addItem);
cartRouter.patch("/deleteItem/:userID", verifyToken, deleteItem);
cartRouter.patch("/updateItem/:userID", verifyToken, updateItem);

export { cartRouter };
