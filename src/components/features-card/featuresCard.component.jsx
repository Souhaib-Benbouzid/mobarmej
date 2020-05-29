import React from "react";

import "./featuresCard.styles.scss";
import FeaturesIcon from "../features-icons/featuresIcons.component";

const FeaturesCard = (props) => {
  const { title, icon, description } = props;
  return (
    <div className="card col">
      <FeaturesIcon icon={icon} />
      <h6 className="feature-title">{title}</h6>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeaturesCard;
