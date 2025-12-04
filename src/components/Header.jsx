import { Link } from 'react-router-dom'
import logo from '../assets/logotipo.png'

export default function Header() {
    return (
        <div>
            <nav className='flex justify-center gap-25 list-none items-center h-35 text-xl text-gray-400'>
                <div className='flex w-70 justify-between'>
                    <Link
                        to="/"
                    >

                        <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold'>
                            PORTFOLIO
                        </li>
                    </Link>

                    <Link
                        to="/resumo"
                    >
                        <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold'>
                            RESUMO
                        </li>
                    </Link>
                </div>

                <li className='duration-300 hover:scale-110'>
                    <img className='w-15 hover:drop-shadow-[0_0_60px_#00FFAA]' src={logo} alt="Logotipo" />
                </li>

                <div className='flex w-70 justify-between'>

                    <Link
                        to="/sobremim"
                    >
                        <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold'>
                            SOBRE MIM
                        </li>
                    </Link>

                    <Link
                        to="/contato"
                    >
                        <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer hover:font-semibold'>
                            CONTATO
                        </li>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
