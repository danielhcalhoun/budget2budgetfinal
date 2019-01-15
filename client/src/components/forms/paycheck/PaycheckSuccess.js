import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { addPaycheck } from "../../../actions";
import moment from "moment";

const PaycheckSuccess = ({ onCancel, formValues, addPaycheck, history }) => {
  console.log(formValues.date);
  addPaycheck(
    {
      ...formValues,
      date: moment(formValues.date.toString(), "MM-DD-YYYY").toISOString()
    },
    history
  );
  return (
    <React.Fragment>
      <Redirect to="/thank-you" />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.PaycheckForm.values };
}

export default connect(mapStateToProps, { addPaycheck })(
  withRouter(PaycheckSuccess)
);
