import React, { useState } from "react";
import { connect } from "react-redux";
import "../../aos";

import "./header.styles.scss";

const Header = ({ navItems }) => {
  const [isOpen, setOpen] = useState("");
  const navToggle = () => {
    isOpen === "" ? setOpen("open") : setOpen("");
  };
  return (
    <header className="container">
      <a data-aos="zoom-in-up" className="logo" href="/">
        Mobarmij.
      </a>
      <div className="burger" onClick={navToggle}>
        <div className="toggle-button" />
      </div>
      <nav className={`nav ${isOpen}`}>
        {navItems.map((navItem, i) => {
          return (
            <a data-aos="fade-down" key={navItem.id} href={navItem.href}>
              {navItem.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

const mapStateToProps = (state, ownProps) => ({
  navItems: state.navReducer.navItems,
});

export default connect(mapStateToProps)(Header);
