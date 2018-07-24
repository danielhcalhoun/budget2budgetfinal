import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../../actions";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

const RegisterSuccess = ({
  onCancel,
  formValues,
  registerUser,
  testUser,
  history
}) => {
  console.log(formValues);
  registerUser(formValues);
  return <div>Success!</div>;
};

function mapStateToProps(state) {
  return { formValues: state.form.RegisterForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(RegisterSuccess));
