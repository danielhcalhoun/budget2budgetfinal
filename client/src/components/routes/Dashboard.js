import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
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
      case loading:
        return <Loading />;
      case null:
        return (
          <div>
            <h1>Profile not found</h1>
          </div>
        );
      case profile:
        return (
          <Container>
            <BudgetBar />
            <Link to="/add-paycheck">
              <Button>Enter your next paycheck</Button>
            </Link>
          </Container>
        );
      default:
        return <Loading />;
    }
  }
}

function mapStateToProps({ profile, auth }) {
  return { profile, auth };
}

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
