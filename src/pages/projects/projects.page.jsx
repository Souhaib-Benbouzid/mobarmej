import React from "react";
import { connect } from "react-redux";

import "./projects.styles.scss";

import SomeProjects from "../../sections/some-projects/someProjects.section";

const Projects = ({ projects }) => {
  return (
    <div className="projects-page">
      <SomeProjects number={8} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projectsReducer.projects_data,
});
export default connect(mapStateToProps)(Projects);
