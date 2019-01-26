import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, SubmissionError } from "redux-form";
import validateEmails from "../../../utils/validateEmails";
import formFields from "./loginFields";
import { Button, Form } from "semantic-ui-react";
import validatePasswords from "../../../utils/validatePasswords";
import FormField from "../FormField";
import { connect } from "react-redux";
import { loginUser } from "../../../actions";

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

  handleSubmit = values => {
    return this.props.dispatch(loginUser(values));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Form
          className={`ui form ${this.props.valid ? "" : "error"}`}
          onSubmit={handleSubmit(this.handleSubmit.bind(this))}
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
  return { formValues: state.form.LoginForm.values, errors: state.errors };
};

LoginForm = connect(mapStateToProps, { loginUser })(LoginForm);

export default reduxForm({
  form: "LoginForm",
  validate,
  asyncBlurFields: ["email"],
  destroyOnUnmount: false
})(LoginForm);
