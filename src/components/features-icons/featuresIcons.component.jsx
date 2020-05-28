import React from "react";

const FeaturesIcon = ({ icon }) => {
  return (
    <i
      className={`icofont-${icon === "dashboard-web" ? "dashboard-web " : ""}${
        icon === "live-support" ? "live-support " : ""
      }${icon === "search-stock" ? "search-stock " : ""}
          icofont`}
    ></i>
  );
};

export default FeaturesIcon;
