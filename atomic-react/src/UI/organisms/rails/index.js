import React from "react";
import "./style.css";
import Logo from "../../atoms/Logo";
import nature from "../../../assets/images/nature.png";
import s22 from "../../../assets/images/s22-1.jpg";
import VW from "../../../assets/images/Volkswagen.jpg";

export default function Rails() {
  const imgArr = [s22, nature, VW, s22, nature, VW, s22, nature, VW];

  const railsLeft = (e) => {
    document.getElementById("scroll").scrollLeft += 2000;
  };
  const railsRight = (e) => {
    document.getElementById("scroll").scrollLeft -= 2000;
  };

  return (
    <div className="container">
      <a className="prev" id="prev" onClick={railsRight}>
        &#10094;
      </a>
      <div className="rails" id="scroll">
        {imgArr.map((ele) => (
          <div>
            <Logo logoUrl={ele} size="img-rails" />
          </div>
        ))}
      </div>
      <a className="prev" id="next" onClick={railsLeft}>
        &#10095;
      </a>
    </div>
  );
}

Rails.defaultProps = {
  className: "",
};
