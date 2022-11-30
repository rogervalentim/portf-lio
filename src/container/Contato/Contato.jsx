import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ImageContact from "../../assets/images/contato/contato.png";
import "./Contato.css";

function Contato() {
  return (
    <>
      <section className="contact">
        <section className="contact-me" id="contact">
          <h4 className="contact-me-title">Entre em Contato</h4>
          <p className="contact-text">
            <FontAwesomeIcon className="icon-contact-me" icon={faEnvelope} />{" "}
            E-mail: valentim.roger33@gmail.com
          </p>
          <p className="contact-text">
            <FontAwesomeIcon className="icon-contact-me" icon={faPhone} />{" "}
            Telefone: (19)3328-2160
          </p>
          <a href="https://api.whatsapp.com/send/?phone=19994088614&text&type=phone_number&app_absent=0" target="_blank">
            <button className="contact-me-btn">contate-me</button>
          </a>
        </section>
        <div className="contact-container">
          <img className="contact-image" src={ImageContact} />
        </div>
      </section>
    </>
  );
}

export default Contato;
