export default function TimelineItem({ titulo, data, descricao }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p className="font-medium text-gray-300">{data}</p>
      <p className="mt-1 font-normal text-gray-200">{descricao}</p>
    </div>
  );
}
