import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validateEmails from "../../../utils/validateEmails";
import validatePasswords from "../../../utils/validatePasswords";
import formFields from "./registerFields";
import { Button, Form, Header } from "semantic-ui-react";
import FormField from "../FormField";

class RegisterForm extends Component {
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
    return (
      <div>
        <Form
          className={`ui form ${this.props.valid ? "" : "error"}`}
          onSubmit={this.props.handleSubmit(this.props.onRegisterSubmit)}
        >
          <Header as="h1">Sign Up</Header>
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

  errors.password2 = validatePasswords(
    values.password2 || "",
    values.password || ""
  );

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "RegisterForm",
  destroyOnUnmount: false
})(RegisterForm);
