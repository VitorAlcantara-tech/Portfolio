import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Botoes({ github, site }) {
    return (
        < div className="flex justify-center gap-4 mt-2" >
            {/* Botão GitHub */}
            {
                github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#0A0F1F] border border-gray-700 text-gray-300 px-4 py-2 rounded-full 
                       hover:bg-gray-800 hover:border-gray-500 transition-all"
                    >
                        <FaGithub className="text-xl" />
                        <span>GitHub</span>
                    </a>
                )
            }

            {/* Botão Acessar site */}
            {
                site && (
                    <a
                        href={site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#00FFAA] text-black px-4 py-2 rounded-full font-semibold
                       hover:bg-[#00dd94] transition-all"
                    >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Acessar</span>
                    </a>
                )
            }
        </div >
    )
}
