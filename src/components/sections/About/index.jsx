import { useEffect, useState } from "react";
import { db } from "../../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export function About() {
  const [infoSite, setInfoSite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true); // Estado para controle do carregamento da imagem

  // Busca de projetos do Firestore
  useEffect(() => {
    const fetchInfoSite = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "infoSite"));
        const infoSiteList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInfoSite(infoSiteList); // Atualiza o estado com os projetos
      } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
      } finally {
        setIsLoading(false); // Marcar como carregado
      }
    };

    fetchInfoSite(); // Chama a função ao montar o componente
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="w-8 h-8 border-4 border-t-transparent border-gray-600 border-solid rounded-full animate-spin"></div>
      </div>
    ); // Exibe enquanto os dados estão sendo buscados
  }

  // Se não encontrar o documento principal
  const mainInfo = infoSite.find((item) => item.id === "main");

  if (!mainInfo) {
    return <div>Estamos com problemas.</div>; // Exibe caso não haja dados
  }

  const { fotoCapa, nome, frase, formacao, especializacao, local, descricao } =
    mainInfo; // Desestruturação para acesso fácil

  // Função chamada quando a imagem é carregada
  const handleImageLoad = () => {
    setImageLoading(false); // Atualiza o estado para esconder o spinner
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-granito-pitaia px-4 md:px-16">
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 animate-fade-in">
        {/* Imagem redimensionada com transições */}
        {imageLoading && (
          <div className="absolute flex justify-center items-center">
            <div className="w-8 h-8 border-4 border-t-transparent border-gray-600 border-solid rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={fotoCapa}
          alt="Izabel Resende"
          className="w-3/5 sm:w-1/2 md:w-3/4 lg:w-1/2 rounded-full transition-transform duration-500 ease-in-out hover:scale-105"
          onLoad={handleImageLoad} // Chama a função quando a imagem terminar de carregar
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-2 md:space-y-4 mt-6 md:mt-0 animate-fade-in">
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left transition-opacity duration-700">
          {nome}
        </p>
        <p className="font-rouge text-lg sm:text-2xl lg:text-3xl font-semibold text-center md:text-left transition-opacity duration-700 delay-200">
          {frase}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left transition-opacity duration-700 delay-400">
          {formacao}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left transition-opacity duration-700 delay-600">
          {especializacao}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left transition-opacity duration-700 delay-800">
          {local}
        </p>
        {/* Adicionando max-width e ajuste do texto para evitar quebra */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-justify max-w-[90%] md:max-w-full transition-opacity duration-700 delay-1000">
          {descricao}
        </p>
      </div>
    </div>
  );
}
