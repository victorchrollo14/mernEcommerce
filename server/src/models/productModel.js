import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, require: true },
    subtitle: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
    category: { type: String, require: true },
    inventorycount: { type: Number, require: true },
    sizeOptions: [String],
    images: [String],
    ratings: {
      stars: Number,
      reviewCount: Number,
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

export default Product;
