import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    const data = { email, password };

    // Check if any field is empty
    if (!email || !password) {
      alert("Fill all the credentials");
      return;
    }
    axios
      .post("https://educase-server-1.onrender.com/auth/login", data)
      .then((res) => {
        console.log(res.data.exists === false);
        if (res.data.exists === false) {
          alert("Email or Username not exist");
          return;
        } else if (res.data.pwExists === false) {
          alert("Invalid Password");
          return;
        } else {
          alert("Login Successfully");
          navigate("/educase/profilePage");
        }
      })
      .catch((error) => {
       alert("Error",);
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Signin to your</h2>
        <span>
          <h2 className="second">PopX account</h2>
        </span>
        <p>Lorem ipsum dolor sit amet</p>
        <p> consectetur, adipisicing elit.</p>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
