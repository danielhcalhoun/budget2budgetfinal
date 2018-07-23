import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../../actions";

const RegisterSuccess = ({ onCancel, formValues, registerUser, history }) => {
  registerUser(formValues);

  return <div>Success!</div>;
};

function mapStateToProps(state) {
  return { formValues: state.form.RegisterForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(RegisterSuccess));
