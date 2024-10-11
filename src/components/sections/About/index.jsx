import Perfil from "../../../assets/FOTO_BEL_PERFIL.jpg";

export function About() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-granito-pitaia px-4 md:px-16">
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 animate-fade-in">
        {/* Imagem redimensionada com transições */}
        <img
          src={Perfil}
          alt="Izabel Resende"
          className="w-3/5 sm:w-1/2 md:w-3/4 lg:w-1/2 rounded-full transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-2 md:space-y-4 mt-6 md:mt-0 animate-fade-in">
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left transition-opacity duration-700">
          Izabel Resende
        </p>
        <p className="font-rouge text-lg sm:text-2xl lg:text-3xl font-semibold text-center md:text-left transition-opacity duration-700 delay-200">
          Transformando espaços, inspirando vidas.
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left transition-opacity duration-700 delay-400">
          ARQUITETA E URBANISTA
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left transition-opacity duration-700 delay-600">
          ARQUITETURA E INTERIORES
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left transition-opacity duration-700 delay-800">
          ATENDENDO NO MARANHÃO E PIAUÍ
        </p>
        {/* Adicionando max-width e ajuste do texto para evitar quebra */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-justify max-w-[90%] md:max-w-full transition-opacity duration-700 delay-1000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          placeat ex. Lorem ipsum.
        </p>
      </div>
    </div>
  );
}
