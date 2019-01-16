import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";
import Landing from "./components/routes/Landing";
import { Grid } from "semantic-ui-react";
import Calendars from "./components/routes/CalendarPage";
import Navigation from "./components/nav/Navigation";
import Profile from "./components/routes/Profile";
import connect from "react-redux/es/connect/connect";
import AddPaycheck from "./components/routes/AddPaycheck";
import ThankYou from "./components/routes/ThankYou";

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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(App);
