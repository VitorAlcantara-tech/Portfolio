import React from 'react'

export default function ButtonDownloadPDF({ text, curriculo }) {
    return (
        <div className="mt-4 sm:mt-6 flex justify-center">
            <a
                href={curriculo}
                download
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
                {text}
            </a>
        </div>
    )
}
