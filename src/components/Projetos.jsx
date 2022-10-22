import React from "react";
import "../assets/css/Projetos.css";
import Projeto from "../assets/images/projetos/projetos.png";
import ProjetoRocket from "../assets/images/projetos/rocket-pay.png";

function Projetos() {
  return (
    <>
      <section className="projects" id="projects">
        <h4 className="projects-title">Projetos</h4>
        <section className="cards-projects">
          <div className="card-container-project">
            <div className="card">
              <a href="https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/">
                <img
                  className="project-rocket"
                  src={ProjetoRocket}
                  alt="projetos imagem"
                />
              </a>
            </div>
            <div className="info-project">
            <h4 className="name-project">Rocket Pay</h4>
            <p className="description-project">
              O Rocketpay é um componente que simula o formulário de
              preenchimento de cartão de crédito,
              <br /> onde é possível adicionar máscara aos inputs e atualizar
              elementos HTML via DOM.<br/>
            <p className="technologies-project">
              <strong>Tecnologias Utilizadas:</strong><br/>
              HTML e CSS, JavaScript e JSON, Node e NPM, Vite, IMask
              </p>
              <div className="btn-container-project">
                <a href="https://github.com/rogervalentim/explorer-lab">
                  <button className="btn-link-github">Ver Código</button>
                </a>
                <a href="https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/">
                  <button className="btn-link-project">Ver o Projeto</button>
                </a>
              </div>
            </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projetos;
