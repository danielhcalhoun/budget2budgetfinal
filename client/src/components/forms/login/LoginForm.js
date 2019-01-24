import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validateEmails from "../../../utils/validateEmails";
import formFields from "./loginFields";
import { Button, Form } from "semantic-ui-react";
import validatePasswords from "../../../utils/validatePasswords";
import FormField from "../FormField";
import { connect } from "react-redux";
import { loginUser } from "../../../actions";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values, dispatch) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (["jmedran@gmail.com"].includes(values.email)) {
      throw { email: "That email is taken" };
    }
  });
};

class LoginForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={FormField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <Form
          className={`ui form ${this.props.valid ? "" : "error"}`}
          onSubmit={handleSubmit(this.props.onLoginSubmit)}
        >
          {this.renderFields()}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || "");

  errors.password = validatePasswords(values.password || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

const mapStateToProps = state => {
  return { formValues: state.form.LoginForm.values };
};

LoginForm = connect(mapStateToProps, { loginUser })(LoginForm);

export default reduxForm({
  form: "LoginForm",
  validate,
  asyncValidate,
  asyncBlurFields: ["email"],
  destroyOnUnmount: false
})(LoginForm);
