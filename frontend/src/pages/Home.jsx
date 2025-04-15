import { useNavigate, Link } from "react-router-dom";
import React from "react";

const Home = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the MERN Auth App 👋</h1>
      <p>This is the home page. Feel free to explore:</p>
      <div className="home-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Home;
