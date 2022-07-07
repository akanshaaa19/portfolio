import React from "react";

function Skill(props){
    return(
        <div className="col-lg-4 col-sm-6 skill col-6">
            <i className={props.class}></i>
            <span className="skill-name">{props.name}</span>
        </div>
    )
}

export default Skill;