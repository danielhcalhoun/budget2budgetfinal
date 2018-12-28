import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validateEmails from "../../../utils/validateEmails";
import formFields from "./loginFields";
import { Button, Form, Message } from "semantic-ui-react";
import validatePasswords from "../../../utils/validatePasswords";

const FormField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <Message error style={{ marginBottom: "5px" }}>
        {touched && error}
      </Message>
    </div>
  );
};

class LoginForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={FormField}
          type={`${type ? type : "text"}`}
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
          onSubmit={this.props.handleSubmit(this.props.onLoginSubmit)}
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

export default reduxForm({
  validate,
  form: "LoginForm",
  destroyOnUnmount: false
})(LoginForm);
