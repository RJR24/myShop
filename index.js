const express = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug");


app.use(express.static("public"));

