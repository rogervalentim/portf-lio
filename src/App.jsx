import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Inicio, Sobre, Tecnologias, Projetos, Contato } from "./container";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
