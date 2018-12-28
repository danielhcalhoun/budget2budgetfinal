import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { registerUser } from "../../../actions";

const RegisterSuccess = ({ onCancel, formValues, registerUser }) => {
  registerUser(formValues);
  return <div>Success!</div>;
};

function mapStateToProps(state) {
  return { formValues: state.form.RegisterForm.values };
}

export default connect(mapStateToProps, { registerUser })(
  withRouter(RegisterSuccess)
);
