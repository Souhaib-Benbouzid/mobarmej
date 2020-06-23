import React from "react";
import "../../aos";

import "./projectCard.styles.scss";

const ProjectCard = ({ gridLetter, name, imgLink, type }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="600"
      className={`project-card ${gridLetter ? gridLetter : ""}`}
    >
      <img src={imgLink} alt="work" className="project-card-img" />

      <div className="project-description">
        <p className="project-type">{type}</p>
        <p className="project-name">{name}</p>
      </div>
      <div className="card-line"></div>
    </div>
  );
};

export default ProjectCard;
