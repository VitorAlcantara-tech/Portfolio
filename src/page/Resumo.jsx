import Header from '../components/Header'
import BackgroundParticles from '../components/BackgroundParticles'
import cv from '../../public/VitorAlcantara.pdf'
import TimelineItem from '../components/Resumo/TimelineItem';
import SideSectionTitle from '../components/Resumo/SideSectionTitle';

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ToolSection from '../components/Resumo/ToolSection';
import ButtonDownloadPDF from '../components/Resumo/ButtonDownloadPDF';
import Footer from '../components/Footer';

export default function Resumo() {
    const sectionRef = useRef(null)

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
                        markers: true,
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
            <main>
                <Header />
                <BackgroundParticles />

                <section
                    ref={sectionRef}
                    className="flex flex-col items-center text-center lg:px-8"
                >
                    {/* HERO */}
                    <div className="w-full max-w-4xl min-h-[70vh] sm:min-h-screen flex flex-col justify-center items-center gap-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight -mt-40 uppercase">
                            Sou Desenvolvedor Full-Stack especializado em{' '}
                            <span className="text-[#00FFAA] font-semibold">next.js</span>,{' '}
                            <span className="text-[#00FFAA] font-semibold">typescript</span> e{' '}
                            <span className="text-[#00FFAA] font-semibold">node.js</span>
                        </h1>

                        <ButtonDownloadPDF
                            text="Download do Currículo (PDF)"
                            curriculo={cv}
                        />
                    </div>

                    {/* INTRODUÇÃO + EXPERIÊNCIA + FORMAÇÃO */}
                    <div className="intro-wrapper flex flex-col gap-40 w-full max-w-4xl sm:py-16">
                        {/* INTRODUÇÃO */}
                        <div className="grid grid-cols-[220px_1fr] gap-10 w-full">
                            <h1
                                className="intro-title uppercase font-semibold text-2xl sm:text-3xl text-left"
                            >
                                Introdução
                            </h1>

                            <p
                                className="intro-text text-base sm:text-lg leading-relaxed text-justify"
                            >
                                Sou um desenvolvedor full-stack com foco em aplicar soluções práticas e eficientes
                                para demandas do dia a dia. Possuo sólidos conhecimentos em HTML, CSS e JavaScript,
                                além de experiência com tecnologias avançadas de frontend, como React, Typescript e
                                Tailwind CSS.
                                <br />
                                <br />
                                No backend, trabalho com Python, Node.js e Next.js, atuando tanto em automações quanto
                                no desenvolvimento de aplicações completas. Tenho familiaridade com SQL, o que me
                                permite compreender e manipular dados de forma estruturada.
                                <br />
                                <br />
                                Atualmente, busco oportunidades que me permitam expandir minha experiência
                                profissional, aprimorar minhas competências técnicas e contribuir para projetos que
                                agreguem valor ao negócio.
                            </p>
                        </div>

                        {/* EXPERIÊNCIA PROFISSIONAL*/}
                        <div className="experience-wrapper grid grid-cols-[220px_1fr] gap-10 w-full relative">

                            <div className="flex flex-col items-center md:items-start">
                                <SideSectionTitle titulo="Experiência Profissional" />
                            </div>

                            <div className="text-left intro-text w-full md:w-3/4 relative">
                                <div className="hidden md:block absolute left-0 top-0 h-full rounded-full w-[5px] bg-gradient-to-b from-[#00FFAA] to-[#0bb37b] timeline-line-experience" />

                                <div className="pl-10 flex flex-col gap-10">
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
                        <div className="academic-wrapper grid grid-cols-[220px_1fr] gap-10 w-full relative text-left">

                            <SideSectionTitle titulo="Formação Acadêmica" />

                            <div className="text-left intro-text w-full relative">
                                <div className="hidden md:block absolute left-0 top-0 h-full rounded-full w-[5px] bg-gradient-to-b from-[#00FFAA] to-[#0bb37b] timeline-line-academic" />

                                <div className="pl-10 flex flex-col gap-10">
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

                        {/* Certificados */}
                        <div className="certificate-wrapper grid grid-cols-[220px_1fr] gap-10 w-full relative text-left">

                            <SideSectionTitle titulo="Certificados" />

                            <div className="text-left intro-text w-full relative">
                                <div className="hidden md:block absolute left-0 top-0 h-full rounded-full w-[5px] bg-gradient-to-b from-[#00FFAA] to-[#0bb37b] timeline-line-certificate" />

                                <div className="pl-10 flex flex-col gap-10">
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

                        {/* Ferramentas */}
                        <div className="tools-wrapper grid grid-cols-[220px_1fr] gap-10 w-full relative text-left">

                            <SideSectionTitle titulo="Ferramentas de trabalho" />

                            <div className="intro-text w-full relative flex gap-6 md:gap-10 md:flex-row flex-col">

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
                                        "HTML"
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
                                        "Miro"
                                    ]}
                                />

                            </div>
                        </div>


                        <ButtonDownloadPDF
                            text="Download do Currículo (PDF)"
                            curriculo={cv}
                        />
                    </div>

                    <Footer />

                </section>
            </main>
        </div>
    )
}
