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
                image={technologie.image}
                name={technologie.name}
                text={technologie.text}
                linkDocumentation={technologie.linkDocumentation}
              />
          ))}
      </div>
    </section>
  );
}
export default Tecnologias;