import React from "react";
import "./CaseStudy.scss";

const workItems = [
  "Refactored legacy components into modular, maintainable structures",
  "Built new features using TypeScript, JavaScript, and SQL",
  "Developed reactive and asynchronous functionality to improve usability",
  "Collaborated with product and QA teams to deliver features from requirements to release",
  "Contributed to improving internal tools and workflow visibility",
];

const impactItems = [
  "Reduced complexity of legacy components through modularization",
  "Enabled faster delivery of new features",
  "Improved usability of internal workflows used daily by teams",
  "Increased visibility into system processes and data",
];

const technologies = ["TypeScript", "JavaScript", "SQL", "REST APIs", "RxJS"];

const CaseStudy = () => {
  return (
    <section className="case-study" id="case-study">
      <h2 className="case-study__title">Case Study</h2>
      <div className="case-study__layout">
        <div className="case-study__intro">
          <p className="case-study__eyebrow">ERP modernization & internal tools</p>
          <p className="case-study__intro-line">
            Real-world product work in an enterprise ERP environment.
          </p>
          <h3 className="case-study__heading">
            ERP Modernization & Internal Tools
          </h3>
          <p className="case-study__summary">
            A real-world engineering case study focused on improving maintainability,
            workflow clarity, and feature delivery inside an enterprise system.
          </p>
        </div>

        <div className="case-study__content">
          <article className="case-study__section">
            <h4 className="case-study__section-title">Context</h4>
            <p className="case-study__text">
              I work on a core ERP platform used to manage enterprise workflows,
              where I contribute to modernizing legacy systems and building new
              product features used in daily operations.
            </p>
          </article>

          <article className="case-study__section">
            <h4 className="case-study__section-title">Problem</h4>
            <p className="case-study__text">
              The system included legacy code and tightly coupled components,
              making it difficult to maintain, extend, and deliver new features
              efficiently. Workflows were not always clear or optimized for
              users.
            </p>
          </article>

          <div className="case-study__split">
            <article className="case-study__section">
              <h4 className="case-study__section-title">What I Did</h4>
              <ul className="case-study__list">
                {workItems.map((item) => (
                  <li className="case-study__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="case-study__section case-study__section--impact">
              <h4 className="case-study__section-title">Impact</h4>
              <ul className="case-study__list">
                {impactItems.map((item) => (
                  <li className="case-study__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="case-study__section">
            <h4 className="case-study__section-title">Technologies</h4>
            <div className="case-study__tags">
              {technologies.map((technology) => (
                <span className="case-study__tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
