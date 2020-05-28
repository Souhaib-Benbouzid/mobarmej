import React from "react";

import "./featuresCard.styles.scss";
import FeaturesIcon from "../features-icons/featuresIcons.component";

const FeaturesCard = (props) => {
  const { title, icon, description } = props;
  return (
    <div className="card col">
      <FeaturesIcon icon={icon} />
      <h6>{title}</h6>
      <p className="description">{description}</p>
    </div>
  );
};

export default FeaturesCard;
