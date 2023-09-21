import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  console.log("login");
};

const register = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      res.status(400).json({ error: `${email} is invalid` });
      return;
    }

    const user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
      res
        .status(409)
        .json({ message: `${user} already registered, you can login` });
      return;
    }

    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minLowercase: 1,
      minUppercase: 1,
    });

    if (!isStrongPassword) {
      res.status(400).json({
        error: `Weak Password, try a password with atleast 8 characters which includes atleast one number, symbol, Uppercase and lowercase letter`,
      });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname: fullname,
      email: email,
      password: passwordHash,
      roles: "user",
    });
    await newUser.save();

    res
      .status(200)
      .json({ message: "registered successfully you can login now" });
  } catch (err) {
    res.status(501).json({ error: err });
  }
};

export { register, login };
