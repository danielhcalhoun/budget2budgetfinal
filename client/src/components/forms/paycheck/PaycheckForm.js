import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Header } from "semantic-ui-react";
import FormField from "../FormField";
import DateTimeFormInline from "../../DateTimeFormInline";
import { createNumberMask } from "redux-form-input-masks";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const currencyMask = createNumberMask({
  prefix: "$ ",
  decimalPlaces: 2,
  locale: "en-US"
});

class PaycheckForm extends Component {
  // componentWillUnmount() {
  //   this.props.setCurrentPaycheck({});
  // }

  render() {
    return (
      <div>
        <Form
          className={`ui form ${this.props.valid ? "" : "error"}`}
          onSubmit={this.props.handleSubmit(this.props.onPaycheckSubmit)}
        >
          <Header as="h1">Enter your income</Header>
          <Field
            key="name"
            component={FormField}
            type="text"
            label="Name"
            name="name"
            placeholder="Name"
          />
          <Field
            key="income"
            component={FormField}
            type="text"
            label="How much will you make?"
            name="income"
            {...currencyMask}
          />
          <Field
            key="date"
            component={DateTimeFormInline}
            name="date"
            initialDate={this.props.initialValues.date}
          />
          <Form.Group inline>
            <Field
              name="recurring"
              component={FormField}
              type="checkbox"
              label="Recurring?"
            />
          </Form.Group>
          <Button type="submit">Confirm</Button>{" "}
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

  if (!values.name) {
    errors.name = "You must provide a name";
  }

  if (!values.income) {
    errors.income = "You must provide an income";
  }

  if (!values.date) {
    errors.date = "You must provide a date";
  }

  return errors;
}

// // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
PaycheckForm = reduxForm({
  validate,
  form: "PaycheckForm",
  destroyOnUnmount: false
})(PaycheckForm);

// You have to connect() to any reducers that you wish to connect to yourself
PaycheckForm = connect(state => ({
  initialValues: {
    name: state.currentPaychecks.currentPaycheck.name
      ? state.currentPaychecks.currentPaycheck.name
      : "Paycheck",
    date: state.currentPaychecks.currentPaycheck.date,
    income: state.currentPaychecks.currentPaycheck.income,
    recurring: state.currentPaychecks.currentPaycheck.recurring
  } // pull initial values from account reducer
}))(PaycheckForm);

export default PaycheckForm;
