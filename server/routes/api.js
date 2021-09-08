const { Router } = require("express");

const router = Router();

router.use("/", (req, res) => res.json({ message: "end-to-end funciona" }));

router.use("/producto", require("./productos/index"));

module.exports = router;
