const { addTokenToRes } = require("../jwt");
const { UserModel } = require("../models/User");
const bcrypt = require("bcryptjs");
const transformUserForClient = require("../helper/transformUserForClient");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).exec();

    if (!user) throw new Error("Could not login");

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log({ passwordMatch });

    if (!passwordMatch) throw new Error("Could not login");

    addTokenToRes(res, user);

    res.json(transformUserForClient(user));
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = login;
