import { useState } from "react";
import { Link } from "react-router-dom";


import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";


import Icons from "../Icons/Icons";

import "./NavBar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Roger</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="link-navbar">
          <Link to="/">Inicio</Link>
        </li>
        <li className="link-navbar">
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className="link-navbar">
          <Link to="/tecnologias">Tecnologias</Link>
        </li>
        <li className="link-navbar">
          <Link to="/projetos">Projetos</Link>
        </li>
        <li className="link-navbar">
          <Link to="/contato">Contato</Link>
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
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Inicio
                </Link>
              </li>
              <li className="link-navbar">
                <Link to="/sobre" onClick={() => setToggleMenu(false)}>
                  Sobre
                </Link>
              </li>
              <li className="link-navbar">
                <Link to="/tecnologias" onClick={() => setToggleMenu(false)}>
                  Tecnologias
                </Link>
              </li>
              <li className="link-navbar">
                <Link to="/projetos" onClick={() => setToggleMenu(false)}>
                  Projetos
                </Link>
              </li>
              <li className="link-navbar">
                <Link to="/contato" onClick={() => setToggleMenu(false)}>
                  Contato
                </Link>
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