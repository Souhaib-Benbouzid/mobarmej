import React from "react";
import "../../aos";

import "./featuresCard.styles.scss";
import FeaturesIcon from "../features-icons/featuresIcons.component";

const FeaturesCard = ({ feature }) => {
  const { title, icon, description, id } = feature;
  return (
    <div data-aos="fade-up" data-aos-delay={`${id}00`} className="card col">
      <FeaturesIcon icon={icon} />
      <h6 className="feature-title">{title}</h6>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeaturesCard;
