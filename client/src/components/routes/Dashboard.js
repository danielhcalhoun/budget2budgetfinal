import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import AddPaycheck from "./AddPaycheck";
import BudgetBar from "../BudgetBar";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    if (loading) {
      return <h1>Loading</h1>;
    } else if (profile === null) {
      console.log(profile);
      return <AddPaycheck />;
    } else {
      return (
        <div>
          <BudgetBar />
          <Link to="/add-paycheck">
            <Button>Enter your next paycheck</Button>
          </Link>
        </div>
      );
    }
  }
}

function mapStateToProps({ profile, auth }) {
  return { profile, auth };
}

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
