import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import Icons from "../Icons/Icons";

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
    {/* icons  */}

    <div className="app__navbar-icons">
      <Icons />
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
              <li className="link-icons">
              <Icons />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;