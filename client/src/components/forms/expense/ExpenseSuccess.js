import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { addPaycheck } from "../../../actions/paycheckActions";
import moment from "moment";

const ExpenseSuccess = ({ onCancel, formValues, addPaycheck, history }) => {
  addPaycheck(
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
  return { formValues: state.form.PaycheckForm.values };
}

export default connect(mapStateToProps, { addPaycheck })(
  withRouter(ExpenseSuccess)
);
