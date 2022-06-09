const controller = require("../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  async dashboard(req, res) {
    res.send("admin dashboard");
  }
})();
