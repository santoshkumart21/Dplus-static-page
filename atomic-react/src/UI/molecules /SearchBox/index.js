import React from "react";
import Input from "../../atoms/Input";
import Logo from "../../atoms/Logo";
import logo from "../../../assets/logo/search-icon.png";
import "./style.css";

export const SearchBox = (props) => {
  return (
    <div className="search-box">
      <Input />
      <div className="img-position">
        <Logo logoUrl={logo} size="img-small" />
      </div>
    </div>
  );
};
SearchBox.defaultProps = {
  onClick: () => {},
  className: "",
};
