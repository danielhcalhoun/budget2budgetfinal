import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <h1>Sorry, we couldn't find that page!</h1>
        <iframe
          src="https://giphy.com/embed/11j6oiwfuzwu9G"
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <br />
        <Link to="/">
          <Button className="basic">Go Back</Button>
        </Link>
      </Container>
    );
  }
}

export default NotFound;
