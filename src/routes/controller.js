const autoBind = require("auto-bind");
const { validationResult } = require("express-validator");

module.exports = class {
  constructor() {
    autoBind(this);
  }

  validationBody(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty) {
      const errors = result.array();
      const messages = [];
      errors.forEach((err) => messages.push(err.msg));
      res.status(400).json({
        message: "validation error!",
        data: messages,
      });
      return false;
    }
    return true;
  }
  validate(req, res, next) {
    if (!validationBody(req, res)) return;
    next();
  }
};
