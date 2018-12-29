import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = { activeItem: "logo" };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      links: [
        {
          route: "/",
          title: "Home"
        },
        {
          route: "/contact",
          title: "Contact"
        },
        {
          route: "https://github.com/jarrodmedrano",
          title: "Github",
          target: "_blank"
        },
        {
          route: "https://www.linkedin.com/in/jarrod-medrano-b89b0037/",
          title: "LinkedIn",
          target: "_blank"
        }
      ]
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  NavItem = (to, text, id, target, current) => {
    return (
      <Menu.Item key={id}>
        <Link target={target} {...(current ? { disabled: true } : {})} to={to}>
          {text}
        </Link>
      </Menu.Item>
    );
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          name="logo"
          active={activeItem === "logo"}
          onClick={this.handleItemClick}
        >
          Budget2Budget
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
