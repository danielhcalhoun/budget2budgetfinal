import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/routes/Landing";
import { Grid } from "semantic-ui-react";
import Calendars from "./components/routes/Calendars";
import Navigation from "./components/nav/Navigation";
import Profile from "./components/routes/Profile";

class App extends Component {
  render() {
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
              <Route exact path="/calendar" component={Calendars} />
              <Route exact path="/profile" component={Profile} />
            </Grid.Column>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
