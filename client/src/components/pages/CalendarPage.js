import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Calendar from "../Calendar";

class CalendarPage extends Component {
  render() {
    return (
      <Container>
        <Calendar />
      </Container>
    );
  }
}

CalendarPage.propTypes = {};

export default CalendarPage;
