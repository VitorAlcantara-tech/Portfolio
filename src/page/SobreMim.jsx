import React from 'react'
import Header from '../components/Header'
import BackgroundParticles from '../components/BackgroundParticles'
import vitorFoto from "../assets/Vitor.png";
import Footer from '../components/Footer';


import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SobreMim() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const block = document.querySelector(".bio-block");
        if (!block) return;

        const paragraphs = block.querySelectorAll("p");
        const allLetters = [];

        paragraphs.forEach((p) => {
            const text = p.textContent;       // pega só texto
            p.textContent = "";               // limpa o conteúdo

            text.split("").forEach((char) => {
                const span = document.createElement("span");

                if (char === " ") {
                    span.innerHTML = "&nbsp;";     // espaço real
                    span.classList.add("space-span");
                } else {
                    span.textContent = char;
                }

                span.style.opacity = 0.15;
                span.style.display = "inline-block";

                p.appendChild(span);
                allLetters.push(span);
            });

        });

        gsap.to(allLetters, {
            opacity: 1,
            ease: "none",
            stagger: 0.02,                     // letra a letra no bloco inteiro
            scrollTrigger: {
                trigger: block,
                start: "top 85%",
                end: "bottom 40%",
                scrub: true,
                // markers: true,
            },
        });
    }, []);






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

                        <div
                            className="my-20"
                            style={{
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, white 0%, white 85%, transparent 100%)",
                                maskImage:
                                    "linear-gradient(to bottom, white 0%, white 95%, transparent 100%)",
                            }}
                        >
                            {/* Bio com animação letra a letra */}
                            <div className="bio-block text-base sm:text-xl leading-relaxed text-slate-200 flex flex-col gap-6">
                                <p>
                                    Estudante de Engenharia de Software na FIAP - SP, em busca de
                                    oportunidades para atuar como desenvolvedor e aplicar na prática os
                                    conhecimentos adquiridos tanto na graduação quanto em cursos
                                    extracurriculares. Tenho interesse genuíno em tecnologia e estou
                                    sempre disposto em buscar novos aprendizados que possam contribuir para
                                    minha evolução profissional e pessoal.
                                </p>

                                <p>
                                    Me considero uma pessoa comunicativa e colaborativa, com facilidade
                                    para trabalhar em equipe e compreender a importância da boa interação
                                    para o sucesso de um projeto. Gosto de enfrentar desafios que testem
                                    meus conhecimentos ou que me incentivem a aprender ainda mais. Sou
                                    proativo, comprometido com prazos e tenho um forte senso de
                                    responsabilidade.
                                </p>

                                <p>
                                    Fora do ambiente acadêmico e profissional, sou apaixonado por
                                    esportes — especialmente o judô, no qual sou graduado faixa preta. Essa
                                    arte marcial me ensinou valores como disciplina, respeito e
                                    generosidade, princípios que levo comigo tanto dentro quanto fora do
                                    tatame.
                                </p>

                                <p>
                                    Atualmente atuo na Real Soluções como estagiário em Desenvolvimento de Sistemas,
                                    onde estou adquirindo conhecimento e experiência em sistemas reais, entendendo
                                    como funciona o ciclo completo de criação, manutenção e evolução de softwares.
                                    Trabalho com ferramentas de versionamento e tenho contato com metodologias ágeis,
                                    acompanhando dailys e aprendendo sobre sprints.
                                </p>
                            </div>

                        </div>
                        <div className="mt-4 sm:mt-6 flex justify-start">
                            <a
                                href='contato'
                                aria-label="Download do currículo em PDF"
                                className="
                    inline-block bg-[#00FFAA] text-black font-semibold 
                    py-3 px-6 sm:py-3 sm:px-8 
                    uppercase text-sm sm:text-base
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,255,170,0.5)]
                    rounded-md
                "
                            >
                                Vamos Conversar!
                            </a>
                        </div>
                    </div>
                </section>
            </main>
                <Footer />
        </div>
    )
}
