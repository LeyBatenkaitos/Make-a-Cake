const { Router } = require("express");

const api = Router();

api.use("/", (req, res) => res.json({ message: "end-to-end funciona" }));

api.use("/producto", require("./productos/index"));

api.use("/userApi", require("./user/userRoutes"));

module.exports = api;
