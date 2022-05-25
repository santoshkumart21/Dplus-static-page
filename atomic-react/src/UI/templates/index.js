import React from "react";
import Card from "../molecules /card";
import Carousel from "../organisms/carousel";
import Rails from "../organisms/rails";
import Navbar from "../organisms/navbar";
import "./style.css";

export const TemplateHomePage = (props) => {
  return (
    <div className="template-block">
      <div className="nav-wrapper">
        <Navbar />
      </div>
      <div className="card-block">
        <Card content={"Ad goes here"} type="h1" />
      </div>
      <div className="carousel-block">
        <Carousel />
      </div>
      <div>
        <Rails />
      </div>
    </div>
  );
};

export default TemplateHomePage;
