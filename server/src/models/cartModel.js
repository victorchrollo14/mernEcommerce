import { Schema, model } from "mongoose";

const CartSchema = new Schema(
  {
    items: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        quantity: { type: Number, default: 1 },
        size: { type: String },
      },
    ],
    userId: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const Cart = model("Cart", CartSchema);

export default Cart;
