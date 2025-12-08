
import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../page/Portfolio";
import DetailPage from "../page/PaginaDetalhesProjeto"; // ⬅️ vamos criar já já
import Resumo from "../page/Resumo";
import SobreMim from "../page/SobreMim";
import Contato from "../page/Contato";

export const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "/resumo", element: <Resumo /> },
  { path: "/sobreMim", element: <SobreMim /> },
  { path: "/contato", element: <Contato /> },

  // Página dinâmica para detalhes
  { path: "/projeto/:id", element: <DetailPage /> },
]);
