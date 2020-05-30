import React from "react";

import "./our-services.styles.scss";
import ServicesCard from "../../components/services-card/servicesCard.component";
import { ReactComponent as ServicesLogo } from "../../assets/svg/Classroom-rafiki.svg";

const OurServices = () => {
  return (
    <div className="our-services container">
      <div className="description col">
        <h1 className="services-title">
          We have great experience <br />
          <span className="services-emphasis">
            Delivering Full stack services
          </span>
        </h1>
        <ServicesCard />
      </div>
      <div className="image col">
        <ServicesLogo className="services-logo" />
      </div>
    </div>
  );
};

export default OurServices;
