import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import NavItem from "./NavItem";

class Navigation extends Component {
  render() {
    return (
      <Menu stackable>
        <NavItem to="/" text="Budget2Budget" />
        <NavItem to="/calendar" text="Calendar" />
        <Menu.Menu position="right">
          <NavItem to="/profile" position="right" icon />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navigation;
