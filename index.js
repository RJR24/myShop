const express = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
