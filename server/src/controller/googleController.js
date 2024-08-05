import { getAuth } from "firebase-admin/auth";
import User from "../models/userModel.js";
import formatData from "../utils/formatData.js";

export const googleAuth = async (req, res) => {
  let { access_token, avatar } = req.body;

  getAuth()
    .verifyIdToken(access_token)
    .then(async (decodedToken) => {
      // Here we are getting the email, name and picture from the decodedToken from firebase
      let { email, name } = decodedToken;
      // Here we are finding the user by email if it is exist or not
      let user = await User.findOne({ email: email })
        .then((u) => {
          return u || null;
        })
        .catch((err) => {
          return res.status(500).json({ "error:": err.message });
        });

      // If user is found
      if (user) {
        // If user is not registered with google -- Checking through the property in User model
        if (!user.google_auth) {
          return res.status(403).json({
            error:
              "Email is already registered with google please signup with password",
          });
        } else {
          return res.status(200).json(formatData(user));
        }
      } else {

        // If user is not found then we will create new user
        // Generating username
        // Creating the user
        user = new User({
          fullname: name,
          email: email,
          profile: {
            avatar: {
              url: avatar,
            }, 
          },
          roles: "user",
          google_auth: true,
        });
        // Saving the user to the database
        await user
          .save()
          .then((u) => {
            user = u;
          })
          .catch((err) => {
            return res.status(403).json({ error: err.message });
          });
        console.log("FormatedData", formatData(user));
        return res.status(200).json(formatData(user));
      }
    })
    .catch((err) => {
      console.log("From: Error in google auth", err.message);
      return res.status(403).json({ error: err.message });
    });
};
