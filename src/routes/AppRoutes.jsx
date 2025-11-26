
import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../page/Portfolio";
import DetailPage from "../page/DetailPage"; // ⬅️ vamos criar já já

export const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },

  // Página dinâmica para detalhes
  { path: "/projeto/:id", element: <DetailPage /> },
]);
