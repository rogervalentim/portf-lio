import React from "react";
import "./Projetos.css";
import ProjetoCard from "../../components/Projeto/ProjetoCard";

import RocketPay from "../../assets/images/projetos/rocket-pay.png";
import Ecommerce from "../../assets/images/projetos/ecommerce.png";
import Lyrics from "../../assets/images/projetos/lyrics-app.png";
import Restaurant from "../../assets/images/projetos/restaurant.png";
import Dashboard from "../../assets/images/projetos/dashboard.png";
import Gym from "../../assets/images/projetos/gym.png";
import Livraria from "../../assets/images/projetos/livraria.png"

const projects = [
  {
    image: RocketPay,
    title: "Rocket Pay",
    description:
      "O rocket pay é um projeto, onde é possível adicionar valores ao cartão simultaneamente e com as validações de cada tipo de cartão.",
    linkGithub: "https://github.com/rogervalentim/explorer-lab",
    demo: "https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/"
  },

  {
    image: Ecommerce,
    title: "Ecommerce Store",
    description:
      "O Ecommerce store é um projeto, onde é possível adicionar os produtos no carrinho, e simular finalização de compra com o stripe.",
    linkGithub: "https://github.com/rogervalentim/ecommerce-headphone",
    demo: "https://app-music-rlvr33zlu-rogervalentim.vercel.app/"
  },

  {
    image: Lyrics,
    title: "Lyrics",
    description:
      "O lyrics é um projeto, feito para pessoas que gostam de músicas e de artistas, onde é possível ouvir um minuto de cada música que está sendo exposta ou que você procurar.",
    linkGithub: "https://github.com/rogervalentim/app-music",
    demo: "https://app-music-rlvr33zlu-rogervalentim.vercel.app/"
  },

  {
    image: Restaurant,
    title: "Restaurante",
    description:
      "O restaurant é um projeto, feito com um belo design e com o próposito de atrair clientes para o local.",
    linkGithub: "https://github.com/rogervalentim/restaurant-app",
    demo: "https://restaurant-a83azib2d-rogervalentim.vercel.app/"
  },

  {
    image: Dashboard,
    title: "Dashboard",
    description:
      "O Dashboard é um painel que mostra indicadores de negócios de usuários.",
    linkGithub: "https://github.com/rogervalentim/dashboard_frontend",
    demo: "https://dashboard-frontend1.onrender.com/"
  },

  {
    image: Gym,
    title: "Gym",
    description:
      "Gym app é um projeto fitness, para atrair clientes e mostrar os beneficios de uma academia.",
    linkGithub: "https://github.com/rogervalentim/gym_app",
    demo: "https://gym-app-mocha.vercel.app/"
  },

  {
    image: Livraria,
    title: "Livraria",
    description:
      "Livraria é um ecommerce, com todo conteudo criado por mim , utilizando as capas do livro com canva e imagens gratuitas do pexels.",
    linkGithub: "https://github.com/rogervalentim/study-mysql",
    demo: "https://github.com/rogervalentim/study-mysql"
  }

];

function Projetos() {
  return (
    <>
      <section className="projects" id="projects">
        <h1>Projetos</h1>
        <div className="projects-cards">
          <div className="project">
            {projects.map((item, index) => (
              <ProjetoCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                linkGithub={item.linkGithub}
                demo={item.demo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
