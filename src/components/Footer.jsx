// components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import Logo from "../assets/logotipo.png";
import { forwardRef, useState } from "react";

const Footer = forwardRef(function Footer(props, ref) {
  const [copiado, setCopiado] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copiarEmail = () => {
    navigator.clipboard.writeText("vitor.alcantara.dev@gmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <footer ref={ref} className="w-full mt-20 bg-[#010812] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* LOGO + NOME */}
        <div className="flex items-center gap-5">
          <img
            src={Logo}
            alt="Logo Vitor Alcantara"
            className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(0,255,170,0.4)]"
          />
          <div>
            <h2 className="text-lg font-semibold tracking-wide">
              Vitor Alcântara
            </h2>
            <p className="text-xs text-gray-400">
              Desenvolvedor Full-Stack
            </p>
          </div>
        </div>

        {/* CONTATO */}
        <div className="flex flex-col items-start md:items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Contato
          </span>

          <button
            onClick={copiarEmail}
            className="flex items-center gap-2 text-sm text-gray-200 hover:text-[#00FFAA] transition-colors cursor-pointer bg-transparent"
          >
            <FaEnvelope className="text-base" />
            <span>vitor.alcantara.dev@gmail.com</span>
          </button>

          {copiado && (
            <div
              className="fixed bottom-25 left-1/2 -translate-x-1/2 px-4 py-2 
                         bg-white/20 backdrop-blur text-white rounded-lg animate-fade-in-out"
            >
              Copiado!
            </div>
          )}

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/VitorAlcantara-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFAA] transition-all text-2xl hover:drop-shadow-[0_0_10px_rgba(0,255,170,0.7)]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vitor-alcantara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFAA] transition-all text-2xl hover:drop-shadow-[0_0_10px_rgba(0,255,170,0.7)]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* VOLTAR AO TOPO */}
        <div className="flex flex-col items-end gap-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FFAA]/40 text-xs font-semibold
                       text-[#00FFAA] hover:bg-[#00FFAA] hover:text-black
                       hover:shadow-[0_0_20px_rgba(0,255,170,0.6)] transition-all"
          >
            <FaArrowUp className="text-sm" />
            <span>Voltar ao topo</span>
          </button>

          <p className="text-[11px] text-gray-500 text-right">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
