import React from "react";
import classnames from "classnames";
import "./style.css";

export const inputType = {
  TEXT: "text",
  NUMBER: "number",
};
export const inputSize = {
  SMALL: "input-small",
  MEDIUM: "input-medium",
  LARGE: "input-large",
};
const Input = (props) => {
  const { type, size } = props;
  const classProps = classnames(`${size}`);
  return (
    <div>
      <input type={type} className={classProps}></input>
    </div>
  );
};

Input.defaultProps = {
  size: inputSize.MEDIUM,
  type: inputType.TEXT,
  onClick: () => {},
  className: "",
};
export default Input;
