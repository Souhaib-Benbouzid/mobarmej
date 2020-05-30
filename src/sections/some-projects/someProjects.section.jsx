import React from "react";
import { connect } from "react-redux";

import "./someProjects.styles.scss";
import ProjectCard from "../../components/project-card/projectCard.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const SomeProjects = ({ projects }) => {
  return (
    <div className="full-container">
      <div className="projects-container container">
        <div className="projects-title">
          <div>
            <h3 className="some-work-title"> Some of Our Work</h3>
            <p className="projects-catchy-line">
              Take a look at some of our previous projects
            </p>
          </div>
          <CustomButton work> View All </CustomButton>
        </div>
        <div className="some-projects">
          {projects.map(({ id, ...otherProps }) => (
            <ProjectCard key={id} {...otherProps} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projectsReducer.projects_data,
});

export default connect(mapStateToProps)(SomeProjects);
