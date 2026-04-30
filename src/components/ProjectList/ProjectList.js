import React from "react";
import Project from "../Project/Project";
import projects from "../../utils/projects";
import './ProjectList.scss';


const ProjectList = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__intro">
        Product-focused builds that improve workflows, structure data, and
        support real user decisions.
      </p>
      <div className="projects__grid">
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
