import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import {
  getCurrentPaychecks,
  deletePaycheck,
  loadingCurrentPaychecks,
  setCurrentPaycheck
} from "../actions/paycheckActions";
import { List, Icon } from "semantic-ui-react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

class PaycheckList extends Component {
  async componentDidMount() {
    this.props.loadingCurrentPaychecks();
    this.props.getCurrentPaychecks();
  }

  handleDelete = (id, index) => {
    this.props.deletePaycheck(id, index);
  };

  handleEdit = values => {
    this.props.setCurrentPaycheck(values);
  };

  componentDidUpdate = prevProps => {
    const { currentPaychecks } = this.props;
    if (currentPaychecks.loading !== prevProps.currentPaychecks.loading) {
      this.props.getCurrentPaychecks();
    }
  };

  render() {
    const { currentPaychecks } = this.props;
    switch (currentPaychecks.loading) {
      default:
        return <Loading />;
      case false:
        return (
          <React.Fragment>
            <h4>Monthly Income</h4>
            <List divided verticalAlign="middle">
              {currentPaychecks.paychecks.map((item, index) => {
                return (
                  <List.Item key={item._id}>
                    <List className="Content">
                      <List.Content floated="left">
                        <Icon circular color="green" name="dollar sign" />
                        ${item.income} for <strong>{item.name}</strong> on{" "}
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
                          to={`/edit-paycheck/${item._id}`}
                        >
                          <Icon circular name="edit" />
                        </Link>
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

function mapStateToProps({ currentPaychecks }) {
  return { currentPaychecks };
}

export default connect(mapStateToProps, {
  getCurrentPaychecks,
  loadingCurrentPaychecks,
  setCurrentPaycheck,
  deletePaycheck
})(PaycheckList);
