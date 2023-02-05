import "./App.css";
import { NavBar, Footer } from "./components";
import { Inicio, Sobre, Tecnologias, Projetos, Contato } from "./container";


function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
