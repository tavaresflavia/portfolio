import React from "react";
import Card from "../Card/Card";
import projects from "../../utils/projects";
import './CardList.scss';


const CardList = () => {
    console.log(projects)
  return (
    <section className="projects" id="projects">
        <h2 className="projects__title" >PROJECTS</h2>
      {projects.map((project) => {
       return <Card key={project.title}
        project ={project}/>})}
    </section>
  );
};

export default CardList;
