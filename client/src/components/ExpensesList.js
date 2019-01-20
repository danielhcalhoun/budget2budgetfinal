import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import { getCurrentExpenses, deleteExpense } from "../actions/expenseActions";
import { List, Icon } from "semantic-ui-react";
import Loading from "./Loading";

class ExpenseList extends Component {
  async componentDidMount() {
    this.props.getCurrentExpenses();
  }

  handleDelete = (id, index) => {
    this.props.deleteExpense(id, index);
  };

  render() {
    const { expenses } = this.props;
    switch (expenses.length >= 1) {
      default:
        return <Loading />;
      case true:
        return (
          <React.Fragment>
            <h4>Upcoming Expenses</h4>
            <List divided verticalAlign="middle">
              {expenses.map((item, index) => {
                return (
                  <List.Item key={item._id}>
                    <List className="Content">
                      <List.Content floated="left">
                        <Icon circular color="red" name="minus" />
                        {item.cost} {item.date}
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
    }
  }
}

function mapStateToProps({ expenses }) {
  return { expenses };
}

export default connect(mapStateToProps, {
  getCurrentExpenses,
  deleteExpense
})(ExpenseList);
