import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, off, work, ...otherButtonProps }) => {
  return (
    <button
      data-aos="zoom-in-up"
      className={`${off ? "off" : ""} ${work ? "work" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
