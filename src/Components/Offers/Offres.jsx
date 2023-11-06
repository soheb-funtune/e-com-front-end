import React from "react";
import "./offers.css";
import exclusiveImage from "../Assets/exclusive_image.png";

const Offres = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveImage} alt="exclusiveImage" />
      </div>
    </div>
  );
};

export default Offres;
