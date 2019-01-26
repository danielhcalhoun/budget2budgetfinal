import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import {
  getCurrentExpenses,
  deleteExpense,
  loadingCurrentExpenses
} from "../actions/expenseActions";
import { List, Icon } from "semantic-ui-react";
import Loading from "./Loading";

class ExpenseList extends Component {
  async componentDidMount() {
    this.props.loadingCurrentExpenses();
    this.props.getCurrentExpenses();
  }

  handleDelete = (id, index) => {
    this.props.deleteExpense(id, index);
  };

  componentDidUpdate = prevProps => {
    const { currentExpenses } = this.props;
    if (currentExpenses.loading !== prevProps.currentExpenses.loading) {
      this.props.getCurrentExpenses();
    }
  };

  render() {
    const { currentExpenses } = this.props;
    switch (currentExpenses.loading) {
      case true:
        return <Loading />;
      case false:
        return (
          <React.Fragment>
            <h4>Monthly Expenses</h4>
            <List divided verticalAlign="middle">
              {currentExpenses.expenses.map((item, index) => {
                return (
                  <List.Item key={item._id}>
                    <List className="Content">
                      <List.Content floated="left">
                        <Icon circular color="red" name="minus" />
                        ${item.cost} for <strong>{item.name}</strong> on{" "}
                        {item.date}{" "}
                        {item.recurring ? (
                          <Icon
                            name="repeat"
                            size="small"
                            aria-label="Recurring"
                          />
                        ) : null}
                      </List.Content>
                      <List.Content floated="right">
                        <Icon circular name="edit" />
                        <Icon
                          circular
                          name="delete"
                          onClick={() => this.handleDelete(item._id, index)}
                        />
                      </List.Content>
                    </List>
                  </List.Item>
                );
              })}
            </List>
          </React.Fragment>
        );

      default:
        return <h2>There are no expenses</h2>;
    }
  }
}

function mapStateToProps({ currentExpenses }) {
  return { currentExpenses };
}

export default connect(mapStateToProps, {
  getCurrentExpenses,
  loadingCurrentExpenses,
  deleteExpense
})(ExpenseList);
