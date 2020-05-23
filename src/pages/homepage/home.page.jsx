import React from "react";
import Hero from "../../sections/hero/hero.section";
import WhatWeDo from "../../sections/what-we-do-section/what-we-do.section";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <WhatWeDo />
    </div>
  );
};

export default HomePage;
