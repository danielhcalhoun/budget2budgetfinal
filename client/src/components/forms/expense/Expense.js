import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ExpenseForm from "./ExpenseForm";
class Expense extends Component {
  render() {
    return <ExpenseForm />;
  }
}

export default reduxForm({
  form: "ExpenseForm"
})(Expense);
