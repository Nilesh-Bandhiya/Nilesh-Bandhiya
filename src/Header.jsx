import React from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src="PointSix-Logo.jpg" alt="PointSix logo" />
        <h1 className="logo-text">PointSix</h1>
        <button className="menu-toggle">
          <FaBars className="menu-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
