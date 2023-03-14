import React from "react";
import "./Sobre.css";

import data from "../../constants/data";

function Sobre() {
  return (
    <>
      <section className="about">
        <section className="about-container">
          <h3 className="about-title">Sobre Mim</h3>
          {data.about.map((content) => (
            <div key={content} className="about-image-paragraph">
              <div className="computer-container">
                <img
                  className="computer"
                  src={content.image}
                  alt="avatar sobre"
                />
              </div>
              <p className="text-about-me">{content.text}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export default Sobre;
