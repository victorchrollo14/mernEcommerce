import { Router } from "express";
import { getAllProducts } from "../controller/productController.js";

const productRouter = Router();

productRouter.get("/getData", getAllProducts);

export { productRouter };
