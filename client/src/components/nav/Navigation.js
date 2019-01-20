import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import NavItem from "./NavItem";
import connect from "react-redux/es/connect/connect";
import { fetchUser } from "../../actions";

class Navigation extends Component {
  render() {
    const { auth } = this.props;

    switch (auth.isAuthenticated) {
      case null:
        return "Loading...";
      case true:
        return (
          <Menu stackable>
            <NavItem to="/" text="Budget2Budget" />
            {/*<NavItem to="/calendar" text="Calendar" />*/}
            <Menu.Menu position="right">
              <NavItem to="/" position="right" text="logout" logout />
              <NavItem to="/profile" position="right" icon />
            </Menu.Menu>
          </Menu>
        );
      default:
        return (
          <Menu stackable>
            <NavItem to="/" text="Budget2Budget" />
          </Menu>
        );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(Navigation);
