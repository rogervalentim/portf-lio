import React from "react";
import "./Projetos.css";
import ProjetoCard from "../../components/Projeto/ProjetoCard";

import data from "../../constants/data";

function Projetos() {
  return (
    <>
      <section className="projects" id="projects">
        <h1>Projetos</h1>
        <div className="projects-cards">
          <div className="project">
            {data.projects.map((item, index) => (
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
