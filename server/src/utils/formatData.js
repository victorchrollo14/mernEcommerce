import jwt from "jsonwebtoken";

const formatData = (user) => {
  // Here we are creating the access token
  const access_token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "30d",
  });
  // Here we are returning the user data with access token to be sent on the client side at the time of SignIn
  return {
    access_token,
    email: user.email,
    fullname: user.username,
  };
};

export default formatData;
