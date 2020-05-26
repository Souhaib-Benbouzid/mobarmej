import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, off, ...otherButtonProps }) => {
  return (
    <button
      className={`${off ? "off" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
