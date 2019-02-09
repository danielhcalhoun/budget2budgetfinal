import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import {
  getCurrentExpenses,
  deleteExpense,
  loadingCurrentExpenses,
  setCurrentExpense
} from "../actions/expenseActions";
import { List, Icon } from "semantic-ui-react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

class ExpenseList extends Component {
  async componentDidMount() {
    this.props.loadingCurrentExpenses();
    this.props.getCurrentExpenses();
  }

  handleDelete = (id, index) => {
    this.props.deleteExpense(id, index);
  };

  handleEdit = values => {
    this.props.setCurrentExpense(values);
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
                        <Link
                          onClick={() => this.handleEdit(item)}
                          to={`/edit-expense/${item._id}`}
                        >
                          <Icon circular name="edit" />
                        </Link>
                        <Link
                          onClick={() => this.handleDelete(item._id, index)}
                          to="#"
                        >
                          <Icon circular name="delete" />
                        </Link>
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
  deleteExpense,
  setCurrentExpense
})(ExpenseList);
