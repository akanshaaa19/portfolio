import React from "react";
import '../styles/Home.css';

function Home(props){
    return(
        <section id="home">
            <div className="intro">
                <h1 className="home-heading"><span className="hi">hi,</span> <span className="name">akansha</span> here.</h1>
                <p className="home-p ">i am a sophmore computer science student, interested in web development, data science, and machine learning. </p>
                <a href='mailto: akanshasakhre@gmail.com' target="_blank"> <button className="hi-btn btn btn-outline-light"><i className="fa-solid fa-envelope fa-lg"></i> Say Hi!</button></a>
        </div>  
        </section>
    );
}

export default Home;