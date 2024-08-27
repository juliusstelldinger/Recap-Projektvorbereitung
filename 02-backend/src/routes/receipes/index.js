const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");
const AppData = require("../../temp/AppData");

const ReceipeRouter = Router();

ReceipeRouter.get("/all", (req, res) => {
  res.status(StatusCodes.OK).json(AppData.AllExampleReceipes);
});

module.exports = ReceipeRouter;
