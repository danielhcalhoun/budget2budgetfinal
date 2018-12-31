import React, { Component } from "react";
import DateTimeFormInline from "../DateTimeFormInline";
import { Button, Container, Message } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";

const PayCheckTutorial = () => {
  return (
    <Container>
      <Message warning header="Enter your first paycheck to get started!" />
      <DateTimeFormInline />
      <Button fluid>Enter your first paycheck</Button>
    </Container>
  );
};

const Calendar = props => {
  return (
    <Container>
      <DateTimeFormInline />
      <Button fluid>Enter your next paycheck</Button>
      <Button fluid>Enter your next expense</Button>
    </Container>
  );
};

class Calendars extends Component {
  render() {
    switch (this.props) {
      case null:
        return <div>Loading...</div>;
      case this.props.paychecks >= 1:
        return <Calendar />;
      default:
        return <PayCheckTutorial />;
    }
  }
}

function mapStateToProps({ paychecks }) {
  return { paychecks };
}

export default connect(mapStateToProps)(Calendars);
