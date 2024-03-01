import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./news-latter.css";
import { sendEmailTOUser } from "../../State/home.slice";

const NewsLetter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleCLick = () => {
    console.log({ email });
    dispatch(sendEmailTOUser({ email }));
  };
  return (
    <div className="news-letter">
      <h1>Get exclusive offers on your Email</h1>
      <p>subscribe to our news latter and stay updated</p>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          placeholder="Enter your Email"
        />
        <button onClick={() => handleCLick()}>subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
