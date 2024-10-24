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
      className={`relative bg-gray-400 text-white rounded-lg flex flex-col items-center justify-center 
      transition-all duration-300 hover:bg-gray-500 cursor-pointer
      w-full h-36 sm:h-40`} // Definindo tamanhos fixos
    >
      {/* Ícone que alterna entre seta para baixo e para cima */}
      <MdOutlineKeyboardArrowDown
        className={`absolute top-2 left-2 text-3xl sm:text-4xl lg:text-5xl transition-transform duration-[3000ms] ease-in-out ${
          isExpanded ? "rotate-180" : "rotate-0"
        }`}
      />

      {/* Container que sobrepõe o título e a descrição */}
      <div className="relative text-center text-lg sm:text-xl lg:text-2xl w-full h-full flex items-center justify-center">
        {/* Título com animação para sair de cena */}
        <p
          className={`absolute transition-all duration-500 ease-in-out ${
            isExpanded
              ? "translate-y-full opacity-0" // Título sai de cena
              : "translate-y-0 opacity-100" // Título visível
          }`}
        >
          {titulo}
        </p>

        {/* Descrição com animação para entrar em cena */}
        <p
          className={`text-xs sm:text-lg px-2 sm:px-14 text-center whitespace-nowrap absolute transition-all duration-500 ease-in-out ${
            isExpanded
              ? "translate-y-0 opacity-100" // Descrição aparece
              : "-translate-y-full opacity-0" // Descrição sai de cena
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
