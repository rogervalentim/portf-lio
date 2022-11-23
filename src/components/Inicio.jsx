import React from "react";
import "../assets/css/Inicio.css";
import Avatar from "../assets/images/inicio/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Curriculum from "../assets/images/inicio/curriculo-Roger-Valentim.pdf";


function Inicio() {
  return (
    <>
      <section className="home-container" id="home">
        <div className="container-title">
          <h3 className="home-title">Olá eu sou o Roger,</h3>
          <h3 className="text-animation">
            Desenvolvedor Web
            <br></br>Full Stack !
          </h3>
          <a href={Curriculum} target="_blank">
            <button className="link-btn">
            Baixar CV
            </button>
            </a>
        </div>
        <div className="avatar-container">
          <img className="avatar" src={Avatar} alt="avatar inicio" />
        </div>
      </section>

      <section className="social-media">
        <a href="https://www.linkedin.com/in/rogervalentim33/" target="_blank">
          <FontAwesomeIcon
            id="icon"
            className="contact-icon"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/rogervalentim" target="_blank">
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
      </section>
    </>
  );
}

export default Inicio;
