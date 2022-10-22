import React from "react";
import "../assets/css/Tecnologias.css";

function Tecnologias() {
  return (
    <>
      <section className="technologies-container" id="technologies">
        <h4 className="technologies-title">Tecnologias</h4>
        <div className="technologies-cards">
          <div className="card-html">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html icon"
            />
            <p className="name-technologie">html</p>
          </div>
          <div className="card-css">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="css icon"
            />
            <p className="name-technologie">css</p>
          </div>
          <div className="card-js">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript icon"
            />
            <p className="name-technologie">javascript</p>
          </div>
          <div className="card-nodejs">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="node js icon"
            />
            <p className="name-technologie">node js</p>
          </div>
          <div className="card-git">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git icon"
            />
            <p className="name-technologie">git</p>
          </div>
          <div className="card-mysql">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
              alt="mysql2 icon"
            />
          <p className="name-technologie">mysql</p>
          </div>
          <div className="card-bootstrap">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap icon"
            />
            <p className="name-technologie">bootstrap</p>
          </div>
          <div className="card-react">
            <img className="image-technologie"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react icon"
            />
            <p className="name-technologie">react</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tecnologias;
