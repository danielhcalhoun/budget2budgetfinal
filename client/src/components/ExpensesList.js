import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExpenses } from "../actions";

class ExpensesList extends Component {
  componentDidMount() {
    this.props.fetchExpenses();
  }

  renderExpenses() {
    const reverseExpenses = [...this.props.expenses].reverse();
    return reverseExpenses.map(expense => {
      return (
        <div className="card darken-1" key={expense._id}>
          <div className="card-content">
            <img src={expense.avatar} alt={expense.handle} />
            <br />
            <span className="card-title">{expense.handle}</span>
            <p>{expense.status}</p>
            <p className="right" />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderExpenses()}</div>;
  }
}

function mapStateToProps({ expenses }) {
  return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses: fetchExpenses })(ExpensesList);
