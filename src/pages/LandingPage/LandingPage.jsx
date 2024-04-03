import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/educase/register");
  };

  const handleLoginClick = () => {
    navigate("/educase/login");
  };

  return (
    <div className="container">
      <div className="home">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit emet,</p>
        <p>Lorem ipsum welcome</p>
        <div className="btn">
          <div>
            {/* Call handleRegisterClick function onClick */}
            <button onClick={handleRegisterClick}>Create Account</button>
          </div>
          <div>
            {/* Call handleLoginClick function onClick */}
            <button className="login" onClick={handleLoginClick}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
