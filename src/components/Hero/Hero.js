import React from "react";
import { motion as m } from "framer-motion";
import "./Hero.scss";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";

const resumeUrl =
  "https://drive.google.com/file/d/1T23x1zRLjnbzYP9Tw5JXVjhsHyfO2eAt/view?usp=sharing";

const Hero = () => {
  const handleProjectsClick = () => {
    const projects = document.getElementById("projects");

    if (projects) {
      window.scrollTo({
        behavior: "smooth",
        top: projects.offsetTop,
      });
    }
  };

  return (
    <section className="hero" id="home">
      <m.div
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
        className="hero__content">
        <p className="hero__eyebrow">Product-focused Full Stack Developer</p>
        <h1 className="hero__headline">
          Full Stack Developer
        </h1>
        <p className="hero__subheadline">
          Building and modernizing ERP systems, internal tools, and web/mobile
          features that improve real workflows.
        </p>
        <div className="hero__cta">
          <div className="hero__actions">
            <button
              className="hero__button hero__button--primary"
              onClick={handleProjectsClick}>
              View Projects
            </button>
            <a className="hero__button hero__button--secondary" href={resumeUrl}>
              Download Resume
            </a>
          </div>
          <div className="hero__links">
            <a href="https://github.com/tavaresflavia">
              <img src={githubIcon} alt="github icon" className="hero__icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/tavaresflavia/">
              <img
                src={linkedinIcon}
                alt="linkedin icon"
                className="hero__icon"></img>
            </a>
          </div>
        </div>
      </m.div>

      <m.aside
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.6,
        }}
        className="hero__visual"
        aria-label="Product workflow summary">
        <div className="hero__panel">
          <p className="hero__panel-label">Impact Snapshot</p>
          <h2 className="hero__panel-title">Real Systems. Practical Outcomes.</h2>
          <ul className="hero__impact-list">
            <li className="hero__impact-item">
              Modernized ERP architecture for enterprise workflows
            </li>
            <li className="hero__impact-item">
              Improved internal tools used across teams
            </li>
            <li className="hero__impact-item">
              Delivered features used in daily operations
            </li>
          </ul>
        </div>
      </m.aside>
    </section>
  );
};

export default Hero;
