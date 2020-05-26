import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./what-we-do.styles.scss";

const WhatWeDo = () => {
  return (
    <Container>
      <Row className="what-we-do-section border-bottom">
        <Col sm="12" md="4" className="card">
          <i className="icofont-dashboard-web icofont"></i>
          <h6>All kinds of apps</h6>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque.
          </p>
        </Col>
        <Col sm="12" md="4" className="card">
          <i className="icofont-live-support icofont"></i>
          <h6>After delivery support</h6>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque.
          </p>
        </Col>
        <Col sm="12" md="4" className="card">
          <i className="icofont-search-stock icofont"></i>
          <h6>Business oriented products</h6>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWeDo;
