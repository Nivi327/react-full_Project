import React from "react";
import ImgBg from "./../../assets/Group 7083.png";
import CallToClean from "../CallToClean/CallToClean";
import "./ImageHeader.css";

const ImageHeader = () => {
  return (
    <React.Fragment>
      <div className="img-header">
        <img src={ImgBg} className="bg-image" alt="our cleaning Pic" />
        <span className="route">Home / Delhi NCR / Home Cleaning</span>
        <div className="content">
          <span className="title">
            Top House Cleaning Services in Delhi NCR
          </span>
          <CallToClean />
        </div>
      </div>
      <div className="description">
        <h2>House Cleaning Services in Delhi NCR :</h2>
        <p>
          Get home cleaning services in Delhi NCR, India. We have Well Equipped
          and Trained Team, who carries out Deep House Cleaning and Sanitization
          with Non-Hazardous Chemicals. Book well-trained and experienced team
          from OyeBusy to get your home deep cleaned thoroughly at your chosen
          time and location. We offer the most affordable home cleaning services
          in Delhi NCR, India for studios, apartments, and villas. Book home
          cleaning services on OyeBusy today.
        </p>
      </div>
    </React.Fragment>
  );
};

export default ImageHeader;
