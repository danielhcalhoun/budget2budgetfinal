import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validateEmails from "../../../utils/validateEmails";
import formFields from "./loginFields";
import { Button, Form } from "semantic-ui-react";
import validatePasswords from "../../../utils/validatePasswords";

const FormField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="error red-text" style={{ marginBottom: "5px" }}>
        {touched && error}
      </div>
    </div>
  );
};

class LoginForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={FormField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.props.onLoginSubmit)}>
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

export default reduxForm({
  validate,
  form: "LoginForm",
  destroyOnUnmount: false
})(LoginForm);
