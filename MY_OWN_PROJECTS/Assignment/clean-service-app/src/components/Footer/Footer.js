import "./Footer.css";
import PlayStore from "./../../assets/black-playstore 1.png";
import Insta from "./../../assets/Vector-3.png";
import Twitter from "./../../assets/icons8-twitter.png";
import LinkedIn from "./../../assets/linkedin-logo 1.png";
import Fb from "./../../assets/facebook 1.png";
import Youtube from "./../../assets/youtube.png";
import Pintrest from "./../../assets/pinterest-social-logo.png";

const obj = [
  {
    img: Insta,
    alt: "Instagram",
  },
  {
    img: Twitter,
    alt: "Twitter",
  },
  {
    img: LinkedIn,
    alt: "Linked In",
  },
  {
    img: Fb,
    alt: "FaceBook",
  },
  {
    img: Youtube,
    alt: "Youtube",
  },
  {
    img: Pintrest,
    alt: "pintrest",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="page-links">
        <span>About Us</span>
        <span>Blog</span>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>Offers and Gift Cards</span>
        <span>Contact Us</span>
      </div>
      <div className="play-store">
        <span>Download Oyebusy App</span>
        <span>
          <img src={PlayStore} alt="Download From Google Play" />
        </span>
      </div>
      <div className="share">
        {obj.map((image, idx) => {
          return <img key={idx} src={image.img} alt={image.alt} />;
        })}
      </div>
      <span className="copy-rights">© 2022 House Cleaning Expert</span>
    </div>
  );
};

export default Footer;
