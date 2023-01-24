import React from 'react';
import './TecnologiasCard.css';
const TecnologiasCard = ({imagem, name}) => {
  return (
   <div className="card-technologie">
    <img src={imagem} alt="tecnologias de programação" />
    <h3>{name}</h3>
   </div>
  )
}

export default TecnologiasCard;