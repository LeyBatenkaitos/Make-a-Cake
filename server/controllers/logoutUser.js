const { jwtCookieKey } = require("../jwt");

const logout = async (req, res) => {
  try {
    res.clearCookie(jwtCookieKey);
    res.json({ message: "Ok" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = logout;
