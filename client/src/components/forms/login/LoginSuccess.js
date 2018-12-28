import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginUser } from "../../../actions";

const LoginSuccess = ({ onCancel, formValues, loginUser }) => {
  loginUser(formValues);
  return <div>Success!</div>;
};

function mapStateToProps(state) {
  return { formValues: state.form.LoginForm.values };
}

export default connect(mapStateToProps, { loginUser })(
  withRouter(LoginSuccess)
);
