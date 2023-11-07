import React from "react";
import "./news-latter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get exclusive offers on your Email</h1>
      <p>subscribe to our news latter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your Email" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
