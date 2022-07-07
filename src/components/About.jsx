import React from "react";
import '../styles/About.css'
import image from '../assests/me.jpg';
import resume from '../assests/akansha_resume.pdf';

function About(){
    return(
        <section id="about">

        <div className="about">
            <h2 className="sec-heading">/about me</h2>
            <div className="row">
            <div className="col-6 about-text">
                <p>
                I am currently a third year <b>Computer Science</b> student who has great interest in <b>full-stack development</b> as well as data science. 
                I am someone who loves to take up new challenges and learn new skills. Along with all this I like taking part in Hackathons, meet new people and exchange different ideas.
                </p>

            <a href={resume} download="akanshaResume"><button className="download-btn btn btn-outline-light">Resume <i className="fas fa-download"></i></button></a>

            </div>

            <div className="col-6 about-image">
                <img className="self-picture" src={image} alt = "its me"/>
            </div>
            </div>
            </div>
    </section>
    );
}

export default About;
