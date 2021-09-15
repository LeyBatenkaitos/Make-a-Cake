const { Router } = require("express");

const api = Router();

api.use("/pedido", require("./pedido/index"));
api.use("/", (req, res) => res.json({ message: "end-to-end funciona" }));

module.exports = api;
