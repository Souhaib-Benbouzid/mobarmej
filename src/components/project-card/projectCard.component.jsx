import React from "react";

import "./projectCard.styles.scss";

const ProjectCard = ({ name, type, imgLink }) => {
  return (
    <div className="project-card ">
      <img src={imgLink} alt="work" className="project-card-img" />
      <div className="project-description">
        <p className="project-type">{type}</p>
        <p className="project-name">{name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
