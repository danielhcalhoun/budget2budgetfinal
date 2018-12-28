import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import Modal from "./Modal";
import Register from "./forms/register/Register";

class Landing extends Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
