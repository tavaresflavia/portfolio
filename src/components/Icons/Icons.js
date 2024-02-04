import React from "react";
import './Icons.scss'
import skills from "../../utils/skills";
import mysqlIcon from "../../assets/icons/mysql.png";
import expressIcon from "../../assets/icons/express.png";

const Icons = ({ stack }) => {
  return (
    <div className="icons">
      {stack.map((tech) => {
        const skill = skills.filter(
          (skill) => skill.name.toLocaleLowerCase().split(".")[0] === tech
        )[0];
          return ( skill ?
            <svg
              key={skill.name}
              className="icons__svg" 
              style={{ fill: "#D3D3D3" }}
              xmlns="http://www.w3.org/2000/svg"
              height="3rem"
              viewBox={`0 0 ${skill.width} 512`}>
              {
                "<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"
              }
              <path d={skill.svg} />
            </svg> : ""
          );
        }
      )}

      {stack.includes("express") && (
        <img className="icons__img" src={expressIcon} alt="Express icon"></img>
      )}
      {stack.includes("mysql") && (
        <img className="icons__img" src={mysqlIcon} alt="MySQL icon"></img>
      )}
    </div>
  );
};

export default Icons;
