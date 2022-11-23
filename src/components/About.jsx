import React from "react";
import "../styles/About.css";
import image from "../assests/me.jpg";
import resume from "../assests/akansha_resume.pdf";

function About() {
  return (
    <section id="about">
      <div className="about">
        <h2 className="sec-heading">/about me</h2>
        <div className="row">
          <div className="col-6 about-text">
            <p>
              I'm a third-year computer science student deeply interested in
              full-stack development. I enjoy learning new things and taking on
              new challenges. Along with all this, I enjoy attending hackathons,
              networking with new people, and sharing ideas.
            </p>
            <a href={resume} download="akanshaResume">
              <button className="download-btn btn btn-outline-light">
                Resume <i className="fas fa-download"></i>
              </button>
            </a>
          </div>

          <div className="col-6 about-image">
            <img className="self-picture" src={image} alt="its me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
