import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import BudgetBar from "../BudgetBar";
import { getCurrentProfile } from "../../actions/profileActions";
import Loading from "../Loading";
import PaycheckList from "../PaycheckList";
import ExpenseList from "../ExpensesList";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { profile, loading } = this.props.profile;
    switch (loading) {
      case true:
        return <Loading />;
      case false:
        return (
          <Container id="dashboard">
            <BudgetBar />
            <Link to="/add-paycheck">
              <Button className="basic positive">Enter your next income</Button>
            </Link>
            {profile && profile.paychecks ? (
              <Link to="/add-expense">
                <Button className="basic negative">
                  Enter your next expense
                </Button>
              </Link>
            ) : null}

            {profile && profile.paychecks ? <PaycheckList /> : null}
            {profile && profile.expenses ? <ExpenseList /> : null}
          </Container>
        );
      default:
        return <h2>There is no profile for this user</h2>;
    }
  }
}

function mapStateToProps({ profile, auth }) {
  return { profile, auth };
}

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
