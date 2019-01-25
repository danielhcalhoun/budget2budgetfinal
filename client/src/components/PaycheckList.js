import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import {
  getCurrentPaychecks,
  deletePaycheck,
  loadingCurrentPaychecks
} from "../actions/paycheckActions";
import { List, Icon } from "semantic-ui-react";
import Loading from "./Loading";

class PaycheckList extends Component {
  async componentDidMount() {
    this.props.loadingCurrentPaychecks();
    this.props.getCurrentPaychecks();
  }

  handleDelete = (id, index) => {
    this.props.deletePaycheck(id, index);
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
                        {item.income} {item.date}
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

function mapStateToProps({ currentPaychecks }) {
  return { currentPaychecks };
}

export default connect(mapStateToProps, {
  getCurrentPaychecks,
  loadingCurrentPaychecks,
  deletePaycheck
})(PaycheckList);
