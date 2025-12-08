import { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi"
import logo from "../assets/logotipo.png"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="w-full">
            {/* MOBILE HEADER - FIXED */}
            <nav
                className="
          flex items-center justify-between 
          px-4 py-4 
          md:hidden
          fixed top-0 left-0 w-full 
          bg-[#021926]/25 backdrop-blur-md
          z-50
        "
            >
                {/* LOGO ESQUERDA */}
                <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                    <img
                        src={logo}
                        alt="Logotipo"
                        className="w-12 hover:drop-shadow-[0_0_20px_#00FFAA] transition-all"
                    />
                </Link>

                {/* ÍCONE HAMBÚRGUER */}
                <button
                    className="text-gray-300 text-3xl"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Abrir menu"
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* -------- MENU MOBILE FULLSCREEN -------- */}
            {open && (
                <div
                    className="
            fixed inset-0        /* cobre a tela inteira */
            bg-[#020617] backdrop-blur-md

            flex flex-col items-center justify-center
            gap-10
            text-gray-200 text-2xl
            font-semibold
            uppercase tracking-wide
            z-40
            md:hidden
          "
                >
                    <Link to="/" onClick={() => setOpen(false)} className="hover:text-[#00FFAA] transition-all -z-50">
                        PORTFOLIO
                    </Link>

                    <Link to="/resumo" onClick={() => setOpen(false)} className="hover:text-[#00FFAA] transition-all -z-50">
                        RESUMO
                    </Link>

                    <Link to="/sobremim" onClick={() => setOpen(false)} className="hover:text-[#00FFAA] transition-all -z-50">
                        SOBRE MIM
                    </Link>

                    <Link to="/contato" onClick={() => setOpen(false)} className="hover:text-[#00FFAA] transition-all -z-50">
                        CONTATO
                    </Link>
                </div>
            )}

            {/* -------- DESKTOP HEADER (SEU ORIGINAL — INALTERADO) -------- */}
            <nav className="hidden md:flex justify-center gap-25 list-none items-center h-35 text-xl text-gray-400">
                <div className="flex w-70 justify-between">
                    <Link to="/">
                        <li className="duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold">
                            PORTFOLIO
                        </li>
                    </Link>

                    <Link to="/resumo">
                        <li className="duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold">
                            RESUMO
                        </li>
                    </Link>
                </div>

                <li className="duration-300 hover:scale-110">
                    <img
                        className="w-15 hover:drop-shadow-[0_0_60px_#00FFAA]"
                        src={logo}
                        alt="Logotipo"
                    />
                </li>

                <div className="flex w-70 justify-between">
                    <Link to="/sobremim">
                        <li className="duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold">
                            SOBRE MIM
                        </li>
                    </Link>

                    <Link to="/contato">
                        <li className="duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold">
                            CONTATO
                        </li>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
