import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addPaycheck } from "../../../actions";
import { Message } from "semantic-ui-react";

const PaycheckSuccess = ({ onCancel, formValues, addPaycheck, history }) => {
  addPaycheck(formValues, history);
  return <Message success header="Success!" />;
};

function mapStateToProps(state) {
  return { formValues: state.form.PaycheckForm.values };
}

export default connect(mapStateToProps, { addPaycheck })(
  withRouter(PaycheckSuccess)
);
