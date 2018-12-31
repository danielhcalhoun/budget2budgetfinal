import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { logoutUser, navigateTo } from "../../actions";

const ProfileIcon = () => {
  return <Icon name="user" />;
};

class NavItem extends Component {
  handleClick = to => {
    if (this.props.logout) {
      this.props.logoutUser();
    }
    this.props.navigateTo(to);
  };

  render() {
    const { to, text, icon, id, target } = this.props;
    return (
      <NavLink target={target} to={to} onClick={() => this.handleClick(to)}>
        <Menu.Item key={id}>{icon ? ProfileIcon() : text}</Menu.Item>
      </NavLink>
    );
  }
}

export default connect(null, { navigateTo, logoutUser })(NavItem);
