import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="footerlogo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>
          <Link to="#">Company</Link>
        </li>
        <li>
          <Link to="#">Producst</Link>
        </li>
        <li>
          <Link to="#">Offices</Link>
        </li>
        <li>
          {" "}
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="pintest_icon" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All rights are Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
