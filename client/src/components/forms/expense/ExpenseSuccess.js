import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { addExpense } from "../../../actions/expenseActions";
import moment from "moment";

const ExpenseSuccess = ({ onCancel, formValues, addExpense, history }) => {
  addExpense(
    {
      ...formValues,
      date: moment(formValues.date.toString(), "MM-DD-YYYY").toISOString()
    },
    history
  );
  return (
    <React.Fragment>
      <Redirect to="/" />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.ExpenseForm.values };
}

export default connect(mapStateToProps, { addExpense })(
  withRouter(ExpenseSuccess)
);
