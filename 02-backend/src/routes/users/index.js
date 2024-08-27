const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");
const AppData = require("../../temp/AppData");

const UserRouter = Router();

UserRouter.get("/all", (req, res) => {
  res.status(StatusCodes.OK).json([AppData.ExampleUserData]);
});

module.exports = UserRouter;
