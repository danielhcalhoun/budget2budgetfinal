import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ExpenseSuccess from "./ExpenseSuccess";
import ExpenseForm from "./ExpenseForm";
class Expense extends Component {
  state = { formReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return (
        <div>
          <ExpenseSuccess />
        </div>
      );
    }
    return (
      <div>
        <ExpenseForm
          onPaycheckSubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "PaycheckForm"
})(Expense);
