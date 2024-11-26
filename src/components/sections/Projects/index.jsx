import { useEffect, useState } from "react";
import { db } from "../../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FullScreenCarousel } from "../../FullScreenCarousel";

export function Projects() {
  const [projects, setProjects] = useState([]);

  // Busca de projetos do Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsList); // Atualiza o estado com os projetos
      } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
      }
    };

    fetchProjects(); // Chama a função ao montar o componente
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-granito-pitaia px-4 md:px-16 py-8">
      <h1 className="text-3xl font-bold text-black">Projetos</h1>
      <div className="mt-6 border-t border-black w-full"></div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative transition-all duration-700 ease-in-out hover:scale-105 h-36 sm:h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${project.files[0]})` }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <FullScreenCarousel
          className="min-h-screen"
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
