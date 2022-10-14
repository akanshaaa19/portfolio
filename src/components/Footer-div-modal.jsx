import React from "react";
import ReactDOM from 'react-dom'
import '../styles/FooterDiv.css'

function Backdrop(){
    return ReactDOM.createPortal(<div className="backdrop" /> , document.getElementById('backdrop-hook'))
}

function Footer(){

    const content = <div className="footer">
    <ul className="f-connect">
    <li> <a rel="noopener noreferrer" href='https://github.com/akanshaaa19' target="_blank"> <i className="fab fa-github fa-xl"></i> </a></li>
    <li> <a rel="noopener noreferrer" href='https://www.linkedin.com/in/akansha-sakhre-21428b1ba/' target="_blank"> <i className="fab fa-linkedin-in  fa-xl"></i></a></li>
    <li> <a rel="noopener noreferrer" href='https://www.instagram.com/akanshaaaa._/' target="_blank"> <i className="fab fa-instagram  fa-xl"></i></a></li>
    <li> <a rel="noopener noreferrer" href='mailto: akanshasakhre@gmail.com' target="_blank"> <i className="far fa-envelope  fa-xl"></i></a></li>
    </ul>
</div>
    return (
        ReactDOM.createPortal(content, document.getElementById('div-hook'))
    )
}

export default Footer