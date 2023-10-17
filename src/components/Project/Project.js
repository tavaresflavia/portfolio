import React from 'react';
import "./Project.scss";
import Carousel from '../Carousel/Carousel';

const Project = ({project}) => {
    const {title, description, video, images} = project;

    return (
        <article className = "project">
            <h3 className = "project__title">{title}</h3>
            <p className = "project__description">{description}</p>
            {images && <Carousel images={images}/>}
            {video && <iframe className = "project__video"src={video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>}
           

            
        </article>
    );
};  

export default Project;