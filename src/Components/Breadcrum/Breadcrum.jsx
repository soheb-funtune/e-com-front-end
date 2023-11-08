import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrum.css";
import dropdown_icon from "../Assets/dropdown_icon.png";

const Breadcrum = ({ category, name, id }) => {
  console.log(category + "s");
  return (
    <div className="breadcrum-container">
      {/* <Link to={"/"}>Home</Link>
      <img
        className="left-icon"
        src={dropdown_icon}
        alt="dropdown-right-icon"
      /> */}
      <Link to={"/"}>Shop</Link>
      <img
        className="left-icon"
        src={dropdown_icon}
        alt="dropdown-right-icon"
      />
      <Link to={`/${category + "s"}`}>{category + "s"}</Link>
      <img
        className="left-icon"
        src={dropdown_icon}
        alt="dropdown-right-icon"
      />
      <Link to={`/product/${id}`}>
        {name?.length > 12 ? name?.substring(0, 15) : name}
      </Link>
    </div>
  );
};

export default Breadcrum;
