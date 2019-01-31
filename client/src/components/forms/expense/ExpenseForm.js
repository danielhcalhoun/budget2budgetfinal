import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Header } from "semantic-ui-react";
import FormField from "../FormField";
import DateTimeFormInline from "../../DateTimeFormInline";
import { createNumberMask } from "redux-form-input-masks";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { withRouter } from "react-router";
import {
  addExpense,
  editExpense,
  setCurrentExpense
} from "../../../actions/expenseActions";
import moment from "moment";

const currencyMask = createNumberMask({
  prefix: "$ ",
  decimalPlaces: 2,
  locale: "en-US"
});

class ExpenseForm extends Component {
  componentWillUnmount() {
    this.props.setCurrentExpense({});
  }

  handleSubmit = (values, dispatch, props) => {
    const formValues = {
      ...values,
      //send date as an ISO date
      date: moment(values.date.toString(), "MM-DD-YYYY").toISOString()
    };
    //redirect to homepage
    props.history.push("/");

    if (props._id) {
      //If we are editing
      return dispatch(editExpense(formValues, props._id));
    } else {
      //If we are adding
      return dispatch(addExpense(formValues));
    }
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Form
          className={`ui form ${this.props.valid ? "" : "error"}`}
          onSubmit={handleSubmit(
            this.handleSubmit.bind(this),
            this.props.history
          )}
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

const mapStateToProps = () => ({ currentExpenses }) => {
  const { _id, name, cost, date, recurring } = currentExpenses.currentExpense;

  return {
    _id,
    initialValues: {
      name: name ? name : "Expense",
      cost,
      date,
      recurring
    }
  };
};

// // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ExpenseForm = reduxForm({
  validate,
  form: "ExpenseForm",
  destroyOnUnmount: false
})(ExpenseForm);

// You have to connect() to any reducers that you wish to connect to yourself
ExpenseForm = connect(mapStateToProps, {
  setCurrentExpense,
  addExpense,
  editExpense
})(withRouter(ExpenseForm));

export default ExpenseForm;
