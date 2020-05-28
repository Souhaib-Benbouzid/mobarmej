import React from "react";

import "./our-services.styles.scss";

const OurServices = () => {
  return (
    <div className="our-services border-bottom">
      <div className="description col">
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
      </div>
      <div className="image col">
        <img
          src={require("../../assets/img/dashboard.PNG")}
          className="img-fluid img-rounded"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurServices;
