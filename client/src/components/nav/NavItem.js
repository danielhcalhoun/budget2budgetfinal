import { NavLink } from "react-router-dom";
import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const ProfileIcon = () => {
  return <Icon name="user" />;
};

export default ({ to, text, icon, id, target }) => {
  console.log(text);

  return (
    <NavLink target={target} to={to}>
      <Menu.Item key={id}>{icon ? ProfileIcon() : text}</Menu.Item>
    </NavLink>
  );
};
