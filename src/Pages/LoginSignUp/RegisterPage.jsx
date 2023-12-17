import React, { useState } from "react";
import axios from "axios";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleRegister Clicked", registerData);
    const fetchData = async () => {
      await axios
        .post("http://localhost:4000/user/create-user", registerData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log({ err }));
    };
    if (
      registerData?.username &&
      registerData?.email &&
      registerData?.password
    ) {
      fetchData();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="login-signup">
      <div className="login-signup-container">
        <h1>Register</h1>
        <div className="login-signup-fields">
          <input
            type="text"
            placeholder="Enter Name"
            name="username"
            value={registerData?.username}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={registerData?.email}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={registerData?.password}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div>
          {" "}
          <p className="aleady-have-account">
            Already have an Account{" "}
            <Link style={{ color: "white" }} to={"/login"}>
              Login
            </Link>
          </p>
          <div className="login-signup-agree">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
