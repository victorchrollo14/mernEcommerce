import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
      default: "",
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
        url: String,
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

UserSchema.pre("save", function (next) {
  if (this.email === null) {
    this.email = ""; // Set the email field to an empty string
  }
  next();
});

const User = model("User", UserSchema);

export default User;
