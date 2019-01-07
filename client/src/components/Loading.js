import React, { Component } from "react";
import { Container, Dimmer, Loader, Segment } from "semantic-ui-react";

class Loading extends Component {
  render() {
    return (
      <Container style={{ height: "100%" }}>
        <Loader active size="medium">
          Loading
        </Loader>
      </Container>
    );
  }
}

export default Loading;
