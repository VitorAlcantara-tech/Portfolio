export default function CardServicos({ titulo, descricao, icone }) {
  return (
    <div
      className="
        group rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-center
        shadow-lg shadow-slate-900/40 backdrop-blur transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.02]
        hover:border-emerald-400/30 hover:shadow-[0_0_20px_rgba(0,255,170,0.18)]
      "
    >
      <div
        className="
          mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
          bg-emerald-400/10 text-emerald-300 transition-transform duration-300
          group-hover:-translate-y-1 group-hover:scale-110
        "
      >
        {icone}
      </div>
      <h3 className="text-xl font-semibold text-slate-100">{titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{descricao}</p>
    </div>
  );
}
