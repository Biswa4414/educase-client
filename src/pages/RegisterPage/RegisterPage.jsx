import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState("");
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    const data = { name, phone, email, password, company };

    if (!name || !phone || !email || !password || !company) {
      alert("Fill all the credentials");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Enter a valid email address");
      return;
    }

    axios
      .post("https://educase-server.vercel.app/auth/register", data)
      .then((res) => {
        if (res.data.emailExists) {
          alert("Email already exists");
          return;
        }
        alert("Register Successfully");
        navigate("/educase/profilePage", { state: { name, email } });
      })
      .catch((error) => {
        alert("Error in registration");
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div>
          <h2>Create your</h2>
        </div>
        <div>
          <h2> PopX account</h2>
        </div>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">
              Full Name<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number<span>*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="check">
            <label>
              Are you an Agency?<span>*</span>
            </label>
            <div className="radio-options">
              <input
                type="radio"
                name="isAgency"
                value="Yes"
                onChange={(e) => setIsAgency(e.target.value)}
              />
              Yes
              <input
                type="radio"
                name="isAgency"
                value="No"
                onChange={(e) => setIsAgency(e.target.value)}
              />
              No
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
