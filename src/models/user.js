const mongoose = require("mongoose");

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  })
);

module.exports = User;
