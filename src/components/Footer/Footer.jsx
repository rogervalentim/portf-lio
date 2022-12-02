import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";



function Footer(){
    return(
        <>
        <footer>
         <p className="text-footer">Feito por Roger valentim 2022</p> 
        <div className="social-media-footer">
        <a href="https://www.linkedin.com/in/rogervalentim33/"  target="_blank">
          <FontAwesomeIcon
            id="icon"
            className="contact-icon"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/rogervalentim"  target="_blank">
          <FontAwesomeIcon
            id="icon"
            className="contact-icon"
            icon={faGithub}
          ></FontAwesomeIcon>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=19994088614&text&type=phone_number&app_absent=0" target="_blank">
        <FontAwesomeIcon
          id="icon"
          className="contact-icon"
          icon={faWhatsapp}
        ></FontAwesomeIcon>
        </a>
      </div>
        </footer>
        </>
    )
}

export default Footer