const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.password = !isEmpty(data.password) ? data.password : "";
  data.name = !isEmpty(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
