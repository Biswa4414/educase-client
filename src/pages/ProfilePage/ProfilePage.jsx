import React from "react";
import "./profile.css";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const { name, email } = location.state || {};
  return (
    <div className="profile-container">
      <div className="account-settings">
        <h2>Account Settings</h2>
      </div>
      <div className="profile-info">
        <div className="profile-pic">
          {/* Profile picture goes here */}
          <img
            src="data:image/png;base64,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"
            alt="Profile Picture"
          />
        </div>
        <div className="user-details">
          <h3>{name}</h3>
          <h5>{email}</h5>
          <div className="about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
