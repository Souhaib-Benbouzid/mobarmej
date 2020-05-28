import React, { useState } from "react";
import "./header.styles.scss";
import { connect } from "react-redux";

const Header = ({ navItems }) => {
  const [isOpen, setOpen] = useState("");
  const navToggle = () => {
    isOpen === "" ? setOpen("open") : setOpen("");
  };
  return (
    <header>
      <a className="logo" href="/">
        Mobarmij.
      </a>
      <div className="burger" onClick={navToggle}>
        <div className="toggle-button" />
      </div>
      <nav className={`nav ${isOpen}`}>
        {navItems.map((navItem, i) => {
          return (
            <a key={navItem.id} href={navItem.href}>
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
