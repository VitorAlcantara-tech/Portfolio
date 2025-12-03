
import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../page/Portfolio";
import DetailPage from "../page/PaginaDetalhesProjeto"; // ⬅️ vamos criar já já
import Resumo from "../page/Resumo";

export const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "/resumo", element: <Resumo /> },

  // Página dinâmica para detalhes
  { path: "/projeto/:id", element: <DetailPage /> },
]);
