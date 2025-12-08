import Header from '../components/Header'
import BackgroundParticles from '../components/BackgroundParticles'
import cv from '../../src/VitorALCANTARA.pdf'
import TimelineItem from '../components/Resumo/TimelineItem';
import SideSectionTitle from '../components/Resumo/SideSectionTitle';

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ToolSection from '../components/Resumo/ToolSection';
import ButtonDownloadPDF from '../components/Resumo/ButtonDownloadPDF';
import Footer from '../components/Footer';

export default function Resumo() {

    const sectionRef = useRef(null)

    useEffect(() => {
        document.title = "Resumo — Vitor Alcantara";
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Animação da introdução
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.intro-wrapper',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                defaults: {
                    duration: 0.8,
                    ease: 'power3.out',
                },
            })

            tl.from('.intro-title', {
                opacity: 0,
                y: 40,
            }).from(
                '.intro-text',
                {
                    opacity: 0,
                    y: 30,
                },
                '-=0.3'
            )

            // Linha da experiência
            gsap.fromTo(
                '.timeline-line-experience',
                { scaleY: 0, transformOrigin: 'top' },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.experience-wrapper',
                        start: 'top 90%',
                        end: 'bottom 20%',
                        scrub: true,
                        // markers: true,
                    },
                }
            )

            // Linha da formação acadêmica
            gsap.fromTo(
                '.timeline-line-academic',
                { scaleY: 0, transformOrigin: 'top' },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.academic-wrapper',
                        start: 'top 100%',
                        end: 'bottom 20%',
                        scrub: true,
                        // markers: true,
                    },
                }
            )

            // Linha da formação certificados
            gsap.fromTo(
                '.timeline-line-certificate',
                { scaleY: 0, transformOrigin: 'top' },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.certificate-wrapper',
                        start: 'top 95%',
                        end: 'bottom 20%',
                        scrub: true,
                        // markers: true,
                    },
                }
            )

            // Ferramentas de trabalho - anima o bloco e os cards
            gsap.from('.tools-wrapper', {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.tools-wrapper',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    // markers: true,
                },
            });

            gsap.from('.tool-section', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.tools-wrapper',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

        }, sectionRef)

        return () => ctx.revert()
    }, [])


    return (
        <div>
            <main className='bg-gradient-to-b from-[#020617] via-[#010f17] to-[#020617]'>
                <Header />
                <BackgroundParticles />

                <section
                    ref={sectionRef}
                    className="pb-32 flex flex-col items-center text-center px-10 md:px-4 lg:px-8"
                >
                    {/* HERO */}
                    <div className="w-full max-w-4xl min-h-[60vh] sm:min-h-[70vh] flex flex-col pt-60 sm:pt-32 gap-6 sm:gap-8">
                        <h1 className="text-[25px] sm:text-3xl lg:text-5xl font-medium leading-tight uppercase">
                            Sou Desenvolvedor Full-Stack especializado em{" "}
                            <span className="text-[#00FFAA] font-semibold">next.js</span>,{" "}
                            <span className="text-[#00FFAA] font-semibold">typescript</span> e{" "}
                            <span className="text-[#00FFAA] font-semibold">node.js</span>
                        </h1>

                        <ButtonDownloadPDF
                            text="Download do Currículo (PDF)"
                            curriculo={cv}
                        />
                    </div>

                    {/* INTRODUÇÃO + EXPERIÊNCIA + FORMAÇÃO */}
                    <div className="intro-wrapper flex flex-col gap-16 sm:gap-24 w-full max-w-4xl mt-10">
                        {/* INTRODUÇÃO */}
                        <div className="grid gap-8 w-full md:grid-cols-[220px_1fr] items-start">
                            <h1
                                className="
        intro-title 
        uppercase font-semibold 
        text-xl sm:text-2xl 
        text-center md:text-left
      "
                            >
                                Introdução
                            </h1>

                            <p
                                className="
        intro-text 
        text-sm sm:text-base lg:text-lg 
        leading-relaxed 
        text-slate-200 
        text-justify md:text-left
      "
                            >
                                Sou um desenvolvedor full-stack focado em criar soluções práticas,
                                eficientes e alinhadas às necessidades do dia a dia. Tenho experiência
                                na construção de interfaces modernas, intuitivas e bem estruturadas,
                                sempre priorizando desempenho, organização e uma boa experiência para o
                                usuário.
                                <br />
                                <br />
                                No desenvolvimento do lado servidor, atuo tanto na implementação de
                                funcionalidades quanto na criação de automações e integrações que
                                otimizam processos. Também trabalho com bancos de dados de forma
                                estruturada, o que me permite analisar, organizar e manipular
                                informações com clareza e precisão.
                                <br />
                                <br />
                                Atualmente, busco oportunidades que me permitam evoluir
                                profissionalmente, ampliar minha visão técnica e contribuir para
                                projetos que realmente façam diferença e gerem valor para o negócio.
                            </p>
                        </div>
                    </div>

                    {/* EXPERIÊNCIA PROFISSIONAL */}
                    <div className="experience-wrapper grid gap-10 w-full max-w-4xl my-10 md:my-20 md:grid-cols-[220px_1fr] relative">
                        <div className="flex flex-col items-center md:items-start">
                            <SideSectionTitle titulo="Experiência Profissional" />
                        </div>

                        <div className="text-left intro-text w-full md:w-3/4 relative">
                            {/* Linha só no desktop */}
                            <div
                                className="
        hidden md:block 
        absolute left-0 top-0 h-full rounded-full w-[5px] 
        bg-gradient-to-b from-[#00FFAA] to-[#0bb37b] 
        timeline-line-experience drop-shadow-[0_0_7px_#00FFAA]
      "
                            />
                            <div className="md:pl-10 flex flex-col gap-10">
                                <TimelineItem
                                    titulo="Real Soluções"
                                    data="Dezembro 2025 - Presente"
                                    descricao="Estagiário em Desenvolvimento Full-Stack"
                                />

                                <TimelineItem
                                    titulo="33 BarberCrew — Freelance"
                                    data="Março 2025 - Junho 2025"
                                    descricao="Desenvolvimento Full-Stack"
                                />
                            </div>
                        </div>
                    </div>

                    {/* FORMAÇÃO ACADÊMICA */}
                    <div className="academic-wrapper grid gap-10 w-full max-w-4xl my-10 md:my-20 md:grid-cols-[220px_1fr] relative text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <SideSectionTitle titulo="Formação Acadêmica" />
                        </div>

                        <div className="text-left intro-text w-full relative">
                            <div
                                className="
        hidden md:block 
        absolute left-0 top-0 h-full rounded-full w-[5px] 
        bg-gradient-to-b from-[#00FFAA] to-[#0bb37b] 
        timeline-line-academic drop-shadow-[0_0_7px_#00FFAA]
      "
                            />
                            <div className="md:pl-10 flex flex-col gap-10">
                                <TimelineItem
                                    titulo="Engenharia de Software"
                                    data="Janeiro 2025 - Dezembro 2028"
                                    descricao="FIAP - Faculdade de Informática e Administração Paulista"
                                />

                                <TimelineItem
                                    titulo="Colégio Módulo"
                                    data="Janeiro 2019 - Dezembro 2024"
                                    descricao="Ensino Básico"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CERTIFICADOS */}
                    <div className="certificate-wrapper grid gap-10 w-full max-w-4xl my-10 md:my-20 md:grid-cols-[220px_1fr] relative text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <SideSectionTitle titulo="Certificados" />
                        </div>

                        <div className="text-left intro-text w-full relative">
                            <div
                                className="
        hidden md:block 
        absolute left-0 top-0 h-full rounded-full w-[5px] 
        bg-gradient-to-b from-[#00FFAA] to-[#0bb37b] 
        timeline-line-certificate drop-shadow-[0_0_7px_#00FFAA]
      "
                            />
                            <div className="md:pl-10 flex flex-col gap-10">
                                <TimelineItem
                                    titulo="Apps Script para Automação do Google Workspace"
                                    data="Outubro 2025"
                                    descricao="Alura"
                                />
                                <TimelineItem
                                    titulo="Data Analysis: Google Sheets & Excel"
                                    data="Outubro 2025"
                                    descricao="Alura"
                                />
                                <TimelineItem
                                    titulo="Prompt Design in Vertex AI"
                                    data="Outubro 2025"
                                    descricao="Google Cloud"
                                />
                                <TimelineItem
                                    titulo="Foundation Design: Design Thinking, UX e UI"
                                    data="Julho 2025"
                                    descricao="Universidade Presbiteriana Mackenzie"
                                />
                                <TimelineItem
                                    titulo="AWS Educate Introduction to Generative AI"
                                    data="Abril 2025"
                                    descricao="Amazon Web Services (AWS)"
                                />
                                <TimelineItem
                                    titulo="Machine Learning"
                                    data="Março 2025"
                                    descricao="Amazon Web Services (AWS)"
                                />
                            </div>
                        </div>
                    </div>

                    {/* FERRAMENTAS */}
                    <div className="tools-wrapper grid gap-10 w-full max-w-4xl mt-10 md:grid-cols-[220px_1fr] relative text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <SideSectionTitle titulo="Ferramentas de trabalho" />
                        </div>

                        <div className="intro-text w-full relative flex flex-col md:flex-row gap-6 md:gap-10">
                            <ToolSection
                                titulo="Linguagens e Bibliotecas"
                                itens={[
                                    "JavaScript",
                                    "Python",
                                    "React",
                                    "TypeScript",
                                    "Next.js",
                                    "Node.js",
                                    "Tailwind CSS",
                                    "Bootstrap",
                                    "HTML",
                                ]}
                            />

                            <ToolSection
                                titulo="Ferramentas"
                                itens={[
                                    "Figma",
                                    "Photoshop",
                                    "InDesign",
                                    "Canva",
                                    "ClickUp",
                                    "Trello",
                                    "Miro",
                                ]}
                            />
                        </div>
                    </div>

                    {/* BOTÃO FINAL */}
                    <div className="mt-12">
                        <ButtonDownloadPDF text="Baixar Currículo (PDF)" curriculo={cv} />
                    </div>




                </section >
                <Footer />
            </main >
        </div >
    )
}
