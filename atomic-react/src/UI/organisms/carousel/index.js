import React, { useState, useEffect } from "react";
import "./style.css";
import Logo from "../../atoms/Logo";
import nature from "../../../assets/images/nature.png";
import s22 from "../../../assets/images/s22-1.jpg";
import VW from "../../../assets/images/Volkswagen.jpg";
import play from "../../../assets/images/play.png";
import Card from "../../molecules /card";

export const navType = {
  MENU: "menu",
};

export const navTheme = {
  DEFAULT: "default",
  DARK: "dark",
};

export default function Carousel(props) {
  const { type, children, theme, size, className, menuTitle } = props;
  const click = () => {
    alert("hello");
  };
  const imgArr = [s22, nature, VW];
  const carouselTitles = [
    "Phone to check in 2022",
    "Nature is not a place it is home. ",
    "Car to drive in 2022",
  ];
  const carouselSubTitles = [
    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
  ];
  const [carouselImg, setCarouselImg] = useState(imgArr[0]);
  const [cardData, setCardData] = useState(carouselTitles[0]);
  const [subData, setSubData] = useState(carouselSubTitles[0]);

  const [initimg, setInitimg] = useState(0);
  const changeImg = (e) => {
    const carouselImgs = e.target.id === "next" ? imgArr[1] : imgArr[0];
    setCarouselImg(carouselImgs);
    setCardData("Lorem ipsum ");
    setSubData("Lorem ipsum is a placeholder text");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (initimg <= imgArr.length - 1) {
        setCarouselImg(imgArr[initimg]);
        setCardData(carouselTitles[initimg]);
        setSubData(carouselSubTitles[initimg]);
        setInitimg(initimg + 1);
      } else {
        setInitimg(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="carousel">
      <a className="prev-arrow" onClick={changeImg} id="prev">
        &#10094;
      </a>
      <div className="carousel-left">
        <Card content={cardData} subContent={subData} type="h1" />
        <Logo logoUrl={play} size="img-small" />
      </div>

      <div className="carousel-right">
        <Logo logoUrl={carouselImg} size="img-large" />
      </div>
      <a className="next-arrow" id="next" onClick={changeImg}>
        &#10095;
      </a>
    </div>
  );
}

Carousel.defaultProps = {
  type: navType.BUTTON,
  theme: navTheme.DEFAULT,

  className: "",
};
