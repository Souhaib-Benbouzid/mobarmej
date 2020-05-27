import React from "react";
import { Col, Row } from "reactstrap";
import "./our-services.styles.scss";

const OurServices = () => {
  return (
    <Row className="our-services border-bottom">
      <Col sm="12" md="6" className="description">
        <h1 className="services-title">
          We have great experience <br />{" "}
          <span className="services-emphasis">
            Delivering Full stack services
          </span>
        </h1>
        <ul className="services-list">
          <li> Web design</li>
          <li> Web development</li>
          <li> android / iOS development</li>
          <li>Windows Apps</li>
          <li>Search engine optimization</li>
          <li>Branding</li>
          <li>Online marketing</li>
        </ul>
      </Col>
      <Col sm="12" md="6" className="image">
        <img
          src={require("../../assets/img/dashboard.PNG")}
          className="img-fluid img-rounded"
          alt=""
        />
      </Col>
    </Row>
  );
};

export default OurServices;
