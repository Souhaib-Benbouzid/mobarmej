import React from "react";
import "./hero.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <Container>
      <Row className="hero" id="sectionOne">
        <Col sm="12" md="6" className="  order-md-2  image">
          <img
            src={require("../../assets/img/hero.PNG")}
            className="img-fluid img-rounded"
            alt=""
          />
        </Col>
        <Col sm="12" md="6" className="cta  order-md-1">
          <h1 className="welcome-title">
            Welcome to <span className="mobarmij">MOBARMIJ</span> <br />
            You imagine we create.
          </h1>
          <p className="welcome-description">
            Mobarmij is a team of skilled developers, be it is a website a web
            app or mobile app, we make your dreams app come alive
          </p>
          <CustomButton>
            Hire us <i className="fas fa-long-arrow-alt-right"></i>
          </CustomButton>
          <CustomButton off>See Work</CustomButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
