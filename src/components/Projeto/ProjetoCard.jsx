import React from "react";

import "./ProjetoCard.css";

const ProjetoCard = ({ image, title, description, linkGithub, demo }) => {
  return (
    <section className="projects">
    <div className="card-project">
      <img src={image} alt={`${image}`} />
      <h3 className="title-project">{title}</h3>
      <p className="text-project">{description}</p>
      <div className="buttons-project">
      <a href={linkGithub} target="_blank">
        <button>
          Github
        </button>
      </a>
      <a href={demo} target="_blank">
        <button>
           Projeto
          </button>
      </a>
      </div>
    </div>
    </section>
  );
};

export default ProjetoCard;
