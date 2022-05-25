import React from "react";
import Headings from "../../atoms/headings";
import "./style.css";

export const cardSize = {
  SMALL: "card-small",
  MEDIUM: "card-medium",
  LARGE: "card-large",
};
const Card = (props) => {
  const { content, type, subContent } = props;
  return (
    <div className="card">
      <div className="card-heading">
        <Headings type={type}>{content}</Headings>
      </div>
      <div className="card-text">
        <p>{subContent}</p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  size: cardSize.MEDIUM,
  onClick: () => {},
  className: "",
};
export default Card;
