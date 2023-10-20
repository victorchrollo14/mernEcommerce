import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) return res.status(401).send("access denied");

    const verifiedUser = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = verifiedUser;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

export { verifyToken };
