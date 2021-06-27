import React, { Component } from "react";

import { NavLink } from 'react-router-dom';

import Spotlight from "./Spotlight";

import logo from "../images/logo.svg";


class Header extends Component {
  constructor(props) {
    super(props);
  };

  click = (backgroundColor, textColor) => {
      this.props.appChangeColor(backgroundColor, textColor);
  }

  render() {
    return (
      <nav className="main-header">
          <NavLink 
            to="/atlas" 
            onClick={() => this.click("white", "red")}>
              <img src={logo} alt="atlas kolapsu" width="100%" />
          </NavLink>
          <NavLink className="default-link" 
            to="/info"
            onClick={() => this.click("red", "white")}>
              o projekte
          </NavLink>
      </nav>
    );
  }
}

export default Header;