import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { addPaycheck } from "../../../actions";

const PaycheckSuccess = ({ onCancel, formValues, addPaycheck, history }) => {
  addPaycheck(formValues, history);
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
