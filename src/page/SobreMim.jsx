import React from 'react'
import Header from '../components/Header'
import BackgroundParticles from '../components/BackgroundParticles'
import vitorFoto from "../assets/Vitor.png";
import Footer from '../components/Footer';


import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SobreMim() {
    const bioRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const element = bioRef.current
        if (!element) return

        // Quebra o texto em spans por letra
        const splitTextIntoSpans = (el) => {
            const text = el.innerText
            const chars = text.split("")
            el.innerHTML = ""

            chars.forEach((char) => {
                const span = document.createElement("span")
                span.textContent = char
                span.style.opacity = 0 // começa invisível
                span.style.filter = "blur(4px)" // blur inicial
                el.appendChild(span)
            })
        }

        splitTextIntoSpans(element)

        const letters = element.querySelectorAll("span")

        gsap.to(letters, {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            duration: 1,
            stagger: 0.02,
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 70%",
                scrub: true, // anima junto com o scroll
                // markers: true,
            },
        })
    }, [])




    return (
        <div>
            <main className='px-10 lg:px-40 text-center bg-gradient-to-b from-[#020617] via-[#010f17] to-[#020617]'>
                <Header />
                <BackgroundParticles />

                {/* CONTAINER PRINCIPAL */}
                <section className="flex flex-col lg:flex-row items-center lg:items-start gap-16 py-32 max-w-6xl mx-auto">

                    {/* FOTO DO VITOR */}
                    <div className="">
                        <img
                            src={vitorFoto}
                            alt="Vitor Alcantara"
                            className="
                                w-56 h-56 lg:w-72 lg:h-72 
                                object-cover rounded-full mx-auto
                                shadow-[0_0_20px_#00FFAA] 
                                transition-all duration-300
                                hover:scale-105 hover:shadow-[0_0_35px_#00FFAA]
                            "
                        />
                    </div>

                    {/* TEXTO */}
                    <div className="flex-1 space-y-6 text-left">

                        {/* Tag de sessão */}
                        <span className="text-xs font-semibold tracking-[0.25em] text-[#00FFAA] uppercase">
                            Sobre mim
                        </span>

                        {/* Frase principal */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight uppercase">
                            Jovem desenvolvedor motivado por{" "}
                            <span className="text-[#00FFAA] font-semibold">desafios</span>, sempre{" "}
                            <span className="text-[#00FFAA] font-semibold">aprendendo</span> e evoluindo
                            com <span className="text-[#00FFAA] font-semibold">propósito</span>.
                        </h1>

                        {/* Wrapper com máscara gradiente */}
                        <div
                            className="my-20"
                            style={{
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, transparent 0%, white 5%, white 85%, transparent 100%)",
                                maskImage:
                                    "linear-gradient(to bottom, transparent 0%, white 5%, white 85%, transparent 100%)",
                            }}
                        >

                            {/* Bio com animação letra a letra */}
                            <p
                                ref={bioRef}
                                className="text-base sm:text-lg leading-relaxed text-slate-200"
                            >
                                Estudante de Engenharia de Software na FIAP - SP, em busca de
                                oportunidades para atuar como desenvolvedor e aplicar na prática os
                                conhecimentos adquiridos tanto na graduação quanto em cursos
                                extracurriculares. Tenho interesse genuíno em tecnologia e estou
                                sempre disposto em buscar novos aprendizados que possam contribuir para
                                minha evolução profissional e pessoal.
                                <br /><br />
                                Me considero uma pessoa comunicativa e colaborativa, com facilidade
                                para trabalhar em equipe e compreender a importância da boa interação
                                para o sucesso de um projeto. Gosto de enfrentar desafios que testem
                                meus conhecimentos ou que me incentivem a aprender ainda mais. Sou
                                proativo, comprometido com prazos e tenho um forte senso de
                                responsabilidade.
                                <br /><br />
                                Fora do ambiente acadêmico e profissional, sou apaixonado por
                                esportes — especialmente o judô, no qual sou atleta faixa preta. Essa
                                arte marcial me ensinou valores como disciplina, respeito e
                                generosidade, princípios que levo comigo tanto dentro quanto fora do
                                tatame.
                            </p>
                        </div>
                    </div>

                </section>
                <div className='h-screen'></div>
            </main>
        </div>
    )
}
