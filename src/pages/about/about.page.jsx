import React from "react";
import "../../aos";

import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="intro">
        <h1 data-aos="zoom-in-up" className="title">
          Young team. Big talents.
        </h1>
        <p data-aos="zoom-in-up" data-aos-delay="100" className="description">
          Our focus is always on satisfying the people we work with by making
          sure we deliver the best quality apps that are well designed to give
          you the best outcomes.
        </p>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="200" className="about-img">
        <img src={require("../../assets/img/about.PNG")} alt="about" />
      </div>
      <div className="explain">
        <p data-aos="zoom-in-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          aliquet bibendum enim facilisis. Arcu dictum varius duis at
          consectetur lorem. Enim diam vulputate ut pharetra sit amet.
          Consectetur adipiscing elit pellentesque habitant morbi tristique.
          Felis eget velit aliquet sagittis id consectetur purus. Consectetur
          lorem donec massa sapien faucibus et molestie ac feugiat. Facilisis
          leo vel fringilla est ullamcorper eget nulla facilisi etiam.
        </p>
      </div>
    </div>
  );
};

export default About;
