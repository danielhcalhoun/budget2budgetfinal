import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PaycheckSuccess from "./PaycheckSuccess";
import PaycheckForm from "./PaycheckForm";
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

export default reduxForm({
  form: "PaycheckForm"
})(Paycheck);
