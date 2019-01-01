import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import AddPaycheck from "./AddPaycheck";
import BudgetBar from "../BudgetBar";

class Calendars extends Component {
  render() {
    const { paychecks } = this.props.paychecks;
    return (
      <Container>
        {paychecks.length ? (
          <div>
            <BudgetBar />
            <Link to="/add-paycheck">
              <Button fluid>Enter your next paycheck</Button>
            </Link>
          </div>
        ) : (
          <AddPaycheck />
        )}
      </Container>
    );
  }
}

function mapStateToProps({ paychecks }) {
  return { paychecks };
}

export default connect(mapStateToProps)(Calendars);
