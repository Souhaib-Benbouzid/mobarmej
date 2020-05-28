import React, { useState } from "react";
import "./header.styles.scss";
import { connect } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

// props

const Header = ({ navItems }) => {
  // navbar toggler
  const [isOpen, setOpen] = useState(false);
  const navToggle = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };

  return (
    <Container className="header">
      <Navbar light expand="lg">
        <NavbarBrand href="/">Mobarmij.</NavbarBrand>
        <NavbarToggler onClick={navToggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navItems.map((navItem, i) => {
              return (
                <NavItem key={navItem.id}>
                  <NavLink href={navItem.href}>{navItem.name}</NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  navItems: state.navReducer.navItems,
});

export default connect(mapStateToProps)(Header);
