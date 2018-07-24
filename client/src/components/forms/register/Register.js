import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import { reduxForm } from "redux-form";
import RegisterSuccess from "./RegisterSuccess";
class Register extends Component {
  state = { formReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return <RegisterSuccess />;
    }
    return (
      <div>
        <RegisterForm
          onRegisterSubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

Register.propTypes = {};

export default reduxForm({
  form: "RegisterForm"
})(Register);
