import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {};

export default reduxForm({
  form: "LoginForm"
})(Login);
