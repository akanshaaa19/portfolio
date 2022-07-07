import React from "react";
import Skill from './Skill';
import skills from '../skills';
import '../styles/Skill.css';


function createSkill(skill){
    return <Skill class = {skill.class} name = {skill.name} key={skill.key}/>
}

function Skills(){



    return(
        <section id="skills">
            <div className="skills">
                <h2 className="sec-heading">/skills</h2>
                <div className="row skill-list">
                    {skills.map(createSkill)}
                </div>
            <p className="skill-text">I'm also experienced in <b>EJS, jQuery, and Mongoose</b>.</p>
            </div>
        </section>
    );
}

export default Skills;