import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/productModel.js";

const connect = async () => {
  try {
    dotenv.config();
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

connect();
