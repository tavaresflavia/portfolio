import React from "react";
import "./Project.scss";
import Carousel from "../Carousel/Carousel";
import githubIcon from "../../assets/icons/github.png";
import liveIcon from "../../assets/icons/live.png";
import Icons from "../Icons/Icons";

const Project = ({ project }) => {
  const { title, description, video, images, liveSite, gitRepo, stack } =
    project;

  return (
    <article className="project">
      <div className="project__title-wrap">
        <h3 className="project__title">{title}</h3>
        <div className="project__icons">
          {liveSite && (
            <a href={liveSite}>
              <img
                src={liveIcon}
                alt="live site icon"
                className="project__icon"></img>
            </a>
          )}
          {gitRepo && (
            <a
              href={gitRepo[0]}
              onClick={() => {
                gitRepo[1] && window.open(gitRepo[1], "_blank");
              }}>
              <img
                src={githubIcon}
                alt="github icon"
                className="project__icon"></img>
            </a>
          )}
        </div>
      </div>
      <p className="project__description">{description}</p>
      {stack && <Icons stack={stack} />}
      {images && <Carousel images={images} />}
      {video &&
        (video.origin === "youtube" ? (
          <iframe
            className="project__video"
            src={video.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        ) : (
          <video
            className="project__video"
            muted
            autoPlay
            src={video.url}
            loop
            controls>
            Your browser does not support the HTML5 Video element.
          </video>
        ))}
    </article>
  );
};

export default Project;
