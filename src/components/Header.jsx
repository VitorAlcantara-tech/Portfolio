import logo from '../assets/Logo_Vitao.png'

export default function Header() {
    return (
        <div>
            <nav className='flex justify-around list-none items-center h-50 text-xl text-gray-400'>
                <div className='flex w-60 justify-between'>
                    <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer'>PORTFOLIO</li>
                    <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer'>RESUMO</li>
                </div>
                <li className='duration-300 hover:scale-110 hover:cursor-pointer'>
                    <img className='w-20 hover:drop-shadow-[0_0_60px_#00FFAA]' src={logo} alt="Logotipo" /></li>
                <div className='flex w-60 justify-between'>
                    <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer'>SOBRE MIM</li>
                    <li className='duration-300 hover:scale-105 hover:text-gray-50 cursor-pointer'>CONTATO</li>
                </div>
            </nav>
        </div>
    )
}
