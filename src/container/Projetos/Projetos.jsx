import React from "react";
import "./Projetos.css";
import RocketPay from "../../assets/images/projetos/rocket-pay.png";
import WeatherApp from "../../assets/images/projetos/weather_app.png";
import Ecommerce from "../../assets/images/projetos/ecommerce.png";
import Lyrics from "../../assets/images/projetos/lyrics-app.png";
import Restaurant from "../../assets/images/projetos/restaurant.png";

import ProjetoCard from "../../components/Projeto/ProjetoCard";

function Projetos() {
  return (
    <>
      <section className="projects" id="projects">
        <h1>Projetos</h1>
        <div className="projects-cards">
        <div className="project">
          <img src={RocketPay} alt="projeto da rocket" />
          <ProjetoCard
            title="Rocket Pay"
            description="lorem"
            linkGithub="https://github.com/rogervalentim/explorer-lab"
            demo="https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/"
          />
        </div>
        <div className="project">
          <img src={WeatherApp} alt="Aplicativo para ver o clima" />
          <ProjetoCard
            title="Weather App"
            description="lorem"
            linkGithub="https://github.com/rogervalentim/weather_app"
            demo="https://vermillion-froyo-1a0d9e.netlify.app/"
          />
        </div>
        <div className="project">
          <img src={Ecommerce} alt="projeto ecommerce" />
          <ProjetoCard
            title="Ecommerce"
            description="lorem"
            linkGithub="https://github.com/rogervalentim/ecommerce-headphone"
            demo="https://ecommerce-headphone.vercel.app/"
          />
        </div>
        <div className="project">
          <img src={Lyrics} alt="projeto de musica" />
          <ProjetoCard
            title="Lyrics"
            description="lorem"
            linkGithub="https://github.com/rogervalentim/app-music"
            demo="https://app-music-rlvr33zlu-rogervalentim.vercel.app/"
          />
        </div>
        <div className="project">
          <img src={Restaurant} alt="projeto restaurante" />
          <ProjetoCard
            title="Restaurante"
            description="lorem"
            linkGithub="https://github.com/rogervalentim/app-music"
            demo="https://app-music-rlvr33zlu-rogervalentim.vercel.app/"
          />
        </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
