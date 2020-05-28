import React from "react";
import { createStructuredSelector } from "reselect";
import { featuresSelectorAsArray } from "../../redux/features/featuresSelectors";
import { connect } from "react-redux";

import "./why-us.styles.scss";

import FeaturesCard from "../../components/features-card/featuresCard.component";

const WhyUs = ({ features }) => {
  return (
    <div className="container">
      {features.map(({ id, ...otherProps }) => (
        <FeaturesCard key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  features: featuresSelectorAsArray,
});
export default connect(mapStateToProps)(WhyUs);
