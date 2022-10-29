import React from "react";
import "../assets/css/Footer.css";
import "../assets/css/Inicio.css";
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
        <section className="social-media">
        <a href="https://www.linkedin.com/in/rogervalentim33/"  target="_blank">
          <FontAwesomeIcon
            id="linkedin-icon"
            className="contact-icon"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/rogervalentim"  target="_blank">
          <FontAwesomeIcon
            id="github-icon"
            className="contact-icon"
            icon={faGithub}
          ></FontAwesomeIcon>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=19994088614&text&type=phone_number&app_absent=0" target="_blank">
        <FontAwesomeIcon
          id="whatsapp-icon"
          className="contact-icon"
          icon={faWhatsapp}
        ></FontAwesomeIcon>
        </a>
      </section>
        <h3>copywrite 2022</h3>
        </footer>
        </>
    )
}

export default Footer