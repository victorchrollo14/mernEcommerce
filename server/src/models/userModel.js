import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    roles: {
      type: String,
      require: false,
    },
    profile: {
      avatar: {
        data: Buffer,
        contentType: String,
      },
      shippingAddress: {
        address: String,
        street: String,
        city: String,
        state: String,
        country: String,
        zipcode: Number,
      },
    },
    favourites: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
