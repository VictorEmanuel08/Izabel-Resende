import { useEffect, useState } from "react";
import { loadFiles } from "../../../utils/loadFiles"; // importe a função
import { FullScreenCarousel } from "../../FullScreenCarousel";

export function Projects() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    // Carrega os arquivos ao montar o componente
    const fetchProjetos = async () => {
      const projetosData = loadFiles(); // Carrega os projetos sincronamente
      setProjetos(projetosData);
    };

    fetchProjetos();
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4 md:px-16 py-8">
      <h1 className="text-3xl font-bold text-black">Projetos</h1>
      <div className="mt-6 border-t border-black w-full"></div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="relative transition-all duration-700 ease-in-out hover:scale-105 h-36 sm:h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${projeto.photos[0]})` }}
            onClick={() => setSelectedProject(projeto)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">
                {projeto.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="relative transition-all duration-700 ease-in-out hover:scale-105 h-36 sm:h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${projeto.photos[0]})` }}
            onClick={() => setSelectedProject(projeto)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">
                {projeto.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="relative transition-all duration-700 ease-in-out hover:scale-105 h-36 sm:h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${projeto.photos[0]})` }}
            onClick={() => setSelectedProject(projeto)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">
                {projeto.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <FullScreenCarousel
          className="min-h-screen"
          projeto={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
