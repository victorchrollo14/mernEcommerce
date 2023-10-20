import { Schema, model } from "mongoose";

const CartSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    items: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        quantity: { type: Number, default: 1, required: true },
        size: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Cart = model("Cart", CartSchema);

export default Cart;
