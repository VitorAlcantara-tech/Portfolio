// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Portfolio from "./page/Portfolio";
import Resumo from "./page/Resumo";
import SobreMim from "./page/SobreMim";
import Contato from "./page/Contato";
import DetailPage from "./page/PaginaDetalhesProjeto";

export default function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resumo" element={<Resumo />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projeto/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
