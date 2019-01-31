import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Header } from "semantic-ui-react";
import FormField from "../FormField";
import DateTimeFormInline from "../../DateTimeFormInline";
import { createNumberMask } from "redux-form-input-masks";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addPaycheck,
  editPaycheck,
  setCurrentPaycheck
} from "../../../actions/paycheckActions";
import moment from "moment";
import { withRouter } from "react-router";

const currencyMask = createNumberMask({
  prefix: "$ ",
  decimalPlaces: 2,
  locale: "en-US"
});

class PaycheckForm extends Component {
  componentWillUnmount() {
    this.props.setCurrentPaycheck({});
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
      return dispatch(editPaycheck(formValues, props._id));
    } else {
      //If we are adding
      return dispatch(addPaycheck(formValues));
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

const mapStateToProps = () => ({ currentPaychecks }) => {
  const {
    _id,
    name,
    income,
    date,
    recurring
  } = currentPaychecks.currentPaycheck;

  return {
    _id,
    initialValues: {
      name: name ? name : "Paycheck",
      income,
      date,
      recurring
    }
  };
};

// // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
PaycheckForm = reduxForm({
  validate,
  form: "PaycheckForm",
  destroyOnUnmount: false
})(PaycheckForm);

// You have to connect() to any reducers that you wish to connect to yourself
PaycheckForm = connect(mapStateToProps, {
  setCurrentPaycheck,
  addPaycheck,
  editPaycheck
})(withRouter(PaycheckForm));

export default PaycheckForm;
