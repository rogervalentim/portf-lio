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
              <p className="name-technologie">Html</p>
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
              <p className="name-technologie">Css</p>
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
              <p className="name-technologie">Javascript</p>
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
              <p className="name-technologie">Node Js</p>
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
              <p className="name-technologie">Git</p>
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
              <p className="name-technologie">MySql</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-mongodb">
              <div className="image-technologie-container">
                <img
                  className="image-technologie"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="mongodb icon"
                />
              </div>
              <p className="name-technologie">Mongodb</p>
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
              <p className="name-technologie">React</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tecnologias;
