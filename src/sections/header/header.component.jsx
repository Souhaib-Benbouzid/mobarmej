import React from "react";
import "./header.styles.scss";
import { Link, Redirect } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        Mobarmij
      </Link>
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
        <Redirect to="/" />
      </div>
    </div>
  );
};

export default Header;
