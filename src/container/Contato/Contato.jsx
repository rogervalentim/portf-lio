import React from "react";
import { useForm } from "react-hook-form";

import ImageContact from "../../assets/images/contato/contato.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contato.css";

function Contato() {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <>
      <section className="contact">
        <div className="contact-me">
          <h1 className="contact-me-title">Entre em contato</h1>
          <form
            className=""
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/2c7272e290e3a0edfd38242fcde1b487"
            method="POST"
          >
            <input
              type="text"
              placeholder="Nome:"
              {...register("name", {
                required: true,
                maxLength: 100
              })}
            />
            {errors.name && (
              <p>
                {errors.name.type === "required" &&
                  "Por favor preencher esse campo"}
                {errors.name.type === "maxLength" &&
                  "Só é permitido 100 characteres"}
              </p>
            )}

            <input
              type="text"
              placeholder="Email:"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
            />
            {errors.email && (
              <p>
                {errors.email.type === "required" &&
                  "Por favor preencher esse campo"}
                {errors.email.type === "pattern" && "Email inexistente"}
              </p>
            )}

            <textarea
              placeholder="Mensagem:"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message && (
              <p>
                {errors.message.type === "required" &&
                  "Por favor preencher esse campo"}
                {errors.message.type === "maxLength" &&
                  "Só é permitido 2000 characters"}
              </p>
            )}

            <div className="contact-me-btn-container">
              <button type="submit" className="contact-me-btn">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contato;
