import User from "../models/userModel.js";
import "dotenv/config.js";

const githubRegister = async (req, res) => {
  const code = req.query.code;

  try {
    console.log(code);
    if (code === undefined)
      return res
        .status(400)
        .json({ error: "error occured during github authorization" });

    const access_token = await getAccessToken(code);
    console.log(access_token)
    const userData = await getGithubData(access_token);

    console.log(
      userData.name,
      userData.email,
      userData.avatar_url,
      userData.login
    );

    const user = await User.findOne({ username: userData.login });

    console.log(user);

    if (user)
      return res
        .status(409)
        .json({ error: "User already registered you can login now" });

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
    res.status(200).json({ message: "successfully registered" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getGithubData = async (access_token) => {
  const response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};

const getAccessToken = async (code) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

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
  const access_token = data.access_token;
  return access_token;
};

export { githubRegister };
