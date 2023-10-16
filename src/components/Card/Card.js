import React from 'react';
import "./Card.scss";

const Card = ({project}) => {
    const {title, description, video} = project;
    console.log(project.video)
    return (
        <article className = "article">
            <h3 className = "article__title">{title}</h3>
            <p className = "article__description">{description}</p>
            {video && <iframe className = "article__video"src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

            
        </article>
    );
};

export default Card;