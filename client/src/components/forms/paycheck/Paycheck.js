import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PaycheckForm from "./PaycheckForm";
class Paycheck extends Component {
  render() {
    return <PaycheckForm />;
  }
}

export default reduxForm({
  form: "PaycheckForm"
})(Paycheck);
