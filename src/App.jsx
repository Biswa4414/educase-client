import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/educase/landingPage" />} />
        <Route path="/educase/register" element={<RegisterPage />} />
        <Route path="/educase/login" element={<LoginPage />} />
        <Route path="/educase/landingPage" element={<LandingPage />} />
        <Route path="/educase/profilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
