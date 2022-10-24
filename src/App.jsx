import "./assets/css/App.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <body>
      <NavBar />
      <Inicio />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
      </body>
    </>
  );
}

export default App;
