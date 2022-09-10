import React from "react";
import "./ChooseService.css";

import { BsChevronRight } from "react-icons/bs";

import Card from "./../../UI/Card";

import SofaCleaning from "./../../assets/Rectangle 2084.png";
import HomeCleaning from "./../../assets/Rectangle 2085.png";
import BathCleaning from "./../../assets/Rectangle 2086.png";
import KitchenCleaning from "./../../assets/Rectangle 2016.png";

import Appliances from "./../../assets/Vector-1.png";
import Time from "./../../assets/Group.png";
import Partner from "./../../assets/Vector-2.png";
import Professional from "./../../assets/Group-1.png";

const services = [
  {
    img: SofaCleaning,
    text: "Sofa Deep Cleaning",
  },
  {
    img: HomeCleaning,
    text: "House Cleaning Services",
  },
  {
    img: BathCleaning,
    text: "Bathroom Deep Cleaning",
  },
  {
    img: KitchenCleaning,
    text: "Kitchen Deep Cleaning",
  },
];

const process = [
  {
    img: Appliances,
    header: "Choose the Appliances",
    text: "Select the Service required",
  },
  {
    img: Time,
    header: "Choose your time-slot",
    text: "We serve from 9am-9pm",
  },
  {
    img: Partner,
    header: "Choose from our partners",
    text: "Verified Professionals",
  },
  {
    img: Professional,
    header: "Hassle-free service",
    text: "24*7, verifed professionals",
  },
];

const ChooseService = () => {
  let hr;
  const HrLine = (idx) => {
    if (idx !== 3) {
      hr = <hr className="vertical" />;
    }
  };
  return (
    <React.Fragment>
      <div className="our-service">
        <h1>Choose Our Services</h1>
        <div className="services">
          <div className="service">
            <img src={SofaCleaning} alt="Sofa Cleaning" />
            <span>Sofa Deep Cleaning</span>
          </div>
          <div className="service active">
            <img src={HomeCleaning} alt="Home Cleaning" />
            <span>Home Cleaning Services</span>
          </div>
          <div className="service">
            <img src={BathCleaning} alt="BathRoom Cleaning" />
            <span>BathRoom Deep Cleaning</span>
          </div>
          <div className="service">
            <img src={KitchenCleaning} alt="Kitchen Cleaning" />
            <span>Kitchen Deep Cleaning</span>
          </div>
        </div>
      </div>
      <div className="our-service-mobile">
        <Card>
          <h1>Choose Our Services</h1>
          <hr className="card-hr" />
          <div className="services">
            {services.map((service, idx) => {
              return (
                <React.Fragment>
                  <div className="service" key={idx}>
                    <img src={service.img} alt={service.text} />
                    <span>{service.text}</span>
                    <BsChevronRight className="bs-icon" />
                  </div>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>
        </Card>
      </div>
      <div className="how-it-works">
        <h1>How it Works</h1>
        <hr className="heading-line" />
        <div className="process">
          <div className="sub-process">
            <img
              src={Appliances}
              className="works-image"
              alt="Choose the Appliances"
            />
            <div className="text">
              <h3>Choose the Appliances</h3>
              <span>Select the Service required</span>
            </div>
          </div>
          <div className="sub-process">
            <img
              src={Time}
              className="works-image"
              alt="Choose your time-slot"
            />
            <div className="text">
              <h3>Choose your time-slot</h3>
              <span>We serve from 9am-9pm</span>
            </div>
          </div>
          <div className="sub-process">
            <img
              src={Partner}
              className="works-image"
              alt="Choose from our partners"
            />
            <div className="text">
              <h3>Choose from our partners</h3>
              <span>Verified Professionals</span>
            </div>
          </div>
          <div className="sub-process">
            <img
              src={Professional}
              className="works-image"
              alt="Hassle-free service"
            />
            <div className="text">
              <h3>Hassle-free service</h3>
              <span>24*7, verifed professionals</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChooseService;
