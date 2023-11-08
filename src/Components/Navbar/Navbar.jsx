import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p className="nav-logo-p">SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => setMenu("shop")}
        >
          <Link to={"/"}>Shop</Link>
        </li>
        <li
          className={menu === "mens" ? "active" : ""}
          onClick={() => setMenu("mens")}
        >
          <Link to={"/mens"}>Mens</Link>
        </li>
        <li
          className={menu === "womens" ? "active" : ""}
          onClick={() => setMenu("womems")}
        >
          <Link to={"/womens"}>Womens</Link>
        </li>
        <li
          className={menu === "kids" ? "active" : ""}
          onClick={() => setMenu("kids")}
        >
          <Link to={"/kids"}>Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          {" "}
          <Link to={"/login"}>Login</Link>
        </button>
        <div style={{ position: "relative" }}>
          <Link to={"/cart"}>
            <img src={cartIcon} alt="cart-icon" />
            <div className="nav-cart-count">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
