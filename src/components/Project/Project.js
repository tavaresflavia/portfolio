import React from 'react';
import "./Project.scss";

const Project = ({project}) => {
    const {title, description, video} = project;
    console.log(project.video)
    return (
        <article className = "project">
            <h3 className = "project__title">{title}</h3>
            <p className = "project__description">{description}</p>
            {video && <iframe className = "project__video"src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

            
        </article>
    );
};

export default Project;