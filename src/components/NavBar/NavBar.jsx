import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import "./NavBar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar" id="navbar">
      <div className="app__navbar-logo">
        <h1>Roger</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="link-navbar">
          <a href="#home">Inicio</a>
        </li>
        <li className="link-navbar">
          <a href="#about">Sobre</a>
        </li>
        <li className="link-navbar">
          <a href="#tecnologies">Tecnologias</a>
        </li>
        <li className="link-navbar">
          <a href="#projects">Projetos</a>
        </li>
        <li className="link-navbar">
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="app__navbar-login">
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
        <a
          href="https://api.whatsapp.com/send/?phone=19994088614&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <FontAwesomeIcon
            id="icon"
            className="contact-icon"
            icon={faWhatsapp}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#58a6ff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="link-navbar">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Inicio
                </a>
              </li>
              <li className="link-navbar">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Sobre
                </a>
              </li>
              <li className="link-navbar">
                <a href="#tecnologies" onClick={() => setToggleMenu(false)}>
                  Tecnologias
                </a>
              </li>
              <li className="link-navbar">
                <a href="#projects" onClick={() => setToggleMenu(false)}>
                  Projetos
                </a>
              </li>
              <li className="link-navbar">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rogervalentim33/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    id="icon"
                    className="contact-icon"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://github.com/rogervalentim" target="_blank">
                  <FontAwesomeIcon
                    id="icon"
                    className="contact-icon"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=19994088614&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    id="icon"
                    className="contact-icon"
                    icon={faWhatsapp}
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
