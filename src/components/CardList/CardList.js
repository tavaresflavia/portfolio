import React from "react";
import Card from "../Card/Card";
import projects from "../../utils/projects";


const CardList = () => {
    console.log(projects)
  return (
    <section className="projects">
      {projects.map((project) => {
       return <Card 
        project ={project}/>})}
    </section>
  );
};

export default CardList;
