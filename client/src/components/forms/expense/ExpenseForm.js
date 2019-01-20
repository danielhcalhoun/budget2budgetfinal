import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Header } from "semantic-ui-react";
import FormField from "../FormField";
import DateTimeFormInline from "../../DateTimeFormInline";
import { createNumberMask } from "redux-form-input-masks";
import { Link } from "react-router-dom";

const currencyMask = createNumberMask({
  prefix: "$ ",
  decimalPlaces: 2,
  locale: "en-US"
});

class ExpenseForm extends Component {
  render() {
    return (
      <div>
        <Form
          className={`ui form ${this.props.valid ? "" : "error"}`}
          onSubmit={this.props.handleSubmit(this.props.onPaycheckSubmit)}
        >
          <Header as="h1">Enter your expense</Header>

          <Field
            key="income"
            component={FormField}
            type="text"
            label="How much will you make?"
            name="income"
            {...currencyMask}
          />
          <Field key="date" component={DateTimeFormInline} name="date" />

          <Button type="submit">Confirm</Button>
          <Link to="/">
            <Button>Cancel</Button>
          </Link>
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.income) {
    errors.income = "You must provide an income";
  }

  if (!values.date) {
    errors.date = "You must provide a date";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "ExpenseForm",
  destroyOnUnmount: false
})(ExpenseForm);
