const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("app:main");

module.exports = function () {
  mongoose
    .connect(config.get("db.address"))
    .then(() => debug("Connected to the mongoDB"))
    .catch((err) => debug("Could not connect to the mongoDB!"));
};
