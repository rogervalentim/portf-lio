import images from "./images";

const about = [
  {
    text: "me chamo Roger Valentim e sou desenvolvedor full stack, sempre soube que a chave para o sucesso era o estudo, mas tinha dúvidas em qual área eu deveria estudar, até que eu descobri a programação no inicio de 2022 e desde então eu venho me identificando cada vez mais, venho participando de eventos da Rocktseat e outras comunidades, para eu ir me capacitando cada vez mais.",
    image: images.Computer
  }
];

const tecnologies = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "Html",
    text: "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.",
    linkDocumentation: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "Css",
    text: "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
    linkDocumentation: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    name: "Tailwindcss",
    text: "O Tailwind é um framework do CSS que nos fornece classes utilitárias de propósito único que são, em sua maioria, opinativas e que nos ajudam a projetar nossas páginas da web diretamente de dentro de nossos arquivos de marcação ou . js/. jsx/.",
    linkDocumentation: "https://tailwindcss.com/docs/installation"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "Javascript",
    text: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    linkDocumentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "Typescript",
    text: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    linkDocumentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
    text: "Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
    linkDocumentation: "https://git-scm.com/doc"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node",
    text: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
    linkDocumentation: "https://nodejs.org/en/"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
    name: "MySql",
    text: "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.",
    linkDocumentation: "https://www.mysql.com/"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "Mongo Db",
    text: "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.",
    linkDocumention: "https://www.mongodb.com/docs/"
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    text: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    linkDocumentation: "https://pt-br.reactjs.org/"
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    name: "Php",
    text: "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.",
    linkDocumentation: "https://www.php.net/"
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
  },

  {
    image: images.Dashboard2,
    title: "Dashboard",
    description:
      "É um dashboard feito para avaliar os colaboradores de uma empresa",
    linkGithub: "https://github.com/rogervalentim/dashboard",
    demo: "https://643ea4516a3cf1009f16687b--wonderful-palmier-54f516.netlify.app/"
  }
];

export default { projects, about, tecnologies };
