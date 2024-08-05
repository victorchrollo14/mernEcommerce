import User from "../models/userModel.js";
import validator from "validator";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      return res.status(400).json({ error: "invalid email" });
    }

    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(400).json({
        error: "user not registered or Incorrect email",
      });

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "incorrect password, try again" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "30d",
    });

    res.status(200).json({ message: "logged in", token: token });
  } catch (err) {
    res.status(501).json({ error: err });
  }
};

const register = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      res.status(400).json({ error: `${email} is invalid email` });
      return;
    }

    const user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
      res
        .status(409)
        .json({ error: `${email} already registered, you can login` });
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
      return res.status(400).json({
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
    res.status(500).json({ error: err });
  }
};

const getMe = async (req, res) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id);
    res
      .status(200)
      .json({ _id: user._id, email: user.email, fullname: user.fullname, avatar: user.profile.avatar.url,
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export { register, login, getMe };
