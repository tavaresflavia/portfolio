import React from 'react';

const Card = ({project}) => {
    const {title, description} = project;
    console.log(project)
    return (
        <article className = "article">
            <h2 className = "article__title">{title}</h2>
            <p className = "article__description">{description}</p>
            <div className = "article__video">video</div>

            
        </article>
    );
};

export default Card;