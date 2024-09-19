const express = require("express");
const app = express();

const { PORT } = 5050;

app.get("/", function (req, res) {
  res.send("Hello World!!?");
});

app.get("/test", function (req, res) {
  res.send("Hello Test!!?");
});

app.listen(PORT);
