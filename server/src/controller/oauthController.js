import User from "../models/userModel.js";
import "dotenv/config.js";
import Jwt from "jsonwebtoken";

const getGithubData = async (access_token) => {
  const response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = await response.json();
  return data;
};

const getAccessToken = async (req, res) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const code = req.query.code;

  const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;
  const response = await fetch(
    `https://github.com/login/oauth/access_token${params}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
  const access_token = data.access_token;
  if (!access_token) {
    throw new Error("Error occured in getting access token");
  }
  return access_token;
};

const githubAuth = async (req, res) => {
  const code = req.query.code;

  try {
    if (code === undefined)
      return res
        .status(400)
        .json({ error: "error occured during github authorization" });

    const access_token = await getAccessToken(req, res);
    const userData = await getGithubData(access_token);

    console.log(
      userData.name,
      userData.email,
      userData.avatar_url,
      userData.login
    );

    const query =
      userData.email === null
        ? { username: userData.login }
        : {
            $or: [{ username: userData.login }, { email: userData.email }],
          };
    console.log(query);
    const user = await User.findOne(query);

    if (user) {
      const token = Jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: "30d",
      });

      return res
        .status(200)
        .json({ message: "successfully logged In", token: token });
    }

    const newUser = new User({
      fullname: userData.name,
      username: userData.login,
      email: userData.email,
      roles: "user",
      profile: {
        avatar: { url: userData.avatar_url },
      },
    });

    await newUser.save();

    const token = Jwt.sign({ id: newUser._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "30d",
    });

    res
      .status(200)
      .json({ message: "successfully registered and loggen In", token: token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { githubAuth };
