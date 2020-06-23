import React from "react";
import "../../aos";

import "./footer.styles.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div data-aos="zoom-in-up" className="logo">
        <h3>Mobarmij.</h3>
        <p>The best dev agency out there!</p>
        <p>
          <i className="icofont-copyright"></i> all rights reserved
        </p>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="150" className="social">
        <h3>Stay connected</h3>
        <ul>
          <li>
            <Link to="#">
              <i className="icofont-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="icofont-linkedin"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="300" className="contact-info">
        <h3>Contact info</h3>
        <ul>
          <li>
            <i className="icofont-phone"></i> +213 674504789
          </li>
          <li>
            <i className="icofont-ui-email"></i> mobarmej@dev.com
          </li>
          <li>
            <i className="icofont-location-pin"></i> Boumerdes, Boumerdes,
            Algeria
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
