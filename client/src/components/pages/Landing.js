import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import Modal from "../Modal";
import Register from "../forms/register/Register";
import Login from "../forms/login/Login";
import { Card, Container } from "semantic-ui-react";
import { fetchUser } from "../../actions";
import Dashboard from "./Dashboard";
import Loading from "../Loading";

class Landing extends Component {
  render() {
    switch (this.props.auth.isAuthenticated) {
      case null:
        return <Loading />;
      case true:
        return <Dashboard />;
      default:
        return (
          <Container>
            <Card>
              <Card.Content>
                <Card.Description>
                  <Register />
                </Card.Description>
              </Card.Content>
            </Card>
            Already have an account?{" "}
            <Modal modalHeader="Login" modalTrigger="Login">
              <Card>
                <Card.Content>
                  <Card.Description>
                    <Login />
                  </Card.Description>
                </Card.Content>
              </Card>
            </Modal>
          </Container>
        );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(Landing);
