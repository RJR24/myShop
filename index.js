require("express-async-errors");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("app:main");

const router = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(config.get("db.address"))
  .then(() => debug("Connected to the mongoDB"))
  .catch((err) => debug("Could not connect to the mongoDB!"));

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, debug(`listening on port ${port}`));
