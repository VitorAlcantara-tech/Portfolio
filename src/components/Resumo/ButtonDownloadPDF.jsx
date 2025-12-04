import React from 'react'

export default function ButtonDownloadPDF({text, curricu}) {
    return (
        <div className="mt-4 sm:mt-6 flex justify-center">
            <a
                href={curricu}
                download
                aria-label="Download do currículo em PDF"
                className="inline-block bg-[#00FFAA] text-black font-semibold py-3 px-6 sm:py-3 sm:px-8 hover:opacity-90 transition-opacity uppercase text-sm sm:text-base"
            >
                {text}
            </a>
        </div>
    )
}
