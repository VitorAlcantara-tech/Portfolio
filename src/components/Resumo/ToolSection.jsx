export default function ToolSection({ titulo, itens }) {
  return (
    <div className="tool-section bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg shadow-black/30">
      <h3 className="uppercase text-lg sm:text-xl font-semibold text-[#00FFAA] mb-4 flex items-center gap-2">
        <span className="w-1.5 h-7 rounded-full bg-gradient-to-b from-[#00FFAA] to-[#0bb37b] " />
        {titulo}
      </h3>

      <ul className="space-y-1">
        {itens.map((item, index) => (
          <li
            key={index}
            className="tool-item text-sm sm:text-base text-gray-200/90 uppercase font-bold"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
