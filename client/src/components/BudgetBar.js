import React, { Component } from "react";
import { Progress } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { combinePaychecks } from "../actions/paycheckActions";

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

  componentDidUpdate = prevProps => {
    const { paychecks } = this.props;
    if (paychecks.length >= 1 && paychecks !== prevProps.paychecks) {
      this.updateTotalPaychecks(paychecks);
    }
  };

  render() {
    const { whatsLeftOver } = this.props.budgetbar;
    return <Progress percent={whatsLeftOver} size="medium" color="green" />;
  }
}

function mapStateToProps({ paychecks, budgetbar }) {
  return { paychecks, budgetbar };
}

export default connect(mapStateToProps, {
  combinePaychecks
})(BudgetBar);
