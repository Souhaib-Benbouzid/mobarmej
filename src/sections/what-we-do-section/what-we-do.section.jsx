import React from "react";
import { Col, Row } from "reactstrap";
import "./what-we-do.styles.scss";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-section ">
      <h1 className="title">What we do </h1>
      <Row>
        <Col md="3" className="card">
          <h1>websites</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies neque quis ipsum aliquam, vel.
          </p>
        </Col>
        <Col md="3" className="card">
          <h1>websites</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies neque quis ipsum aliquam, vel.
          </p>
        </Col>
        <Col md="3" className="card">
          <h1>websites</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies neque quis ipsum aliquam, vel.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default WhatWeDo;
