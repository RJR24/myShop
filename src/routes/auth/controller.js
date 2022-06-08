const controller = require("./../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  async register(req, res) { 
    let user = await this.User.findOne({ email: req.body.email });
    if (user) {
      return this.response({
        res,
        message: "user with the given email is already registered!",
        code: 400,
      });
    }
    user = new this.User(_.pick(req.body, ["email", "name", "password"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    this.response({
      res,
      message: "you have successfully registered",
      data: _.pick(user, ["_id", "name", "email"]),
    });
  }

  async login(req, res) {
    return res.send("login");
  }
})();
