import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = ({ type = "signup" }) => {
  const isSignup = type === "signup";
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const navigate = useNavigate();
  // const cookies = new Cookies();
  // console.log("What is cookies", cookies)
  const handleSignup = async () => {
    try {
      await axios.post("signup/", {
        email: emailValue,
        password: passwordValue,
        name: nameValue,
      });
    } catch (e) {
      console.log("error of signup response", e);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("login/", {
        email: emailValue,
        password: passwordValue,
      });
      Cookies.set("signup_accesstoken", response?.data?.accesstoken, {
        expires: new Date(Date.now() + 1800000),
      });
      navigate("/movies");
    } catch (e) {
      console.log("error of login response", e);
    }
  };

  return (
    <div className="flex flex-col space-y-3 p-2 items-center w-1/3 border-2 border-black">
      <div className="text-lg">{isSignup ? "Sign-up" : "Login"} here</div>
      {isSignup && (
        <label className="flex space-x-2">
          <div className="w-16">Name</div>
          <input
            onChange={(e) => setNameValue(e.target.value)}
            className="px-1 border border-black rounded-md"
            placeholder="your name"
            type="text"
            name="name"
            value={nameValue}
          />
        </label>
      )}
      <label className="flex space-x-2">
        <div className="w-16">Email</div>
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          className="px-1 border border-black rounded-md"
          placeholder="email"
          type="email"
          name="email"
          value={emailValue}
        />
      </label>
      <label className="flex space-x-2">
        <div className="w-16">Password</div>
        <input
          onChange={(e) => setPasswordValue(e.target.value)}
          className="px-1 border border-black rounded-md"
          placeholder="password"
          type="password"
          name="password"
          value={passwordValue}
        />
      </label>
      <button
        onClick={isSignup ? handleSignup : handleLogin}
        className="border border-gray-500 hover:bg-green-500 rounded-lg p-1 bg-green-400"
      >
        {isSignup ? "Signup" : "Login"}
      </button>
    </div>
  );
};

export default Signup;
