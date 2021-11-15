import React from "react";
import { useGlobalContext } from "../context";
import Project from "./Project";

const Projects = () => {
  const { projects } = useGlobalContext();

  return (
    <section className="section projects">
      <header className="section-header">
        <h1>Projects</h1>
        <div className="line"></div>
      </header>
      <section className="projects-list">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </section>
    </section>
  );
};

export default Projects;
