import React from "react";
import { connect } from "react-redux";
import "../../aos";

import "./someProjects.styles.scss";
import ProjectCard from "../../components/project-card/projectCard.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const SomeProjects = ({ projects, number }) => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h1 data-aos="fade-up" className="some-work-title">
          Our Work
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="projects-catchy-line"
        >
          Take a closer look at some of our previous projects, so you know
          exactly what to expect from us.
        </p>
      </div>

      <div className="container some-projects">
        {projects
          .filter((project, index) => index < number)
          .map(({ id, ...otherProps }) => (
            <ProjectCard key={id} {...otherProps} />
          ))}
      </div>
      <CustomButton
        data-aos="zoom-in-up"
        data-aos-delay="900"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        off
        work
      >
        View All
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projectsReducer.projects_data,
});

export default connect(mapStateToProps)(SomeProjects);
