import React from 'react';

import TecnologiasCard from '../../components/Tecnologias/TecnologiasCard';

import data from '../../constants/data';

import './Tecnologias.css';


function Tecnologias() {
  return (
    <section className="technologies-container" id="tecnologies">
      <h1 className="technologies-title">Tecnologias</h1>
      <div className="cards">
          {data.tecnologies.map((technologie, i) => (
              <TecnologiasCard
                key={i}
                imagem={technologie.imagem}
                name={technologie.name}
              />
          ))}
      </div>
    </section>
  );
}
export default Tecnologias;