export function CardServices({ titulo }) {
  return (
    <div className="p-6 bg-gray-400 text-white rounded-lg flex flex-col items-center">
      <span className="text-xl mb-2">{titulo}</span>
      <span className="text-sm">⬇</span>
    </div>
  );
}
