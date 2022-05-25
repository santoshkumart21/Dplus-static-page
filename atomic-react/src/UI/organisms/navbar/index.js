import React from "react";
import classnames from "classnames";

import "./style.css";
import { SearchBox } from "../../molecules /SearchBox";
import Button from "../../atoms/Buttons";
import Logo from "../../atoms/Logo";
import logo from "../../../assets/logo/logo.png";
import hamburger from "../../../assets/logo/hamburger.png";
import List from "../../atoms/list";

export const navType = {
  MENU: "menu",
};

export const navTheme = {
  DEFAULT: "default",
  DARK: "dark",
};

export default function Navbar(props) {
  const { type, children, theme, size, className, menuTitle } = props;
  const click = () => {
    alert("hello");
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Logo logoUrl={hamburger} size="img-small" />
        <Logo logoUrl={logo} />
      </div>
      <div className="list-row">
        <List />
      </div>
      <div className="navbar-right">
        <SearchBox />
        <div className="sign-in-button">
          <Button type="large" onClick={click} disabled={false}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  type: navType.BUTTON,
  theme: navTheme.DEFAULT,

  className: "",
};
