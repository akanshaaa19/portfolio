import React from "react";
import '../styles/Footer.css';

function Footer(){
    return (
        <div className="footer">
            <ul className="f-connect">
            <li> <a rel="noopener noreferrer" href='https://github.com/akanshaaa19' target="_blank"> <i className="fab fa-github fa-xl"></i> </a></li>
            <li> <a rel="noopener noreferrer" href='https://www.linkedin.com/in/akansha-sakhre-21428b1ba/' target="_blank"> <i className="fab fa-linkedin-in  fa-xl"></i></a></li>
            <li> <a rel="noopener noreferrer" href='https://www.instagram.com/akanshaaaa._/' target="_blank"> <i className="fab fa-instagram  fa-xl"></i></a></li>
            <li> <a rel="noopener noreferrer" href='mailto: akanshasakhre@gmail.com' target="_blank"> <i className="far fa-envelope  fa-xl"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer;