import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { navigateTo } from "../../actions";

const ProfileIcon = () => {
  return <Icon name="user" />;
};

class NavItem extends Component {
  handleClick = to => {
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

export default connect(state => ({}), { navigateTo })(NavItem);
