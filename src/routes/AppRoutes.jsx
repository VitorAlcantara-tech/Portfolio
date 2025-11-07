import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../page/Portfolio";
import Header from "../components/Header";

export const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  {
    element: <Header />,
    children: [
      { path: "/resumo", element: <Portfolio /> },
      { path: "/sobreMim", element: <Portfolio /> },
      { path: "/contato", element: <Portfolio /> }
    ],
  }
]);
