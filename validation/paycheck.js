const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePaycheckInput(data) {
  let errors = {};

  data.income = !isEmpty(data.income) ? data.income : "";
  data.date = !isEmpty(data.date) ? data.date : "";
  data.recurring = !isEmpty(data.recurring) ? data.recurring : false;

  if (Validator.isEmpty(data.income.toString())) {
    errors.income = "Income is required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = "Date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
