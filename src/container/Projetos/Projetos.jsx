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
              description="O rocket pay é um projeto, 
              onde é possível adicionar valores ao cartão simultaneamente 
              e com as validações de cada tipo de cartão"
              linkGithub="https://github.com/rogervalentim/explorer-lab"
              demo="https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/"
            />
          </div>
          <div className="project">
            <img src={WeatherApp} alt="Aplicativo para ver o clima" />
            <ProjetoCard
              title="Weather App"
              description="O Weather App é um projeto, 
              onde é possível acessar o clima de todas cidades do mundo inteiro."
              linkGithub="https://github.com/rogervalentim/weather_app"
              demo="https://vermillion-froyo-1a0d9e.netlify.app/"
            />
          </div>
          <div className="project">
            <img src={Ecommerce} alt="projeto ecommerce" />
            <ProjetoCard
              title="Ecommerce store"
              description="O Ecommerce store é um projeto, onde é possível adicionar os produtos no carrinho, e simular finalização de compra com o stripe "
              linkGithub="https://github.com/rogervalentim/ecommerce-headphone."
              demo="https://ecommerce-headphone.vercel.app/"
            />
          </div>
          <div className="project">
            <img src={Lyrics} alt="projeto de musica" />
            <ProjetoCard
              title="Lyrics"
              description="O lyrics é um projeto, feito para pessoas que gostam de músicas e de artistas, onde é possível ouvir um minuto de cada música que está sendo exposta ou que você procurar. "
              linkGithub="https://github.com/rogervalentim/app-music"
              demo="https://app-music-rlvr33zlu-rogervalentim.vercel.app/"
            />
          </div>
          <div className="project">
            <img src={Restaurant} alt="projeto restaurante" />
            <ProjetoCard
              title="Restaurant"
              description="O restaurant é um projeto, feito com um belo design e com o próposito de atrair clientes para o local."
              linkGithub="https://github.com/rogervalentim/restaurant-app"
              demo="https://restaurant-a83azib2d-rogervalentim.vercel.app/"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
