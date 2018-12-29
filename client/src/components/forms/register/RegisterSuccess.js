import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { registerUser } from "../../../actions";
import { Message } from "semantic-ui-react";

const RegisterSuccess = ({ onCancel, formValues, registerUser }) => {
  registerUser(formValues);
  return <Message success header="Success!" content="You're all signed up." />;
};

function mapStateToProps(state) {
  return { formValues: state.form.RegisterForm.values };
}

export default connect(mapStateToProps, { registerUser })(
  withRouter(RegisterSuccess)
);
