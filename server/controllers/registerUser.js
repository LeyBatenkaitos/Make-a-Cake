const transformUserForClient = require("../helper/transformUserForClient");
const { signToken, jwtCookieKey, addTokenToRes } = require("../jwt");
const { UserModel } = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    const user = new UserModel({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    await user.save();

    addTokenToRes(res, user);

    res.json(transformUserForClient(user));
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = registerUser;
