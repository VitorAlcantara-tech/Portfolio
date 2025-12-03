import Header from '../components/Header'
import BackgroundParticles from '../components/BackgroundParticles'
import cv from '../../public/VitorAlcantara.pdf'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Resumo() {
    const sectionRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // garante que estamos dentro da section
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.intro-wrapper', // container da introdução
                    start: 'top 80%',          // quando o topo entrar em 80% da tela
                    toggleActions: 'play none none none',
                    // deixa ligado enquanto debug:
                    // markers: true,
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
                    className="flex flex-col items-center -mt-20 px-4 sm:px-6 lg:px-8"
                >
                    {/* HERO */}
                    <div className="w-full max-w-4xl min-h-[70vh] sm:min-h-screen flex flex-col justify-center items-center gap-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                            Sou Desenvolvedor Full-Stack especializado em{' '}
                            <span className="text-[#00FFAA] font-semibold">next.js</span>,{' '}
                            <span className="text-[#00FFAA] font-semibold">typescript</span> e{' '}
                            <span className="text-[#00FFAA] font-semibold">node.js</span>
                        </h1>

                        <div className="mt-4 sm:mt-6 flex justify-center">
                            <a
                                href={cv}
                                download
                                aria-label="Download do currículo em PDF"
                                className="inline-block bg-[#00FFAA] text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 hover:opacity-90 transition-opacity uppercase text-sm sm:text-base"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* INTRODUÇÃO (ANIMADA NO SCROLL) */}
                    <div className="intro-wrapper w-full max-w-5xl py-12 sm:py-16">
                        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-6 md:gap-30">
                            <h1
                                className="intro-title uppercase font-semibold text-2xl sm:text-3xl text-center md:text-left"
                            >
                                Introdução
                            </h1>

                            <p
                                className="intro-text w-full md:w-1/2 text-base sm:text-lg leading-relaxed text-justify md:text-left"
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
                    </div>

                    <div className="h-32 sm:h-64" />
                </section>

            </main>
        </div>
    )
}
