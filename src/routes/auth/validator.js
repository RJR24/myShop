const expressValidator = require("express-validator");
const check = expressValidator.check();

module.exports = new class {
  registerValidator() {
    return [
      check("email")
        .isEmail()
        .withMessage("please enter a valid email address!"),
      check("name").not().isEmpty().withMessage("name filed can not be empty!"),
      check("password")
        .not()
        .isEmpty()
        .withMessage("password filed can not be empty!"),
    ];
  }

  loginValidator() {
    return [
      check("email")
        .isEmail()
        .withMessage("please enter a valid email address!"),
      check("password")
        .not()
        .isEmpty()
        .withMessage("password filed can not be empty!"),
    ];
  }
};
