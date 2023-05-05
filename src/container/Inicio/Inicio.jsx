import React from "react";
import "./Inicio.css";
import Avatar from "../../assets/images/inicio/avatar.svg";
import Curriculum from "../../assets/images/inicio/curriculo-Roger-Valentim.pdf";
import { TypeAnimation } from "react-type-animation";


function Inicio() {
  return (
    <>
      <section className="home-container" id="home">
        <div className="container-title">
          <h3 className="home-title">Olá eu sou o Roger,</h3>
          <TypeAnimation
            sequence={[
              "Desenvolvedor", 
              1000,
              "Full Stack !",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-animation"
          />
          <a href={Curriculum} target="_blank">
            <button 
            className="link-btn">
            Baixar CV
              </button>
          </a>
        </div>
        <div className="avatar-container">
          <img className="avatar" src={Avatar} alt="avatar inicio" />
        </div>
      </section>
    </>
  );
}

export default Inicio;
