require("express-async-errors");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("app:main");
const winston = require("winston");

const router = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(config.get("db.address"))
  .then(() => debug("Connected to the mongoDB"))
  .catch((err) => debug("Could not connect to the mongoDB!"));

process.on("uncaughtException", (ex) => {
  console.log("uncaught exception!");
  winston.error(ex.message, ex);
  process.exit(1);
});
process.on("unhandledRejection", (ex) => {
  console.log("unhandeled Rejection!");
  winston.error(ex.message, ex);
  process.exit(1);
});

winston.add(new winston.transports.File({ filename: "errorsfile.log" }));

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, debug(`listening on port ${port}`));
