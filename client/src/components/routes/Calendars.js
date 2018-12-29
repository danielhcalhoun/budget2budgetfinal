import React, { Component } from "react";
import DateTimeFormInline from "../DateTimeFormInline";
import { Container } from "semantic-ui-react";

class Calendars extends Component {
  render() {
    return (
      <Container>
        <DateTimeFormInline />
      </Container>
    );
  }
}

export default Calendars;
