import BackgroundParticles from "../components/BackgroundParticles";
import Header from "../components/Header";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#021926] to-[#020617] text-white overflow-hidden">
      <Header />
      <BackgroundParticles />

      <main className="max-w-5xl mx-auto px-4 pt-32 pb-16 text-center relative z-10">
        <h1 className="text-sm sm:text-base md:text-lg uppercase tracking-[0.35em] font-semibold font-[Raleway]">
          Olá! sou Vitor <span className="text-[#00FFAA]">Alcantara</span>
        </h1>

        <p className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight drop-shadow-[0_20px_110px_#00FFFA]">
          Desenvolvedor full-stack, apaixonado por tecnologia e por criar soluções
          que facilitam a vida das pessoas.
        </p>
      </main>
    </div>
  );
}
