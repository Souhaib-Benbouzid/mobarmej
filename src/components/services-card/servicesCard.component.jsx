import React from "react";
import { connect } from "react-redux";
import "../../aos";

import "./servicesCard.styles.scss";

const ServicesCard = ({ services }) => {
  return (
    <ul className="services-list">
      {services.map((service, index) => (
        <li
          data-aos="fade-right"
          data-aos-delay={`${index}00`}
          key={index}
          className="services-item"
        >
          {service}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  services: state.servicesReducer.services_data,
});

export default connect(mapStateToProps)(ServicesCard);
