import React from "react";
import classnames from "classnames";

import "./style.css";

export const headingType = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  P: "p",
};

export const ButtonTheme = {
  DEFAULT: "default",
  ROUNDED: "rounded",
};

export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
export default function Headings(props) {
  const { type, children, theme, size, className } = props;
  return (
    <div className="heading">
      {type === headingType.H1 && <h1>{children}</h1>}
      {type === headingType.H2 && <h2>{children}</h2>}
      {type === headingType.H3 && <h3>{children}</h3>}
      {type === headingType.P && <p>{children}</p>}
    </div>
  );
}
