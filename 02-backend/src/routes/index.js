const { Router } = require("express");
const ReceipeRouter = require("./receipes");
const UserRouter = require("./users");
const AppRouter = Router();

AppRouter.use("/receipes", ReceipeRouter);
AppRouter.use("/users", UserRouter);

module.exports = AppRouter;
