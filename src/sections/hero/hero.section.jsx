import React from "react";
import "./hero.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";

const Hero = () => {
  return (
    <div className="hero section background-img">
      <h1 className="welcome"> Web and Mobile Development</h1>
      <CustomButton>See Work</CustomButton>
    </div>
  );
};

export default Hero;
