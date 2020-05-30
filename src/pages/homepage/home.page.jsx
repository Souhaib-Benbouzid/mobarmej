import React from "react";
import Hero from "../../sections/hero/hero.section";
import WhyUs from "../../sections/why-us/why-us.section";
import OurServices from "../../sections/our-services/our-services.section";

import "./homepage.styles.scss";
import SomeProjects from "../../sections/some-projects/someProjects.section";

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <WhyUs />
      <OurServices />
      <SomeProjects />
    </React.Fragment>
  );
};

export default HomePage;
