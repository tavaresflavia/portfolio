import React from 'react';
import './Skills.scss';
import skills from '../../utils/skills';
import expressIcon from '../../assets/icons/express.png'
import mysqlIcon from '../../assets/icons/mysql.png'

const Skills = () => {
    return (
        <section className='skills' id="skills">
            
        <h2 className="skills__title" >SKILLS</h2>
        <div className='skills__icons'>
        {skills.map( (skill) => {
            return <div className='skills__wrap' ><div className='skills__frame'>
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox={`0 0 ${skill.width} 512`}>{"<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"}<style>{"svg{fill:#d3d3d3}"}</style><path d={skill.svg} /></svg>
              </div>
              <p className='skills__name'>{skill.name}</p></div>
        })}
        <div className='skills__wrap' >
        <div className='skills__frame'> 
        <img className='skills__img' src={expressIcon} alt="express"></img>
        </div>
        <p className='skills__name'>Express</p>
        </div>

        <div className='skills__wrap' >
        <div className='skills__frame'> 
        <img className='skills__img' src={mysqlIcon} alt="mysql"></img>
        </div>
        <p className='skills__name'>MySQL</p>
        </div>
        </div>

        <div className='skills__notes'>
        <h3>Currently learning</h3>
       <p className='skills__notes-content'>Typescript | MongoDB | Tailwind CSS</p>

        <h3>Other Skills</h3>
        <p className='skills__notes-content'> Excel | VBA | PowerBI | Tableau | Minitab</p>
        <h3>Languages</h3>
        <p className='skills__notes-content'>English | Spanish | Portuguese</p>

        </div>

   

        
        
            
        </section>
    );
};

export default Skills;