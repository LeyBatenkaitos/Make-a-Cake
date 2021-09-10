const transformUserForClient = require("../helper/transformUserForClient");
const { jwtCookieKey, verifyTokenFromCookie } = require("../jwt");
const { UserModel } = require("../models/User");

module.exports = {
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id).exec();
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ firstName: user.firstName });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  },

  getUserByEmail: async (req, res) => {
    try {
      const { email: emailFromCookie } = await verifyTokenFromCookie(req);
      const { email: emailFromUser } = req.body;

      if (emailFromCookie !== emailFromUser)
        return res.status(401).json({ message: "Unauthorized" });

      const user = await UserModel.findOne({ email: emailFromUser }).exec();
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(transformUserForClient(user));
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  },
};
