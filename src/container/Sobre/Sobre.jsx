import React from "react";
import "./Sobre.css";
import Computer from "../../assets/images/sobre/computer.png";

function Sobre() {
  return (
    <>
      <section className="about" id="about">
        <section className="about-container">
          <h3 className="about-title">Sobre Mim</h3>
          <section className="about-image-paragraph">
            <div className="computer-container">
              <img className="computer" src={Computer} alt="avatar sobre" />
            </div>
            <p className="text-about-me">
              me chamo Roger Valentim e sou desenvolvedor full stack, sempre soube que a chave para o
              sucesso era o estudo, mas tinha dúvidas em qual área eu deveria
              estudar, até que eu descobri a programação no inicio de 2022 e
              desde então eu venho me identificando cada vez mais, venho
              participando de eventos da Rocktseat e outras comunidades, para eu
              ir me capacitando cada vez mais, me considero pronto para a minha primeira oportunidade !
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Sobre;
