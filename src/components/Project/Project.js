import React from "react";
import "./Project.scss";

const stackLabels = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  redux: "Redux",
  sass: "SASS",
  tailwind: "Tailwind",
  express: "Express",
  node: "Node.js",
  mysql: "MySQL",
  mongodb: "MongoDB",
};

const Project = ({ project }) => {
  const {
    title,
    problem,
    description,
    impact = [],
    images,
    liveSite,
    gitRepo,
    stack = [],
    featured,
  } = project;

  const repoLinks = Array.isArray(gitRepo) ? gitRepo : gitRepo ? [gitRepo] : [];
  const previewImage = images?.[0];

  return (
    <article className={`project ${featured ? "project--featured" : ""}`}>
      <div className="project__content">
        {featured && <p className="project__eyebrow">Featured Project</p>}
        <h3 className="project__title">{title}</h3>
        <p className="project__problem">{problem || description}</p>
        {impact.length > 0 && (
          <ul className="project__impact">
            {impact.map((item) => (
              <li className="project__impact-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {stack.length > 0 && (
          <div className="project__stack">
            {stack.map((tech) => (
              <span className="project__tag" key={tech}>
                {stackLabels[tech] || tech}
              </span>
            ))}
          </div>
        )}
        <div className="project__actions">
          {liveSite && (
            <a className="project__button project__button--primary" href={liveSite}>
              Live
            </a>
          )}
          {repoLinks.map((repo, index) => (
            <a className="project__button" href={repo} key={repo}>
              {index === 0 ? "Code" : "API"}
            </a>
          ))}
        </div>
      </div>
      <div className="project__preview">
        {previewImage ? (
          <img
            className="project__image"
            src={previewImage.url}
            alt={`${title} preview`}
          />
        ) : (
          <div className="project__placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default Project;
