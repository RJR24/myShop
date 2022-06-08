const controller = require("./../controller");
const _ = require("lodash");

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
  }

  async login(req, res) {
    return res.send("login");
  }
})();
