import "./OurWork.css";
import Services from "../Services/Services";
import React from "react";
import Carousel from "../../UI/Carousel";

const OurWork = () => {
  return (
    <React.Fragment>
      <div className="our-work">
        <h2>Our Professional Work</h2>
        <Carousel />
      </div>
      <Services />
    </React.Fragment>
  );
};

export default OurWork;
