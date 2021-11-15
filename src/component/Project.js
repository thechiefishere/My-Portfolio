import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Project = ({ project }) => {
  const { name, img, repository, technologies } = project;

  return (
    <article className="project">
      <img src={img} alt={name} className="project-img" />
      <div className="project-details">
        <h3>{name}</h3>
        <div className="project-tech">
          {technologies.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <a href={repository} className="project-repo">
          <FaGithubSquare className="logo" />
          Source Code
        </a>
      </div>
    </article>
  );
};

export default Project;
