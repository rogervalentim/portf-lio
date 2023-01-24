// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import TecnologiasCard from "../../components/Tecnologias/TecnologiasCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Tecnologias.css";

const tecnologies = [
  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "Html"
  },

  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "Css"
  },

  {
    imagem:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    name: "Tailwindcss"
          
  },

  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "Javascript"
  },

  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "Typescript"
  },

  {
    imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git"

  },

  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node"
  },

  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
    name: "MySql"
  },

  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "Mongo Db"
  },

  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React"
  }
];

function Tecnologias() {
  return (
    <section className="technologies-container" id="tecnologies">
      <h1 className="technologies-title">Tecnologias</h1>
      <div className="card">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {tecnologies.map((technologie, i) => (
            <SwiperSlide key={i}>
              <TecnologiasCard
                key={i}
                imagem={technologie.imagem}
                name={technologie.name}
              />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </section>
  );
}
export default Tecnologias;
