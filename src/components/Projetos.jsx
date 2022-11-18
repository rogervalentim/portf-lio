import React from "react";
import "../assets/css/Projetos.css";
import ProjetoRocket from "../assets/images/projetos/rocket-pay.png";
import WeatherApp from "../assets/images/projetos/weather_app.png";
import Ecommerce from "../assets/images/projetos/ecommerce.png";
import Lyric from "../assets/images/projetos/lyrics-app.png";

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
                Rocket Pay é um projeto , onde é possível alterar os dados do
                cartão automaticamente ,<br/> com as validações nos campos de
                cadastro do cartão, tudo feito com o javascript dom .
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
              <a href="https://ecommerce-headphone.vercel.app/" target="_blank">
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
                uma página com os detalhes do produto <br />, com a
                funcionabilidade de adicionar o produto selecionado para o
                carrinho e finalizar a compra com o stripe
                <p className="technologies-project">
                  <strong>Tecnologias Utilizadas:</strong>
                  <br />
                  Next js, Sanity, Stripe, Toasting e Api.
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
            <div className="card-container-project-2">
              <div className="card">
                <a
                  href="https://ecommerce-headphone.vercel.app/"
                  target="_blank"
                >
                  <div className="image-project-container">
                    <img
                      className="project-image"
                      src={Lyric}
                      alt="projetos imagem"
                    />
                  </div>
                </a>
              </div>
              <h4 className="name-project">Lyrics App</h4>
              <div className="info-project">
                <p className="description-project">
                  Lyrics app , é um projeto que para mim foi muito bom fazer ,
                  pelas tecnologias utilizadas e por eu gostar banstante de
                  músicas ,<br /> o projeto contém a página de discover onde é
                  possível acessar as músicas mais populares no momento,
                  <br /> around you onde você consegue acessar as músicas do seu
                  país ,<br /> a página de top artist ,que são os artistas mais
                  populares também e última página que é a top charts que é
                  responsavél de exibir as músicas mais buscadas
                  <p className="technologies-project">
                    <strong>Tecnologias Utilizadas:</strong>
                    <br />
                    React, Redux, Vite, Node e Npm, Rappid Api , Geo ipfy,
                    Tailwindcss
                  </p>
                  <div className="btn-container-project">
                    <a
                      href="https://github.com/rogervalentim/app-music"
                      target="_blank"
                    >
                      <button className="btn-link-github">Ver Código</button>
                    </a>
                    <a
                      href="https://roger-music-app.netlify.app/top-charts"
                      target="_blank"
                    >
                      <button className="btn-link-project">
                        Ver o Projeto
                      </button>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projetos;
