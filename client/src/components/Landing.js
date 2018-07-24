import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import ProviderList from "./ProviderList";
import Modal from "./Modal";
import Register from "./forms/register/Register";

class Landing extends Component {
  render() {
    return (
      <div>
        <ProviderList />
        <Modal>
          <Register />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
