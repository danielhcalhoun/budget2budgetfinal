import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import { reduxForm } from "redux-form";
class Register extends Component {
  state = { formReview: false };

  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}

export default reduxForm({
  form: "RegisterForm"
})(Register);
