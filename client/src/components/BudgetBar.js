import React, { Component } from "react";
import { Progress } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { combinePaychecks } from "../actions/paycheckActions";
import { combineExpenses } from "../actions/expenseActions";

class BudgetBar extends Component {
  //get current month
  //map through paychecks
  //find every paycheck for the current month
  //add together the incomes

  updateTotalPaychecks = paychecks => {
    //get array of current months paychecks and push into total
    let total = paychecks
      .map(item => {
        return item.income;
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);

    this.props.combinePaychecks(total);
  };

  updateTotalExpenses = expenses => {
    let total = expenses
      .map(item => {
        return item.cost;
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);

    this.props.combineExpenses(total);
  };

  componentDidUpdate = prevProps => {
    const { currentPaychecks, expenses } = this.props;
    if (
      currentPaychecks &&
      currentPaychecks.paychecks &&
      currentPaychecks.paychecks.length >= 1 &&
      currentPaychecks.paychecks !== prevProps.currentPaychecks.paychecks
    ) {
      this.updateTotalPaychecks(currentPaychecks.paychecks);
    }

    if (expenses.length >= 1 && expenses !== prevProps.expenses) {
      this.updateTotalExpenses(expenses);
    }
  };

  render() {
    const { whatsLeftOver } = this.props.budgetbar;
    return (
      <div>
        <h1>Monthly Budget</h1>
        <Progress percent={whatsLeftOver} size="medium" color="green" />
      </div>
    );
  }
}

function mapStateToProps({ currentPaychecks, budgetbar, expenses }) {
  return { currentPaychecks, budgetbar, expenses };
}

export default connect(mapStateToProps, {
  combinePaychecks,
  combineExpenses
})(BudgetBar);
