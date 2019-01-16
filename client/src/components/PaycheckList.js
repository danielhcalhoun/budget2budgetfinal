import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import { getCurrentPaychecks } from "../actions/profileActions";
import { List, Icon, Button } from "semantic-ui-react";
import Loading from "./Loading";

class PaycheckList extends Component {
  componentDidMount() {
    this.props.getCurrentPaychecks();
  }

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
                  <List.Item>
                    <List className="Content">
                      <List.Content floated="left">
                        <Icon circular color="green" name="dollar sign" />
                        {item.income} {item.date}
                      </List.Content>
                      <List.Content floated="right">
                        <Icon circular name="check" />
                        <Icon circular name="edit" />
                        <Icon circular name="delete" />
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

export default connect(mapStateToProps, { getCurrentPaychecks })(PaycheckList);
