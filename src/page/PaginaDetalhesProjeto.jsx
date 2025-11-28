// page/DetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Header from "../components/Header";
import BackgroundParticles from "../components/BackgroundParticles";

// Imagens dos projetos
import Barber from "../assets/Imagem33BarberApresentacao.png";
import ProConnect from "../assets/ImagemProConnectApresentacao.png";
import PassaBola from "../assets/ImagemPassaBolaApresentacao.png";
import PortoReal from "../assets/ImagemPortoRealApresentacao.png";
import AppMelodia from "../assets/ImagemAppMelodiaApresentacao.png";
import Essenzia from "../assets/ImagemEssenziaApresentacao.png";
import Botoes from "../components/CardProjetos/Botoes";

// Mapeia os projetos pelo ID da URL
const PROJECTS = {
  "33-barber-crew": {
    titulo: "33 BARBER CREW",
    imagem: Barber,
    tecnologias: ["html", "css", "javascript"],
    descricao:
      "Site da barbearia 33 Barber Crew, focado em agendamento online, apresentação dos serviços e fortalecimento da identidade visual da marca. Layout moderno, responsivo e otimizado para dispositivos móveis.",
    github: "https://github.com/seu-repo",
    site: "https://seuprojeto.com",
  },
  "passa-bola": {
    titulo: "PASSA BOLA",
    imagem: PassaBola,
    tecnologias: ["react", "tailwind"],
    descricao:
      "Plataforma voltada para notícias de futebol feminino e informações sobre copas futuras, com foco em experiência do usuário, desempenho e visual limpo.",
    github: "https://github.com/seu-repo",
    site: "https://seuprojeto.com",
  },
  proconnect: {
    titulo: "PROCONNECT",
    imagem: ProConnect,
    tecnologias: ["react", "tailwind"],
    descricao:
      "Aplicação para conectar profissionais, com cards de perfis, sistema de recomendações e envio de mensagens, construída com foco em performance e UX.",
    github: "https://github.com/seu-repo",
    site: "https://seuprojeto.com",
  },
  "porto-real": {
    titulo: "PORTO REAL",
    imagem: PortoReal,
    tecnologias: ["next", "python", "typescript", "react", "tailwind"],
    descricao:
      "Ferramenta para monitorar preços de produtos em diferentes fornecedores, facilitando análises e decisões estratégicas de compra.",
    github: "https://github.com/seu-repo",
    site: "https://seuprojeto.com",
  },
  "app-melodia": {
    titulo: "APP MELODIA",
    imagem: AppMelodia,
    tecnologias: ["react", "tailwind"],
    descricao:
      "Landing page de um app de música focado em playlists inteligentes, descoberta por humor/atividade e visual imersivo em tema dark.",
    github: "https://github.com/seu-repo",
    site: "https://seuprojeto.com",
  },
  essenzia: {
    titulo: "ESSENZIA",
    imagem: Essenzia,
    tecnologias: ["react", "tailwind"],
    descricao:
      "Projeto voltado para uma marca de produtos, com foco em branding, storytelling e apresentação visual dos produtos.",
    github: "https://github.com/seu-repo",
    site: "https://seuprojeto.com",
  },
};

// ícones das stacks
const techIconMap = {
  html: { icon: <SiHtml5 className="text-orange-500 text-2xl" />, label: "HTML5" },
  css: { icon: <SiCss3 className="text-blue-500 text-2xl" />, label: "CSS3" },
  javascript: { icon: <SiJavascript className="text-yellow-400 text-2xl" />, label: "JavaScript" },
  react: { icon: <SiReact className="text-cyan-400 text-2xl" />, label: "React" },
  tailwind: { icon: <SiTailwindcss className="text-sky-400 text-2xl" />, label: "TailwindCSS" },
  next: { icon: <SiNextdotjs className="text-white text-2xl" />, label: "Next.js" },
  python: { icon: <SiHtml5 className="text-[#FFD43B] text-2xl" />, label: "Python" },
  typescript: { icon: <SiJavascript className="text-blue-500 text-2xl" />, label: "TypeScript" },
};

export default function PaginaDetalhesProjetos() {
  const { id } = useParams();
  const projeto = PROJECTS[id];

  if (!projeto) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Projeto não encontrado.</p>
        <Link
          to="/"
          className="flex items-center gap-2 text-[#00FFAA] hover:underline"
        >
          <FaArrowLeft />
          Voltar para o portfólio
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#021926] to-[#020617] text-white overflow-hidden">
      <Header />
      <BackgroundParticles />

      <main className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-16">
        {/* Voltar */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <FaArrowLeft />
            Voltar para projetos
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {projeto.titulo}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Imagem grande */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Conteúdo à direita */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-[#00FFAA]">
                Sobre o projeto
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                {projeto.descricao}
              </p>

              <h3 className="text-lg font-semibold mb-3">Tecnologias utilizadas</h3>
              <div className="flex flex-wrap items-center gap-4">
                {projeto.tecnologias.map((tec) => {
                  const tech = techIconMap[tec];
                  return (
                    <div key={tec} className="flex items-center gap-2">
                      {tech.icon}
                      <span className="text-sm text-gray-200">{tech.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Botoes 
                github={projeto.github}
                site={projeto.site}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
