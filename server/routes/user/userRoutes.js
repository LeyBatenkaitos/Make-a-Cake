const { Router } = require("express");
const userRouter = Router();

const userController = require("../../controllers/user");
const { authorize } = require("../../jwt");

userRouter.get("/test", (req, res) => res.json({ message: "OK" }));
userRouter.get("/user/:id", authorize, userController.getUserById);
userRouter.post("/user-email", authorize, userController.getUserByEmail);
userRouter.get("/sensitive-info", authorize, (req, res) =>
  res.json({ message: "Secret info" })
);

module.exports = userRouter;
