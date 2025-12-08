import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // sobe para o topo sempre que a rota mudar
  }, [pathname]);

  return null; // não renderiza nada
}
