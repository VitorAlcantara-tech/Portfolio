import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import BackgroundParticles from "../components/BackgroundParticles"
import Footer from "../components/Footer"
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { fromJSON } from "postcss"

export default function Contato() {

    const myEmail = "vitor.alcantara.dev@gmail.com"

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        document.title = "Contato — Vitor Alcantara";
    }, []);

    function sendEmail(e) {
        e.preventDefault()


        const templateParams = {
            from_name: firstName + " " + lastName,
            email: email,
            message: message,
            time: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
        }
        emailjs.send("service_fxtal1s", "template_wv5pe6n", templateParams, "ooaNhdq-30Al-M2ie")
            .then((response) => {
                console.log("Email enviado", response.status, response.text)
                setFirstName("")
                setLastName("")
                setEmail("")
                setMessage("")

                setSucesso(true);
                setTimeout(() => setSucesso(false), 3000);

            }, (error) => {
                console.log("ERRO: ", error)
            })
    }

    const [copiado, setCopiado] = useState(false);

    const copiarEmail = () => {
        navigator.clipboard.writeText("vitor.alcantara.dev@gmail.com");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };


    return (
        <div>
            <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#010f17] to-[#020617] text-slate-100 pt-24 sm:pt-0">
    <Header />
    <BackgroundParticles />

    {/* SUCESSO */}
    {sucesso && (
        <div className="
            fixed top-6 left-1/2 -translate-x-1/2
            bg-[#00FFAA]/20 backdrop-blur-xl
            border border-[#00FFAA]/85
            text-[#00FFAA] 
            px-4 sm:px-6 py-2 sm:py-3 rounded-lg 
            shadow-[0_0_15px_rgba(0,255,170,0.4)]
            animate-fade-slide
            z-50
            text-xs sm:text-sm font-medium
        ">
            Mensagem enviada com sucesso!
        </div>
    )}

    <section className="relative max-w-5xl mx-auto px-8 sm:px-4 lg:px-0 py-16 sm:py-24 z-10">

        {/* EMAIL GRANDE */}
        <div className="mb-10 sm:mb-16 relative inline-block">
            <p className="
                text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight break-words
            ">
                <span className="text-slate-100">E-mail:</span>

                <button
                    onClick={copiarEmail}
                    className="
                        text-[#00FFAA] 
                        hover:opacity-90 
                        transition-opacity 
                        ml-0 sm:ml-2 mt-2 sm:mt-0 
                        block sm:inline 
                        break-words
                    "
                >
                    {myEmail}
                </button>
            </p>

            {copiado && (
                <div
                    className="
                        absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-2
                        w-fit px-3 py-1
                        bg-white/10 backdrop-blur 
                        text-white text-xs sm:text-sm
                        
                        animate-fade-slide
                    "
                >
                    Copiado!
                </div>
            )}
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[1fr,2fr]">

            {/* COLUNA ESQUERDA */}
            <div className="flex flex-col gap-8 sm:gap-12 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase text-slate-300">

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
                    <p className="mb-0">Conect-se comigo</p>

                    <div className="flex items-center gap-6 sm:gap-10 text-slate-100">
                        <a
                            href="https://www.linkedin.com/in/vitor-alcantara/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-400 hover:text-[#00FFAA] transition-all text-2xl sm:text-3xl"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/VitorAlcantara-tech"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github"
                            className="text-gray-400 hover:text-[#00FFAA] transition-all text-2xl sm:text-3xl"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.instagram.com/_vitor_alcan"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="text-gray-400 hover:text-[#00FFAA] transition-all text-2xl sm:text-3xl"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href={`mailto:${myEmail}`}
                            aria-label="Enviar e-mail"
                            className="text-gray-400 hover:text-[#00FFAA] transition-all text-2xl sm:text-3xl"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div>
                    <p className="normal-case tracking-normal text-slate-300 text-sm sm:text-base">
                        Envie uma mensagem
                    </p>
                </div>
            </div>

            {/* FORM */}
            <div className="text-left">
                <form className="space-y-6" onSubmit={sendEmail}>

                    {/* NAME */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Nome</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <span className="block text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                                    Primeiro Nome
                                </span>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full border border-slate-800 bg-slate-950/85 px-3 py-2 md:p-3 text-sm  
                                        focus:outline-none focus:border-[#00FFAA] transition-colors"
                                />
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                                    Último Nome
                                </span>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full border border-slate-800 bg-slate-950/85 px-3 py-2 md:p-3 text-sm  
                                        focus:outline-none focus:border-[#00FFAA] transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Endereço de email{" "}
                            <span className="text-xs lowercase text-slate-400">(obrigatório)</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-slate-800 bg-slate-950/85 px-3 py-2 md:p-3 text-sm  
                            focus:outline-none focus:border-[#00FFAA] transition-colors"
                        />
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Mensagem{" "}
                            <span className="text-xs lowercase text-slate-400">(obrigatório)</span>
                        </label>
                        <textarea
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            className="w-full border border-slate-800 bg-slate-950/85 px-3 py-4 text-sm  
                            resize-none focus:outline-none focus:border-[#00FFAA] transition-colors"
                        />
                    </div>

                    {/* BOTÃO */}
                    <button
                        type="submit"
                        className="
                            mt-2 md:mt-6 w-full sm:w-auto 
                            inline-flex items-center justify-center 
                            px-10 py-3 
                            bg-slate-900 text-slate-100 
                            tracking-[0.25em] uppercase text-xs font-semibold 
                            hover:bg-slate-800 transition-colors 
                        "
                    >
                        Enviar
                    </button>
                </form>
            </div>

        </div>
    </section>

    <Footer />
</main>

        </div>
    )
}
