import React, { Component } from "react";
import { Button, Container, Dimmer } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import AddPaycheck from "./AddPaycheck";
import BudgetBar from "../BudgetBar";
import { getCurrentProfile } from "../../actions/profileActions";
import Loading from "../Loading";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { profile, loading } = this.props.profile;
    switch (profile) {
      case null:
        return <Loading />;
      case loading:
        return <Loading />;
      case profile:
        return (
          <Container>
            <BudgetBar />
            <Link to="/add-paycheck">
              <Button>Enter your next paycheck</Button>
            </Link>
          </Container>
        );
    }
  }
}

function mapStateToProps({ profile, auth }) {
  return { profile, auth };
}

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
