import images from "./images";

const about = [
    {
     text: "me chamo Roger Valentim e sou desenvolvedor full stack, sempre soube que a chave para o sucesso era o estudo, mas tinha dúvidas em qual área eu deveria estudar, até que eu descobri a programação no inicio de 2022 e desde então eu venho me identificando cada vez mais, venho participando de eventos da Rocktseat e outras comunidades, para eu ir me capacitando cada vez mais.",
     image: images.Computer,
    },
]

const tecnologies = [
  {
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "Html",
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
    imagem:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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

const projects = [
    {
      image: images.RocketPay,
      title: "Rocket Pay",
      description:
        "O rocket pay é um projeto, onde é possível adicionar valores ao cartão simultaneamente e com as validações de cada tipo de cartão.",
      linkGithub: "https://github.com/rogervalentim/explorer-lab",
      demo: "https://explorer-lab-project-ohn4vvfaq-rogervalentim.vercel.app/"
    },
  
    {
      image: images.Ecommerce,
      title: "Ecommerce Store",
      description:
        "O Ecommerce store é um projeto, onde é possível adicionar os produtos no carrinho, e simular finalização de compra com o stripe.",
      linkGithub: "https://github.com/rogervalentim/ecommerce-headphone",
      demo: "https://app-music-rlvr33zlu-rogervalentim.vercel.app/"
    },
  
    {
      image: images.Lyrics,
      title: "Lyrics",
      description:
        "O lyrics é um projeto, feito para pessoas que gostam de músicas e de artistas, onde é possível ouvir um minuto de cada música que está sendo exposta ou que você procurar.",
      linkGithub: "https://github.com/rogervalentim/app-music",
      demo: "https://app-music-rlvr33zlu-rogervalentim.vercel.app/"
    },
  
    {
      image: images.Restaurant,
      title: "Restaurante",
      description:
        "O restaurant é um projeto, feito com um belo design e com o próposito de atrair clientes para o local.",
      linkGithub: "https://github.com/rogervalentim/restaurant-app",
      demo: "https://restaurant-a83azib2d-rogervalentim.vercel.app/"
    },
  
    {
      image: images.Dashboard,
      title: "Dashboard",
      description:
        "O Dashboard é um painel que mostra indicadores de negócios de usuários.",
      linkGithub: "https://github.com/rogervalentim/dashboard_frontend",
      demo: "https://dashboard-frontend1.onrender.com/"
    },
  
    {
      image: images.Gym,
      title: "Gym",
      description:
        "Gym app é um projeto fitness, para atrair clientes e mostrar os beneficios de uma academia.",
      linkGithub: "https://github.com/rogervalentim/gym_app",
      demo: "https://gym-app-mocha.vercel.app/"
    },
  
    {
      image: images.Livraria,
      title: "Livraria",
      description:
        "Livraria é um ecommerce, com todo conteudo criado por mim , utilizando as capas do livro com canva e imagens gratuitas do pexels.",
      linkGithub: "https://github.com/rogervalentim/study-mysql",
      demo: "https://github.com/rogervalentim/study-mysql"
    }
  
  ];

  export default { projects, about, tecnologies }