const controller = require("./../controller");

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
    const { email, name, password } = req.body;
    user = new this.User({
      email,
      name,
      password,
    });
  }

  async login(req, res) {
    return res.send("login");
  }
})();
