import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import dropdown_icon from "../Assets/dropdown_icon.png";
import { useGetContext } from "../../Context/ShopContext/ShopContext";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(location?.pathname);
  const { cartItems } = useGetContext();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menu, setMenu] = useState("shop");

  useEffect(() => {
    if (location?.pathname) {
      navigate(location?.pathname);
      // console.log(location?.pathname?.split("/"));
      setMenu(location?.pathname?.split("/")?.[1]);
    }
  }, [location?.pathname]);

  const handleLogout = () => {
    localStorage?.removeItem("token");
    // navigate("/");
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p className="nav-logo-p">SHOPPER</p>
      </div>
      {localStorage?.getItem("token") ? (
        <>
          <ul className="nav-menu">
            <li
              className={menu === "shop" ? "active-anchor" : ""}
              onClick={() => setMenu("shop")}
            >
              <Link to={"/"}>Shop</Link>
            </li>
            <li
              className={menu === "mens" ? "active-anchor" : ""}
              onClick={() => setMenu("mens")}
            >
              <Link to={"/mens"}>Mens</Link>
            </li>
            <li
              className={menu === "womens" ? "active-anchor" : ""}
              onClick={() => setMenu("womens")}
            >
              <Link to={"/womens"}>Womens</Link>
            </li>
            <li
              className={menu === "kids" ? "active-anchor" : ""}
              onClick={() => setMenu("kids")}
            >
              <Link to={"/kids"}>Kids</Link>
            </li>
          </ul>

          <div className="nav-login-cart">
            <div className="mobile-nav-menu">
              <h3 onClick={() => setMobileMenu(!mobileMenu)}>
                Categories{" "}
                <img
                  className="drop-icon"
                  src={dropdown_icon}
                  style={{ width: "13px", height: "10px" }}
                  alt="dropdown_icon"
                />
              </h3>

              <ul className={`mobile-ul ${mobileMenu ? "show-mobile" : ""}`}>
                <li onClick={() => setMobileMenu(false)}>
                  <Link to={"/"}>Shop</Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link to={"/mens"}>Mens</Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link to={"/womens"}>Womens</Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link to={"/kids"}>Kids</Link>
                </li>
              </ul>
            </div>{" "}
            <button onClick={handleLogout}>Logout</button>
            <div style={{ position: "relative" }}>
              <Link to={"/cart"}>
                <img src={cartIcon} alt="cart-icon" />
                <div className="nav-cart-count">{cartItems?.totalCount}</div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div style={{ flex: 1 }}></div>
      )}
    </div>
  );
};

export default Navbar;
