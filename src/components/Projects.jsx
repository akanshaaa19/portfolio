import React from "react";
import Card from "./Card";
import projects from "../projects";
import '../styles/Project.css';

function createCard(card){
    return (
        <Card 
            github = {card.github} 
            link = {card.active}
            title = {card.title}
            description = {card.description}
            stack = {card.stack}
            key={card.index}
        />
    )
}


function Projects(){
    return (
        <section id="projects">
            <div className="projects container">
            <h2 className="sec-heading">/projects</h2>

                <div className="project-grid row justify-content-start">
                
                {projects.map(createCard)}
                
                </div>
                <div className="project-btn"><a href="/projects" className="more-btn">View More<i className="fa-solid fa-angle-right"></i></a>    </div>
            </div>
        </section>
    );
}

export default Projects;