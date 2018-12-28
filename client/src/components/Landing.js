import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import Modal from "./Modal";
import Register from "./forms/register/Register";
import Login from "./forms/login/Login";

class Landing extends Component {
  render() {
    return (
      <div>
        <Register />
        Already have an account?{" "}
        <Modal modalText="Login" modalHeader="Login">
          <Login />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
