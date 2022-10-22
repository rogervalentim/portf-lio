import { useState } from "react";
import "../assets/css/NavBar.css";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <header>
    <nav className="nav">
      <a href="#home" className="nav__brand">
          Roger
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#home" onClick={navToggle} className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" onClick={navToggle} className="nav__link">
            Sobre
          </a>
        </li>
        <li className="nav__item">
          <a href="#technologies" onClick={navToggle} className="nav__link">
            Tecnologias
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" onClick={navToggle} className="nav__link">
            Projetos
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" onClick={navToggle} className="nav__link">
            Contato
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
