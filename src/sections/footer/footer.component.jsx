import React from "react";
import "./footer.styles.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div class="copyright">
        <p>&copy 2020 - Mobarmij</p>
      </div>
      <div class="social">
        <Link to="#" class="support">
          Contact Us
        </Link>
        <Link to="#" class="support">
          Facebook
        </Link>
        <Link to="#" class="support">
          Instagram
        </Link>
        <Link to="#" class="support">
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default Footer;
