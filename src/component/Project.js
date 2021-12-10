import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Project = ({ project }) => {
  const { name, img, repository, technologies, site } = project;

  return (
    <article className="project scale">
      <img src={img} alt={name} className="project-img" />
      <div className="project-details">
        <h3>{name}</h3>
        <div className="project-tech">
          {technologies.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="project-links">
          <a href={repository} className="project-repo">
            <FaGithubSquare className="logo" />
            Code
          </a>
          <a href={site} className="project-repo">
            View
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
