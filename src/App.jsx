import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Inicio, Sobre, Tecnologias, Projetos, Contato } from "./container";
import Footer from "./components/Footer/Footer";

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
