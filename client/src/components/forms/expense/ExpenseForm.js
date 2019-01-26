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
          onSubmit={this.props.handleSubmit(this.props.onExpenseSubmit)}
        >
          <Header as="h1">Enter your expense</Header>
          <Field
            key="name"
            component={FormField}
            type="text"
            label="Name"
            name="name"
          />
          <Field
            key="cost"
            component={FormField}
            type="text"
            label="How much does it cost?"
            name="cost"
            {...currencyMask}
          />
          <Field key="date" component={DateTimeFormInline} name="date" />
          <Form.Group inline>
            <Field
              name="recurring"
              component={FormField}
              type="checkbox"
              label="Recurring?"
            />
          </Form.Group>
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

  if (!values.cost) {
    errors.cost = "You must provide an cost";
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
