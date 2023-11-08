import React from "react";

import "./LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
        <button className="btn">Continue</button>
        <div>
          {" "}
          <p className="aleady-have-account">
            Already have an Account <span>Login</span>
          </p>
          <div className="login-signup-agree">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
