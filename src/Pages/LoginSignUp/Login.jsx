import React from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = () => {
    console.log("Login Clicked");
  };
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Login</h1>
        <div className="login-signup-fields">
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
        <button onClick={() => handleLogin()} className="btn">
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
      </div>
    </div>
  );
};

export default Login;
