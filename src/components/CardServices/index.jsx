import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function CardServices({ titulo, desc }) {
  const [isExpanded, setIsExpanded] = useState(false); // Controla o estado expandido/colapsado

  // Função para alternar o estado
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={toggleExpand} // O clique agora é no card
      className="relative bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center 
      transition-all duration-700 ease-in-out hover:bg-gray-700 hover:scale-105 cursor-pointer
      w-full h-36 sm:h-40 select-none" // Definindo tamanhos fixos
    >
      {/* Ícone que alterna entre seta para baixo e para cima */}
      <MdOutlineKeyboardArrowDown
        className={`absolute top-2 left-2 text-3xl sm:text-4xl lg:text-5xl transition-transform duration-700 ease-in-out ${
          isExpanded ? "rotate-180" : "rotate-0" // Altera de rotate-0 para rotate-180
        }`}
      />

      {/* Container que sobrepõe o título e a descrição */}
      <div className="relative text-justify w-full h-full flex items-center justify-center">
        {/* Título com animação para entrar e sair de cena */}
        <p
          className={`text-center text-base sm:text-lg lg:text-xl px-2 sm:px-14 absolute transition-all duration-700 ease-in-out ${
            isExpanded
              ? "translate-y-full opacity-0" // Título some
              : "translate-y-0 opacity-100" // Título visível
          }`}
        >
          {titulo}
        </p>

        {/* Descrição com animação para entrar e sair de cena */}
        <p
          className={`text-xs sm:text-lg px-2 sm:px-14 absolute transition-all duration-700 ease-in-out ${
            isExpanded
              ? "translate-y-0 opacity-100" // Descrição aparece
              : "translate-y-full opacity-0" // Descrição visível
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
