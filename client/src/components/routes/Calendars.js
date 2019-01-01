import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import AddPaycheck from "./AddPaycheck";

class Calendars extends Component {
  render() {
    return (
      <Container>
        {this.props.paychecks.paychecks.length ? (
          <Link to="/add-paycheck">
            <Button fluid>Enter your next paycheck</Button>
          </Link>
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
