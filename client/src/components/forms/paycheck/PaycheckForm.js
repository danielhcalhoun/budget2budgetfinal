import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Header, Message } from "semantic-ui-react";
import FormField from "../FormField";
import DateTimeFormInline from "../../DateTimeFormInline";
import { createNumberMask } from "redux-form-input-masks";
import validateCurrency from "../../../utils/validateCurrency";

const currencyMask = createNumberMask({
  prefix: "$ ",
  decimalPlaces: 2,
  locale: "en-US"
});

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
            {...currencyMask}
          />
          {/*{...currencyMask}*/}
          <Field
            key="date"
            type="text"
            component={DateTimeFormInline}
            name="date"
          />

          <Button type="submit">Confirm</Button>
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  !values.income ? (errors.income = "You must provide an income") : "";

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
