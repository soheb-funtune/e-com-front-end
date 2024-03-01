import React, { useState, useEffect } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userData, setError, LoginUser } from "../../State/home.slice";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

const showMessageFun = (text) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    title: "",
    text: text,
    icon: "info",
  }).then((res) => {
    if (res) {
      window.location.reload();
    }
  });
};

const Login = () => {
  const { user } = useSelector((state) => state?.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleRegister Clicked", loginData);
    dispatch(LoginUser(loginData));
  };

  return (
    <div className="login-signup">
      {/* <button  >increment </button> */}
      <form onSubmit={handleSubmit} className="login-signup-container">
        <h1>Login</h1>
        <div className="login-signup-fields">
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={loginData?.email}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={loginData?.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div>
          {" "}
          <p className="aleady-have-account">
            Not have an Account{" "}
            <Link style={{ color: "white" }} to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
