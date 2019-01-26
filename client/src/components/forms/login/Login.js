import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";
import LoginSuccess from "./LoginSuccess";

class Login extends Component {
  state = { formReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return <LoginSuccess />;
    }
    return (
      <div>
        <LoginForm
        // onLoginSubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

Login.propTypes = {};

export default reduxForm({
  form: "LoginForm"
})(Login);
