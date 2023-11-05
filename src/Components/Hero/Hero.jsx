import React from "react";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARIVILAS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={handIcon} alt="handIcon" />
          </div>
          <p>Collections</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt={"arrowIcon"} />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
