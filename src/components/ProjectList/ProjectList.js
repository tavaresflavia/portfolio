import React from "react";
import Project from "../Project/Project";
import projects from "../../utils/projects";
import './ProjectList.scss';


const ProjectList = () => {
  return (
    <section className="projects" id="projects">
        <h2 className="projects__title" >Projects</h2>
      {projects.map((project) => {
       return <Project key={project.title}
        project ={project}/>})}
    </section>
  );
};

export default ProjectList;
