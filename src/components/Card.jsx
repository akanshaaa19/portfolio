import React from "react";
import '../styles/Card.css';

function Card(props){
    return(
        <div className="project-card col-lg-4 col-md-6">
            <div className="card-header">
            <div className="folder-icon"><i className="fa-solid fa-folder-open fa-2x"></i></div>
                <div className="card-links">
                    <a className="card-link" href={props.github} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-lg"></i></a>
                    <a className="card-link" href={props.link} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-square-arrow-up-right fa-lg"></i></a>
                </div>
            </div>
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="card-content">
                <p>{props.description}</p>
            </div>
            <div className="techStack">
                <p>{props.stack}</p>
            </div>
        </div>
    );
}

export default Card