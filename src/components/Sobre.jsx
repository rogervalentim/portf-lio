import React from "react";
import "../assets/css/Sobre.css";
import Computer from "../assets/images/sobre/computer.png";

function Sobre() {
  return (
    <>
      <section className="about" id="about">
        <section className="about-container">
        <h3 className="about-title">Sobre Mim</h3>
        <section className="about-image-paragraph">
          <div id="computer">
          <img className="computer" src={ Computer } alt="avatar sobre" />
          </div>
          <p className="text-about-me">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui<br></br>
            debitis porro sequi cupiditate, velit dolore itaque voluptates<br></br>
            soluta officiis, repudiandae eveniet repellat labore, voluptatum<br></br>
            impedit inventore deleniti officia
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui<br></br>
            debitis porro sequi cupiditate, velit dolore itaque voluptates<br></br>
            soluta officiis, repudiandae eveniet repellat labore, voluptatum<br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui<br></br>
            debitis porro sequi cupiditate, velit dolore itaque voluptates<br></br>
            soluta officiis, repudiandae eveniet repellat labore, voluptatum<br></br>
            impedit inventore deleniti officia
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui<br></br>
            debitis porro sequi cupiditate, velit dolore itaque voluptates<br></br>
            soluta officiis, repudiandae eveniet repellat labore, voluptatum<br></br>
          </p>
          </section>

        </section>
      </section>
    </>
  );
}

export default Sobre;
