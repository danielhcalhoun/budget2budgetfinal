import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PaycheckSuccess from "./PaycheckSuccess";
import PaycheckForm from "./PaycheckForm";
import connect from "react-redux/es/connect/connect";
class Paycheck extends Component {
  state = { formReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return (
        <div>
          <PaycheckSuccess />
        </div>
      );
    }
    return (
      <div>
        <PaycheckForm
          onPaycheckSubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  const {
    name,
    income,
    date,
    recurring
  } = state.currentPaychecks.currentPaycheck;
  return {
    initialValues: {
      name,
      income,
      date,
      recurring
    }
  };
}

Paycheck = connect(mapStateToProps)(Paycheck);

export default reduxForm({
  form: "PaycheckForm"
})(Paycheck);
