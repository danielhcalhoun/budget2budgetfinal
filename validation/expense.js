const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExpenseInput(data) {
  let errors = {};

  data.cost = !isEmpty(data.cost) ? data.cost : "";
  data.date = !isEmpty(data.date) ? data.date : "";
  data.recurring = !isEmpty(data.recurring) ? data.recurring : false;

  if (Validator.isEmpty(data.cost)) {
    errors.cost = "Cost is required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.company = "Date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
