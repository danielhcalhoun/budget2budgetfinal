const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.paychecks = !isEmpty(data.paychecks) ? data.paychecks : "";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
