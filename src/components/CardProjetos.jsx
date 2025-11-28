// components/CardProjetos.jsx
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiTypescript,
} from "react-icons/si";

import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CardProjetos({ titulo, imagem, tecnologias = [] }) {
  const iconMap = {
    html: { icon: <SiHtml5 className="text-orange-500 text-3xl" />, label: "HTML5" },
    css: { icon: <SiCss3 className="text-blue-500 text-3xl" />, label: "CSS3" },
    javascript: { icon: <SiJavascript className="text-yellow-400 text-3xl" />, label: "JavaScript" },
    react: { icon: <SiReact className="text-cyan-400 text-3xl" />, label: "React" },
    tailwind: { icon: <SiTailwindcss className="text-sky-400 text-3xl" />, label: "TailwindCSS" },
    next: { icon: <SiNextdotjs className="text-white text-3xl" />, label: "Next.js" },
    python: { icon: <SiPython className="text-[#FFD43B] text-3xl" />, label: "Python" },
    django: { icon: <SiDjango className="text-green-800 text-3xl" />, label: "Django" },
    typescript: { icon: <SiTypescript className="text-blue-500 text-3xl" />, label: "TypeScript" },
  };

  return (
    <div className="projeto-card my-4 mx-1">
      <div
        className="
          w-[320px] bg-[#011627] rounded-3xl relative overflow-hidden 
          shadow-xl px-3 pt-3 pb-4 transition-all duration-300 transform
          hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,170,0.35)]
          before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
          hover:before:opacity-100 before:transition-opacity before:duration-300
          before:pointer-events-none
        "
      >
        <div className="relative z-10">

          {/* Imagem */}
          <div className="w-full h-48">
            <img
              src={imagem}
              alt={titulo}
              className="w-full h-full rounded-t-2xl"
            />
          </div>

          {/* Título */}
          <h3 className="text-2xl font-semibold mt-4 mb-2 text-center tracking-wide">
            {titulo}
          </h3>

          {/* Tecnologias */}
          <div className="flex items-center justify-center gap-6 pb-5">
            {tecnologias.map((tec, index) => {
              const tech = iconMap[tec];

              return (
                <div key={index} className="relative group">
                  
                  {/* Ícone */}
                  {tech.icon}

                  {/* Tooltip */}
                  <div
                    className="
                      absolute -bottom-6 left-1/2 -translate-x-1/2
                      bg-black/50 text-white text-xs px-2 py-1 rounded-md
                      opacity-0 group-hover:opacity-100
                      transition-all duration-200
                      pointer-events-none
                      whitespace-nowrap
                    "
                  >
                    {tech.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botão */}
          <div className="flex justify-center gap-4 mt-2">
            <Link
              to={`/projeto/${titulo.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-2 bg-gray-800 border border-white text-white px-5 py-2 rounded-lg font-semibold
                         hover:bg-gray-900 transition-all cursor-pointer"
            >
              <FaExternalLinkAlt className="text-md" />
              <span className="text-md">Ver mais detalhes</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
