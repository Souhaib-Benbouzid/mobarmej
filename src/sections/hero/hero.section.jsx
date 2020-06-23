import React from "react";
import "../../aos";

import "./hero.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="cta col">
        <h1 data-aos="fade-down" className="welcome-title">
          Welcome to <span className="mobarmij">MOBARMIJ</span> <br />
          You imagine we create.
        </h1>
        <p data-aos="fade-right" className="welcome-description">
          Mobarmij is a team of skilled developers, be it is a website a web app
          or mobile app, we make your dreams app come alive
        </p>
        <CustomButton>
          Hire us <i className="fas fa-long-arrow-alt-right"></i>
        </CustomButton>
        <CustomButton off>See Work</CustomButton>
      </div>
      <div className="image-div col">
        <img
          data-aos="zoom-in"
          src={require("../../assets/img/hero.PNG")}
          className="image-img"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
