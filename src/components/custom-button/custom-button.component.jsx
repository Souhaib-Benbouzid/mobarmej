import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, off, work, ...otherButtonProps }) => {
  return (
    <button
      className={`${off ? "off" : ""} ${work ? "work" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
