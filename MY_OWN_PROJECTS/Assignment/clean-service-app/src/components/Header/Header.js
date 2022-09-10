import "./Header.css";
import CleaningExpert from "./../../assets/Group 7077.png";
import WhatsApp from "./../../assets/Group 1655.png";
import Phone from "./../../assets/Phone.png";
import React, { useRef } from "react";

const Header = () => {
  const mobileView = useRef();
  const toggleMobileMenu = () => {
    mobileView.current.classList.toggle("open");
  };
  return (
    <React.Fragment>
      <header>
        <div id="brand">
          <div className="logo">
            <img src={CleaningExpert} alt="Cleaning Expert" className="img" />
            <span className="pagename">CLEANING EXPERT</span>
          </div>
          <div className="logo2">
            <img src={WhatsApp} alt="WhatsApp" className="img" />
          </div>
          <div className="logo2">
            <img src={Phone} alt="Phone" className="img" />
          </div>
        </div>
        <nav>
          <ul>
            <li className="dropdown">
              <span>Pest Control</span>
              <span className="material-symbols-outlined">expand_more</span>
              <span>|</span>
            </li>
            <li className="dropdown">
              <span>Home Cleaning</span>
              <span className="material-symbols-outlined">expand_more</span>
              <span>|</span>
            </li>
            <li className="dropdown">
              <span>Covid Disinfection</span>
            </li>
            <li className="cart">
              <span className="material-symbols-sharp">shopping_cart</span>
              <span className="number">2</span>
            </li>
            <li className="free-quote">
              <span>FREE QUOTE</span>
            </li>
          </ul>
        </nav>
        <div id="hamburger-icon" ref={mobileView} onClick={toggleMobileMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <ul className="mobile-menu">
            <li className="dropdown">
              <span>Pest Control</span>
              <span className="material-symbols-outlined">expand_more</span>
              <span>|</span>
            </li>
            <li className="dropdown">
              <span>Home Cleaning</span>
              <span className="material-symbols-outlined">expand_more</span>
              <span>|</span>
            </li>
            <li className="dropdown">
              <span>Covid Disinfection</span>
            </li>
            <li className="cart">
              <span className="material-symbols-sharp">shopping_cart</span>
              <span className="number">2</span>
            </li>
            <li className="free-quote">
              <span>FREE QUOTE</span>
            </li>
          </ul>
        </div>
      </header>

      {/* <div className="header">
        <div className="logo">
          <img src={CleaningExpert} alt="Cleaning Expert" className="img" />
          <span className="pagename">CLEANING EXPERT</span>
        </div> */}

      {/* <div className="right">
        <div className="menu">
          <div className="dropdown">
            <span>Pest Control</span>
            <span className="material-symbols-outlined">expand_more</span>
            <span>|</span>
          </div>
          <div className="dropdown">
            <span>Home Cleaning</span>
            <span className="material-symbols-outlined">expand_more</span>
            <span>|</span>
          </div>
          <div className="dropdown">
            <span>Covid Disinfection</span>
          </div>
        </div>
        <div className="cart">
          <span className="material-symbols-sharp">shopping_cart</span>
          <span className="number">2</span>
        </div>
        <div className="free-quote">
          <span>FREE QUOTE</span>
        </div>
      </div> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default Header;
