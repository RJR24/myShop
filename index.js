const express = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(config.get("db.address"))
  .then(() => console.log("Connected to the mongoDB"))
  .catch((err) => console.log("Could not connect to the mongoDB!"));

const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening on port ${port}`));
