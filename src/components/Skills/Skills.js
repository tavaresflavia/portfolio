import React from "react";
import { motion as m } from "framer-motion";
import "./Skills.scss";
import skills from "../../utils/skills";
import expressIcon from "../../assets/icons/express.png";
import mysqlColor from "../../assets/icons/mysql-color.svg";

const Skills = () => {
  return (
    <m.section 
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 2.2,
      duration: 0.5,
    }} className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__icons">
        {skills.map((skill) => {
          return (
            <div className="skills__wrap" key={skill.name}>
              <div className="skills__frame">
                <svg
                  style={{ fill: skill.color }}
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox={`0 0 ${skill.width} 512`}>
                  {
                    "<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"
                  }
                  <path d={skill.svg} />
                </svg>
              </div>
              <p className="skills__name">{skill.name}</p>
            </div>
          );
        })}
        <div className="skills__wrap">
          <div className="skills__frame">
            <img className="skills__img" src={expressIcon} alt="express"></img>
          </div>
          <p className="skills__name">Express</p>
        </div>

        <div className="skills__wrap">
          <div className="skills__frame">
            <img className="skills__img" src={mysqlColor} alt="mysql"></img>
          </div>
          <p className="skills__name">MySQL</p>
        </div>
      </div>

      <div className="skills__notes">
        <h3>Currently Learning</h3>
        <p className="skills__notes-content">
          Typescript | MongoDB | Tailwind CSS
        </p>

        <h3>Other Skills</h3>
        <p className="skills__notes-content">
          {" "}
          Excel | VBA | PowerBI | Tableau | Minitab
        </p>
        <h3>Human Languages</h3>
        <p className="skills__notes-content">English | Spanish | Portuguese</p>
      </div>
    </m.section>
  );
};

export default Skills;
