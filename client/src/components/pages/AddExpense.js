import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Expense from "../forms/expense/Expense";

class AddExpense extends Component {
  render() {
    return (
      <Container>
        <Expense />
      </Container>
    );
  }
}

export default AddExpense;
