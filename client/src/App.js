import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/Landing";
import { Grid } from "semantic-ui-react";
import Calendars from "./components/pages/CalendarPage";
import Navigation from "./components/nav/Navigation";
import Profile from "./components/pages/Profile";
import connect from "react-redux/es/connect/connect";
import AddPaycheck from "./components/pages/AddPaycheck";
import ThankYou from "./components/pages/ThankYou";
import AddExpense from "./components/pages/AddExpense";
import IdleWrapper from "./components/IdleWrapper";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.auth.isAuthenticated ? <IdleWrapper /> : null}
          <Navigation />
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Route exact path="/" component={Landing} />
              <PrivateRoute
                exact
                path="/calendar"
                component={Calendars}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/add-paycheck"
                component={AddPaycheck}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/edit-paycheck/:id"
                component={AddPaycheck}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/add-expense"
                component={AddExpense}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/edit-expense/:id"
                component={AddExpense}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/thank-you"
                component={ThankYou}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/profile"
                component={Profile}
                auth={auth}
              />
            </Grid.Column>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth, idleTimer }) {
  return { auth, idleTimer };
}

export default connect(mapStateToProps)(App);
