import React from "react";
import "../assets/css/Projetos.css";
import ProjetoRocket from "../assets/images/projetos/rocket-pay.png";
import WeatherApp from "../assets/images/projetos/weather_app.png";
import Ecommerce from "../assets/images/projetos/ecommerce.png";

function Projetos() {
  return (
    <>
      <section className="projects" id="projects">
        <h4 className="projects-title">Projetos</h4>
        <section className="cards-projects">
          <div className="card-container-project">
            <div className="card">
              <a href="https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/">
                <div className="image-project-container">
                  <img
                    className="project-image"
                    src={ProjetoRocket}
                    alt="projetos imagem"
                  />
                </div>
              </a>
            </div>
            <h4 className="name-project">Rocket Pay</h4>
            <div className="info-project">
              <p className="description-project">
                <p className="technologies-project">
                  <strong>Tecnologias Utilizadas:</strong>
                  <br />
                  HTML e CSS, JavaScript e JSON, Node e NPM, Vite, IMask
                </p>
                <div className="btn-container-project">
                  <a
                    href="https://github.com/rogervalentim/explorer-lab"
                    target="_blank"
                  >
                    <button className="btn-link-github">Ver Código</button>
                  </a>
                  <a
                    href="https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/"
                    target="_blank"
                  >
                    <button className="btn-link-project">Ver o Projeto</button>
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="card-container-project-2">
            <div className="card">
              <a
                href="https://vermillion-froyo-1a0d9e.netlify.app/"
                target="_blank"
              >
                <div className="image-project-container">
                  <img
                    className="project-image"
                    src={WeatherApp}
                    alt="projetos imagem"
                  />
                </div>
              </a>
            </div>
            <h4 className="name-project">Weather app</h4>
            <div className="info-project">
              <p className="description-project">
                Weather app é um projeto desenvolvido para o usuário ter acesso
                ao clima de cidades do mundo inteiro
                <p className="technologies-project">
                  <strong>Tecnologias Utilizadas:</strong>
                  <br />
                  HTML e CSS, JavaScript e API.
                </p>
                <div className="btn-container-project">
                  <a
                    href="https://github.com/rogervalentim/weather_app"
                    target="_blank"
                  >
                    <button className="btn-link-github">Ver Código</button>
                  </a>
                  <a
                    href="https://vermillion-froyo-1a0d9e.netlify.app/"
                    target="_blank"
                  >
                    <button className="btn-link-project">Ver o Projeto</button>
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="card-container-project-2">
            <div className="card">
              <a
                href="https://ecommerce-headphone.vercel.app/"
                target="_blank"
              >
                <div className="image-project-container">
                  <img
                    className="project-image"
                    src={Ecommerce}
                    alt="projetos imagem"
                  />
                </div>
              </a>
            </div>
            <h4 className="name-project">Ecommerce</h4>
            <div className="info-project">
              <p className="description-project">
                Ecommerce é um projeto full stack , com uma página inicial, com
                uma página com os  detalhes do produto <br/>, com a funcionabilidade de
                adicionar o produto selecionado para o carrinho e finalizar a
                compra com o stripe
                <p className="technologies-project">
                  <strong>Tecnologias Utilizadas:</strong>
                  <br />
                  NEXTJS, SANITY, STRIPE, TOASTING e API.
                </p>
                <div className="btn-container-project">
                  <a
                    href="https://github.com/rogervalentim/ecommerce-headphone"
                    target="_blank"
                  >
                    <button className="btn-link-github">Ver Código</button>
                  </a>
                  <a
                    href="https://ecommerce-headphone.vercel.app/"
                    target="_blank"
                  >
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
