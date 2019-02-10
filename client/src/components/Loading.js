import React, { Component } from "react";
import { Container, Loader } from "semantic-ui-react";

class Loading extends Component {
  render() {
    return (
      <Container style={{ height: "100%" }}>
        <Loader active size="medium" inline="centered">
          Loading
        </Loader>
      </Container>
    );
  }
}

export default Loading;
