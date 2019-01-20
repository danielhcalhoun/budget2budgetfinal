import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import {
  getCurrentPaychecks,
  deletePaycheck
} from "../actions/paycheckActions";
import { List, Icon } from "semantic-ui-react";
import Loading from "./Loading";

class PaycheckList extends Component {
  async componentDidMount() {
    this.props.getCurrentPaychecks();
  }

  handleDelete = (id, index) => {
    this.props.deletePaycheck(id, index);
  };

  render() {
    const { paychecks } = this.props;
    switch (paychecks.length >= 1) {
      default:
        return <Loading />;
      case true:
        return (
          <React.Fragment>
            <h4>Upcoming Paychecks</h4>
            <List divided verticalAlign="middle">
              {paychecks.map((item, index) => {
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

function mapStateToProps({ paychecks }) {
  return { paychecks };
}

export default connect(mapStateToProps, {
  getCurrentPaychecks,
  deletePaycheck
})(PaycheckList);
