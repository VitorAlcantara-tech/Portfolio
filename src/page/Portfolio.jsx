import Header from "../components/Header";

export default function Portfolio() {
  return (
    <div>
        <Header />
        <div className="mx-40 my-20 text-center ">
            <h1 className="text-3xl uppercase font- font-[Raleway] font-semibold">
                Olá! sou Vitor <span className="text-[#00FFAA]">Alcantara</span></h1>
            
            <p className="text-6xl mt-5 text-[] font-bold uppercase drop-shadow-[0_20px_110px_#00FFFA]">Desenvolvedor full-stack, apaixonado por tecnologia e por criar soluções que facilitam a vida das pessoas.</p>
        </div>
    </div>
  )
}