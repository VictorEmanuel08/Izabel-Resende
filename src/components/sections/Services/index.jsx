import { CardServices } from "../../CardServices";

export function Services() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-100 px-4 md:px-16 space-y-8">
      <h1 className="text-3xl font-bold mt-16 text-black">Serviços</h1>
      <div className="border-t border-black w-full"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <CardServices titulo={"Consultoria"} />
        <div className="p-6 bg-gray-400 text-white rounded-lg flex flex-col items-center">
          <span className="text-xl mb-2">Reforma</span>
          <span className="text-sm">⬇</span>
        </div>
        <div className="p-6 bg-gray-400 text-white rounded-lg flex flex-col items-center">
          <span className="text-xl mb-2">
            Projeto de Interiores Residencial
          </span>
          <span className="text-sm">⬇</span>
        </div>
        <div className="p-6 bg-gray-400 text-white rounded-lg flex flex-col items-center">
          <span className="text-xl mb-2">Projeto Arquitetônico</span>
          <span className="text-sm">⬇</span>
        </div>
        <div className="p-6 bg-gray-400 text-white rounded-lg flex flex-col items-center">
          <span className="text-xl mb-2">Projeto Legal</span>
          <span className="text-sm">⬇</span>
        </div>
        <div className="p-6 bg-gray-400 text-white rounded-lg flex flex-col items-center">
          <span className="text-xl mb-2">Projeto de Interiores Comercial</span>
          <span className="text-sm">⬇</span>
        </div>
        <div className="p-6 bg-gray-400 text-white rounded-lg flex flex-col items-center">
          <span className="text-xl mb-2">Projeto Executivo</span>
          <span className="text-sm">⬇</span>
        </div>
      </div>
    </div>
  );
}
