const controller = require("./../controller");

module.exports = new (class extends controller {
  async register(req, res) {
    return res.send("register");
  }

  async login(req, res) {
   return res.send("login");
  }
})();
