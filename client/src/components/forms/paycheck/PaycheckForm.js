import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Header } from "semantic-ui-react";
import FormField from "../FormField";
import DateTimeFormInline from "../../DateTimeFormInline";
import validateNumbers from "../../../utils/validateNumbers";
import formatCurrency from "../../../utils/formatCurrency";

class PaycheckForm extends Component {
  render() {
    return (
      <div>
        <Form
          className={`ui form ${this.props.valid ? "" : "error"}`}
          onSubmit={this.props.handleSubmit(this.props.onPaycheckSubmit)}
        >
          <Header as="h1">Enter your paycheck</Header>

          <Field
            key="income"
            component={FormField}
            type="text"
            label="How much will you make?"
            name="income"
            normalize={formatCurrency}
          />

          <DateTimeFormInline />

          <Button type="submit">Confirm</Button>
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // _.each(formFields, ({ name }) => {
  //   if (!values[name]) {
  //     errors[name] = "You must provide a value";
  //   }
  // });

  return errors;
}

export default reduxForm({
  validate,
  form: "PaycheckForm",
  destroyOnUnmount: false
})(PaycheckForm);
