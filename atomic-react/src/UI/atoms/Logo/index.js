/* @flow */
import * as React from "react";
import classnames from "classnames";
import "./style.css";

export const logoSize = {
  SMALL: "img-small",
  MEDIUM: "img-medium",
  LARGE: "img-large",
};

const Logo = (props) => {
  const { size, logoUrl } = props;
  const classProps = classnames("img-block", `${size}`);

  return <img src={logoUrl} className={classProps} />;
};

Logo.defaultProps = {
  size: logoSize.MEDIUM,
  onClick: () => {},
  className: "",
};

export default Logo;
