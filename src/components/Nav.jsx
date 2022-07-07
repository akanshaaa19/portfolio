import React from 'react';
import '../styles/Nav.css'

function Nav(props){
    return(
        <nav>
        <ul className="navbar-nav mr-auto nav">
            <li className="nav-item"><a className="link-nav" href="#home"> /home</a></li>
            <li className="nav-item"><a className="link-nav" href="#about"> /about</a></li>
            <li className="nav-item"><a className="link-nav" href="#skills"> /skills</a></li>
            <li className="nav-item"><a className="link-nav" href="#projects"> /projects</a></li>
        </ul>
        <ul className="connect">
            <li> <a href='https://github.com/akanshaaa19' target="_blank"> <i className="fab fa-github "></i> </a></li>
            <li> <a href='https://www.linkedin.com/in/akansha-sakhre-21428b1ba/' target="_blank"> <i className="fab fa-linkedin-in "></i></a></li>
            <li> <a href='https://www.instagram.com/akanshaaaa._/' target="_blank"> <i className="fab fa-instagram "></i></a></li>
            <li> <a href='mailto: akanshasakhre@gmail.com' target="_blank"> <i className="far fa-envelope "></i></a></li>
            </ul>
    </nav>
    )
}

export default Nav;