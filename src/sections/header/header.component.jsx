import React from "react";
import "./header.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleNav } from "../../redux/navigation/nav-actions";
import { navStateSelector } from "../../redux/navigation/nav-selectors";

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

const Header = ({ toggle, isOpen }) => {
  return (
    <Container className="header">
      <Navbar light expand="md">
        <NavbarBrand href="/">Mobarmij.</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <button className="close-nav" onClick={toggle}>
              <i class="fas fa-times"></i>
            </button>
            <NavItem>
              <NavLink href="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: navStateSelector,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleNav()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
