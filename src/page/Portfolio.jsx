import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Barber from "../assets/Imagem33BarberApresentacao.png";
import ProConnect from "../assets/ImagemProConnectApresentacao.png";
import PassaBola from "../assets/ImagemPassaBolaApresentacao.png";
import PortoReal from "../assets/ImagemPortoRealApresentacao.png";
import AppMelodia from "../assets/ImagemAppMelodiaApresentacao.png";
import Essenzia from "../assets/ImagemEssenziaApresentacao.png";
import BackgroundParticles from "../components/BackgroundParticles";
import CardProjetos from "../components/CardProjetos";
import Header from "../components/Header";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {

  const cardsContainerRef = useRef(null);
  const footerRef = useRef(null);
  const [mostrarLottie, setMostrarLottie] = useState(true);

  useEffect(() => {
    document.title = "Portfolio — Vitor Alcantara";
  }, []);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".projeto-card");

      if (!cards.length) return; // segurança: se não achar nada, não faz nada

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top-=100 top",  // quando a seção encosta no topo
          end: "+=1000",      // distância de scroll para animar tudo (ajusta no gosto)
          scrub: true,        // scroll controla o progresso da timeline
          pin: true,          // mantém a seção fixa enquanto anima
          anticipatePin: 1,
          // markers: true,   // liga pra debugar se quiser
        },
      });

      // estado inicial: todos invisíveis e mais baixos
      gsap.set(cards, { opacity: 0, y: 150 });

      // cada card entra em sequência conforme a timeline avança
      cards.forEach((card, index) => {
        tl.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        // 👉 Pausa antes da segunda linha
        if (index === 2) {
          tl.to({}, { duration: 1 }); // segura o scroll por um momento
        }
      });

    }, cardsContainerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setMostrarLottie(!entry.isIntersecting); // se o footer aparecer → esconde o lottie
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#021926] to-[#020617] text-white overflow-hidden">
      <Header />
      <BackgroundParticles />

      {mostrarLottie && (
        <DotLottieReact
          src="https://lottie.host/799f1fa6-79d5-435e-bc33-29a90439132f/mR1rWZ7QnK.json"
          loop
          autoplay
          className="w-20 fixed bottom-10 left-1/2 -translate-x-1/2"
        />
      )}

      <main className="text-center px-4 sm:px-8 lg:px-40 pb-32">

        <section
          className="
    min-h-[80vh]           /* mobile: ocupa boa parte da tela */
    flex flex-col items-center justify-center
    max-w-5xl mx-auto 
    px-4 pt-24 pb-16 
    text-center 
    relative z-10
  "
        >
          <h1
            className="
      text-xs               /* base (mobile) */
      sm:text-sm            /* >= 640px */
      md:text-base          /* >= 768px */
      uppercase 
      tracking-[0.35em] 
      font-semibold 
      text-slate-200
    "
          >
            Olá! sou Vitor{" "}
            <span className="text-[#00FFAA]">Alcantara</span>
          </h1>

          <p
            className="
      mt-6 
      text-2xl           /* tablet pequeno */
      md:text-3xl           /* tablet */
      lg:text-4xl           /* desktop */
      xl:text-5xl           /* telas grandes */
      font-bold 
      uppercase 
      leading-tight
      text-slate-100
      max-w-4xl             /* limita a largura do texto em telas grandes */
    "
          >
            Desenvolvedor full-stack, apaixonado por tecnologia e por criar soluções
            que facilitam a vida das pessoas.
          </p>
        </section>


        <section
          className="mt-32 mb-20 px-4 sm:px-8 lg:px-20"
          ref={cardsContainerRef}
        >
          <h1 className="text-3xl sm:text-4xl uppercase font-semibold text-center mb-12">
            Principais Projetos
          </h1>

          <div
            className="
      grid
      grid-cols-1           /* mobile */
      sm:grid-cols-2        /* >= 640px */
      lg:grid-cols-3        /* >= 1024px */
      gap-10
      place-items-center
    "
          >
            <CardProjetos
              imagem={Barber}
              titulo="33 BARBER CREW"
              tecnologias={["html", "css", "javascript"]}
            />

            <CardProjetos
              imagem={PortoReal}
              titulo="PORTO REAL"
              tecnologias={["next", "python", "typescript", "react", "tailwind"]}
            />

            <CardProjetos
              imagem={PassaBola}
              titulo="PASSA BOLA"
              tecnologias={["react", "tailwind"]}
            />

            <CardProjetos
              imagem={ProConnect}
              titulo="PROCONNECT"
              tecnologias={["react", "tailwind"]}
            />

            <CardProjetos
              imagem={AppMelodia}
              titulo="APP MELODIA"
              tecnologias={["react", "tailwind"]}
            />

            <CardProjetos
              imagem={Essenzia}
              titulo="ESSENZIA"
              tecnologias={["react", "tailwind"]}
            />
          </div>
        </section>

      </main>
      <Footer ref={footerRef} />
    </div>
  );
}
