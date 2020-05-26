import React from "react";
import "./footer.styles.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>&copy 2020 - Mobarmij</p>
      </div>
      <div className="social">
        <Link to="#" className="support">
          Contact Us
        </Link>
        <Link to="#" className="support">
          Facebook
        </Link>
        <Link to="#" className="support">
          Instagram
        </Link>
        <Link to="#" className="support">
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default Footer;
