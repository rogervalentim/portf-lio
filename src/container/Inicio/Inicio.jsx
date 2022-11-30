import React from "react";
import "./Inicio.css";
import Avatar from "../../assets/images/inicio/avatar.png";
import Curriculum from "../../assets/images/inicio/curriculo-Roger-Valentim.pdf";


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

    </>
  );
}

export default Inicio;
