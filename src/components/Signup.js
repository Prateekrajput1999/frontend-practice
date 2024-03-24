import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [emailValue, setEmailValue] = useState("prateek rajput");
  const [passwordValue, setPasswordValue] = useState("p@gmail.com");
  const [nameValue, setNameValue] = useState("");

  const handleSignup = async () => {
    try {
        const response = await axios.post("signup/", {
          email: emailValue,
          password: passwordValue,
          name: nameValue,
        });
        console.log("what is response from axios", response);
    } catch (e){
        console.log("error of post response", e)
    }
  };

  return (
    <div className="flex flex-col space-y-3 p-2 items-center w-1/3 border-2 border-black">
      <div className="text-lg">Sign-up here</div>
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
        onClick={handleSignup}
        className="border border-gray-500 hover:bg-green-500 rounded-lg p-1 bg-green-400"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
