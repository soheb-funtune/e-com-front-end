import React, { useState, useEffect } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userData } from "../../State/home.slice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state?.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleRegister Clicked", loginData);
    const fetchData = async () => {
      await axios
        .post("http://localhost:4000/user/login-user", loginData)
        .then((res) => {
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("user", JSON.stringify(res?.data));

          console.log(res.data);

          window.location.reload();
        })
        .catch((err) => console.log({ err }));
    };
    if (loginData?.email && loginData?.password) {
      fetchData();
    }
  };
  // useEffect(() => {
  //   if (user?.token) {
  //     navigate("/");
  //   }
  // }, [user]);

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
