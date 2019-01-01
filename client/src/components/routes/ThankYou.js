import React, { Component } from "react";
import { Button, Container, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ThankYou extends Component {
  render() {
    return (
      <Container>
        <Message success header="Success! What do you want to do now?" />
        <Link to="/add-paycheck">
          <Button type="submit">Enter another Paycheck</Button>
        </Link>
        <Link to="/">
          <Button type="submit">Return to Homepage</Button>
        </Link>
      </Container>
    );
  }
}

export default ThankYou;
