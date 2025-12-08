// page/DetailPage.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

import Header from "../components/Header";
import BackgroundParticles from "../components/BackgroundParticles";

// Imagens dos projetos
// 33BarberCrew
import Barber from "../assets/Imagem33BarberApresentacao.png";
import BarberFoto1 from "../assets/33Barber01.png";
import BarberFoto2 from "../assets/33Barber02.png";
import BarberFoto3 from "../assets/33Barber03.png";
import BarberFoto4 from "../assets/33Barber04.png";

// PassaBola
import PassaBola from "../assets/ImagemPassaBolaApresentacao.png";
import passaBolaFoto1 from "../assets/passaBolaFoto1.png";
import passaBolaFoto2 from "../assets/passaBolaFoto2.png";
import passaBolaFoto3 from "../assets/passaBolaFoto3.png";
import passaBolaFoto4 from "../assets/passaBolaFoto4.png";

// ProConnect
import ProConnect from "../assets/ImagemProConnectApresentacao.png";
import proConnectFoto1 from "../assets/proConnectFoto1.png";
import proConnectFoto2 from "../assets/proConnectFoto2.png";
import proConnectFoto3 from "../assets/proConnectFoto3.png";
import proConnectFoto4 from "../assets/proConnectFoto4.png";

// PortoReal
import PortoReal from "../assets/ImagemPortoRealApresentacao.png";
import portoRealFoto1 from "../assets/portoRealFoto1.png";
import portoRealFoto2 from "../assets/portoRealFoto2.png";
import portoRealFoto3 from "../assets/portoRealFoto3.png";
import portoRealFoto4 from "../assets/portoRealFoto4.png";

// AppMelodia
import AppMelodia from "../assets/ImagemAppMelodiaApresentacao.png";
import appMelodiaFoto1 from "../assets/appMelodiaFoto1.png";
import appMelodiaFoto2 from "../assets/appMelodiaFoto2.png";
import appMelodiaFoto3 from "../assets/appMelodiaFoto3.png";
import appMelodiaFoto4 from "../assets/appMelodiaFoto4.png";

// Essenzia
import Essenzia from "../assets/ImagemEssenziaApresentacao.png";
import essenziaFoto1 from "../assets/essenziaFoto1.png";
import essenziaFoto2 from "../assets/essenziaFoto2.png";
import essenziaFoto3 from "../assets/essenziaFoto3.png";
import essenziaFoto4 from "../assets/essenziaFoto4.png";

import Footer from "../components/Footer";

// Mapeia os projetos pelo ID da URL
const PROJECTS = {
  "33-barber-crew": {
    titulo: "33 BARBER CREW",
    imagem: Barber,
    tecnologias: ["html", "css", "javascript"],
    descricao:
      "Site da barbearia 33 Barber Crew, focado em agendamento online, apresentação dos serviços e fortalecimento da identidade visual da marca. Layout moderno, responsivo e otimizado para dispositivos móveis.",
    github: "https://github.com/VitorAlcantara-tech/33BarberCrew_FreeLance",
    site: "https://33barbercrew.com.br/",
    galeria: [BarberFoto1, BarberFoto2, BarberFoto3, BarberFoto4], // depois você pode adicionar mais imagens aqui
  },
  "passa-bola": {
    titulo: "PASSA BOLA",
    imagem: PassaBola,
    tecnologias: ["react", "tailwind"],
    descricao:
      "A aplicação web da Passa a Bola foi desenvolvida com dois objetivos principais: divulgar notícias sobre o universo do futebol feminino e facilitar todo o processo de inscrição e acompanhamento da Copa Passa a Bola. Além de oferecer conteúdos informativos e atualizados, a plataforma permite que equipes e atletas realizem suas inscrições e acompanhem em tempo real a tabela de jogos, a classificação, a artilharia e as notícias relacionadas ao torneio. O foco do desenvolvimento está no front-end, utilizando React, garantindo uma interface moderna, responsiva e de fácil navegação. A aplicação pode ser integrada tanto a uma API própria quanto a serviços externos, como o MockAPI, permitindo flexibilidade no consumo e gerenciamento de dados.",
    github: "https://github.com/VitorAlcantara-tech/Sprint-PassaBola",
    site: "https://passabolaa.vercel.app/",
    galeria: [passaBolaFoto1, passaBolaFoto2, passaBolaFoto3, passaBolaFoto4],
  },
  proconnect: {
    titulo: "PROCONNECT",
    imagem: ProConnect,
    tecnologias: ["react", "tailwind"],
    descricao:
      "A ProConnect é uma plataforma desenvolvida em React e TailwindCSS que facilita a conexão entre profissionais e pessoas que buscam serviços especializados. O usuário pode pesquisar perfis, visualizar cards com informações dos profissionais, enviar mensagens e fazer recomendações. A interface é leve, responsiva e projetada para tornar a descoberta e o contato com profissionais simples e eficiente.",
    github: "https://github.com/thiagolima-tech/FrontEnd-GS-2",
    site: "https://front-end-gs-2-delta.vercel.app/",
    galeria: [proConnectFoto1, proConnectFoto2, proConnectFoto3, proConnectFoto4],
  },
  "porto-real": {
    titulo: "PORTO REAL",
    imagem: PortoReal,
    tecnologias: ["next", "python", "typescript", "react", "tailwind"],
    descricao:
      "A Porto Real é uma plataforma web criada para simplificar a consulta e a comparação de preços entre diversos fornecedores, oferecendo mais agilidade e precisão ao processo de compras. O sistema conta com autenticação de usuários, um dashboard intuitivo e organizado, além de uma área dedicada para visualização detalhada de produtos. A plataforma permite comparar automaticamente os preços praticados por cada fornecedor, destacando as melhores opções de forma clara e objetiva. Dessa forma, empresas e compradores podem tomar decisões mais informadas, reduzir custos e otimizar o tempo gasto na análise de valores. O ambiente foi projetado com foco em usabilidade, oferecendo uma experiência rápida, funcional e responsiva, ideal para quem precisa acompanhar preços e cotações de maneira prática e centralizada.",
    github: "https://github.com/VitorAlcantara-tech/PortoReal",
    site: "https://portoreal-teste.vercel.app/",
    galeria: [portoRealFoto1, portoRealFoto2, portoRealFoto3, portoRealFoto4], // aqui você coloca telas extras depois
  },
  "app-melodia": {
    titulo: "APP MELODIA",
    imagem: AppMelodia,
    tecnologias: ["react", "tailwind"],
    descricao:
      "A Melodia é uma landing page criada para apresentar um aplicativo de música moderno, focado em playlists inteligentes e descoberta musical personalizada. O design segue um estilo dark minimalista, trazendo uma experiência visual imersiva e elegante, alinhada ao conceito do app. A página destaca as principais funcionalidades do Melodia, como recomendações baseadas em humor e atividade, criação dinâmica de playlists e uma interface voltada para que o usuário explore novos sons de forma intuitiva. O layout é totalmente responsivo, com animações suaves e seções bem estruturadas que reforçam o posicionamento do aplicativo como uma solução inovadora no universo de streaming musical.",
    github: "https://github.com/VitorAlcantara-tech/App_Melodia",
    site: "https://appmelodia.vercel.app/",
    galeria: [appMelodiaFoto1, appMelodiaFoto2, appMelodiaFoto3, appMelodiaFoto4],
  },
  essenzia: {
    titulo: "ESSENZIA",
    imagem: Essenzia,
    tecnologias: ["react", "tailwind"],
    descricao:
      "A ESSENZIA é um e-commerce voltado para a venda de roupas e acessórios sustentáveis, desenvolvido com HTML, CSS e Bootstrap. O projeto foi pensado para destacar produtos ecológicos, promovendo consumo consciente e reforçando práticas de moda responsável. A plataforma conta com um layout limpo, moderno e totalmente responsivo, facilitando a navegação em qualquer dispositivo. As páginas apresentam categorias de produtos, detalhes individuais, informações sobre materiais sustentáveis e uma experiência de compra simples e intuitiva. O foco da ESSENZIA é unir tecnologia e sustentabilidade, oferecendo um ambiente digital atraente para clientes que buscam opções de vestuário com menor impacto ambiental.",
    github: "https://github.com/BernardoYuji/CP4-Front-End",
    site: "https://essenzia-kohl.vercel.app/",
    galeria: [essenziaFoto1, essenziaFoto2, essenziaFoto3, essenziaFoto4],
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
  python: { icon: <SiPython className="text-[#FFD43B] text-2xl" />, label: "Python" },
  typescript: { icon: <SiTypescript className="text-blue-500 text-2xl" />, label: "TypeScript" },
};

export default function PaginaDetalhesProjetos() {
  const { id } = useParams();
  const projeto = PROJECTS[id];
  const [modalImage, setModalImage] = useState(null); // imagem aberta no modal

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

      <main className="relative z-10 max-w-5xl mx-auto px-10 md:px-4 pt-28 pb-16">
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
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 group cursor-pointer"
              onClick={() => setModalImage(projeto.imagem)}>
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Conteúdo à direita */}
          <div className="md:w-3/4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-[#00FFAA]">
                Sobre o projeto
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                {projeto.descricao}
              </p>

              <h3 className="text-lg font-semibold mb-3">
                Tecnologias utilizadas
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {projeto.tecnologias.map((tec) => {
                  const tech = techIconMap[tec];
                  if (!tech) return null;
                  return (
                    <div key={tec} className="flex items-center gap-2">
                      {tech.icon}
                      <span className="text-sm text-gray-200">
                        {tech.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botões direto aqui */}
            <div className="mt-8 flex flex-wrap gap-4">
              {projeto.github && (
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#0A0F1F] border border-gray-700 
                             text-gray-200 text-sm font-semibold hover:bg-gray-900 hover:border-gray-500 
                             transition-all"
                >
                  <FaGithub className="text-lg" />
                  <span>Ver no GitHub</span>
                </a>
              )}

              {projeto.site && (
                <a
                  href={projeto.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#00FFAA] text-black 
                             text-sm font-semibold hover:bg-[#00e699] transition-all"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span>Acessar site</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Galeria de imagens adicionais */}
        {projeto.galeria && projeto.galeria.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Mais imagens do projeto
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projeto.galeria.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setModalImage(img)}
                  className="rounded-2xl overflow-hidden border border-white/5 shadow-lg 
                             hover:shadow-[0_0_25px_rgba(0,255,170,0.35)] hover:-translate-y-1 
                             transition-all duration-300 group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`${projeto.titulo} - imagem ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* MODAL DE IMAGEM */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-[90%]"
            onClick={(e) => e.stopPropagation()} // impede fechar ao clicar na imagem
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#00FFAA] transition-colors cursor-pointer"
            >
              <FaTimes className="text-2xl" />
            </button>

            <img
              src={modalImage}
              alt="Imagem ampliada do projeto"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
