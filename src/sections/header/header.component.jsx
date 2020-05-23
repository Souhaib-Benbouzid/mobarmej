import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Mobarmij</div>
      <div className="options">
        <Link to="/about" className="option">
          About
        </Link>
        <Link to="/story" className="option">
          Story
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
