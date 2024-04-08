import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";
import { MONGODB_URI } from "../../config.js";

import Product from "../models/productModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const insertProducts = async () => {
  try {
    let products = [];
    const products_file = path.join(__dirname, "converted_product.json");
    const data = await fs.readFile(products_file, { encoding: "utf8" });
    products = JSON.parse(data);

    products.map(async (product) => {
      delete product._id;
      await Product.create(product);
    });

    console.log("successfully added products to product collection");
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blackmarket");
    console.log("connected to mongodb");

    // inserting data into db.
    insertProducts();
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

connect();
