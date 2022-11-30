import React from "react";
import "./Tecnologias.css";

function Tecnologias() {
  return (
    <>
      <section className="technologies-container" id="tecnologies">
        <div className="technologies-title-container">
          <h4 className="technologies-title">Tecnologias</h4>
        </div>
        <div className="technologies-cards">
          <div className="card-container">
            <div className="card-html">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="html icon"
                />
              </div>
              <p className="name-technologie">html</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-css">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="css icon"
                />
              </div>
              <p className="name-technologie">css</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-js">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="javascript icon"
                />
              </div>
              <p className="name-technologie">javascript</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-nodejs">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="node js icon"
                />
              </div>
              <p className="name-technologie">node js</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-git">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="git icon"
                />
              </div>
              <p className="name-technologie">git</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-mysql">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
                  alt="mysql2 icon"
                />
              </div>
              <p className="name-technologie">mysql</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-bootstrap">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="bootstrap icon"
                />
              </div>
              <p className="name-technologie">bootstrap</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-react">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react icon"
                />
              </div>
              <p className="name-technologie">react</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tecnologias;
