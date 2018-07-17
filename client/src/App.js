import React, { Component } from "react";
import "./App.css";
import ProviderLIst from "./components/ProviderList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProviderLIst />
      </div>
    );
  }
}

export default App;
