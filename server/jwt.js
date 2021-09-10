const jwt = require("jsonwebtoken");
const { UserModel } = require("./models/User");

const jwtCookieKey = "user-jwt";

const signToken = (user) => {
  const { email } = user;
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "15m" });
};

const addTokenToRes = (res, user) =>
  res.cookie(jwtCookieKey, signToken(user), {
    httpOnly: true,
  });

const authorize = async (req, res, next) => {
  try {
    const verified = await verifyTokenFromCookie(req);
    if (!verified) return res.status(401).json({ message: "Unauthorized" });
    // update token
    addTokenToRes(res, verified);
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Unauthorized" });
  }
};

const verifyTokenFromCookie = (req) => {
  return jwt.verify(req.cookies[jwtCookieKey], process.env.JWT_SECRET);
};

module.exports = {
  signToken,
  verifyTokenFromCookie,
  jwtCookieKey,
  addTokenToRes,
  authorize,
};
