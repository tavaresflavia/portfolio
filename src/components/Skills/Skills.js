import React from "react";
import { motion as m } from "framer-motion";
import "./Skills.scss";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["TypeScript", "React", "JavaScript", "RxJS", "HTML", "CSS", "SASS"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "SQL",
      "MS SQL",
      "MySQL",
      "Express",
      "API Design",
      "Modular Architecture",
    ],
  },
  {
    title: "Data & Reporting",
    secondary: true,
    skills: ["Power BI", "Tableau"],
  },
  {
    title: "Tools & Platforms",
    secondary: true,
    skills: ["Git", "Jira", "Capacitor (Mobile Apps)"],
  },
];

const primarySkills = ["TypeScript", "React", "Node.js", "SQL"];

const Skills = () => {
  return (
    <m.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 2.2,
        duration: 0.5,
      }}
      className="skills"
      id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article
            className={`skills__group ${
              group.secondary ? "skills__group--secondary" : ""
            }`}
            key={group.title}>
            <h3 className="skills__group-title">{group.title}</h3>
            <div className="skills__tags">
              {group.skills.map((skill) => (
                <span
                  className={`skills__tag ${
                    primarySkills.includes(skill) ? "skills__tag--primary" : ""
                  }`}
                  key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </m.section>
  );
};

export default Skills;
