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

      <main className="text-center px-40 pb-32">
        <section className="h-full max-w-5xl mx-auto px-4 pt-32 pb-16 text-center relative z-10">
          <h1 className="text-sm sm:text-base md:text-lg uppercase tracking-[0.35em] font-semibold z-14">
            Olá! sou Vitor <span className="text-[#00FFAA]">Alcantara</span>
          </h1>

          <p className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight ">
            Desenvolvedor full-stack, apaixonado por tecnologia e por criar soluções
            que facilitam a vida das pessoas.
          </p>
        </section>

        <section className="h-full mt-40" ref={cardsContainerRef}>
          <h1 className="text-4xl uppercase font-semibold my-6">Principais Projetos</h1>

          <div className="flex justify-around flex-wrap">
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
