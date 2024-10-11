import { useState } from "react";
import { Link } from "react-scroll"; // Importando o Link da biblioteca react-scroll
import Logo from "../../assets/1LOGO IR.png";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do menu hamburguer

export function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna o menu aberto/fechado
  };

  return (
    <div className="bg-white w-full flex items-center justify-between py-1 px-8 md:px-16 fixed top-0 left-0 z-10 shadow-md font-poppins select-none transition-shadow duration-500 hover:shadow-lg">
      <Link to="sobre" smooth={true} duration={900}>
        {/* Logo com transição */}
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-auto transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
        />
      </Link>

      <div className="flex items-center">
        {/* Ícone do menu hambúrguer visível em telas menores */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-3xl transition-transform duration-300" /> // Ícone de fechar
            ) : (
              <FiMenu className="text-3xl transition-transform duration-300" /> // Ícone de menu
            )}
          </button>
        </div>

        {/* Menu em telas maiores */}
        <div className="hidden md:flex space-x-8">
          <Link to="sobre" smooth={true} duration={900}>
            <button className="transition-all duration-300 hover:text-gray-500 hover:underline">
              Sobre
            </button>
          </Link>
          <Link to="servicos" smooth={true} duration={900}>
            <button className="transition-all duration-300 hover:text-gray-500 hover:underline">
              Serviços
            </button>
          </Link>
          <Link to="projetos" smooth={true} duration={900}>
            <button className="transition-all duration-300 hover:text-gray-500 hover:underline">
              Projetos
            </button>
          </Link>
          <Link to="contato" smooth={true} duration={900}>
            <button className="transition-all duration-300 hover:text-gray-500 hover:underline">
              Contato
            </button>
          </Link>
        </div>
      </div>

      {/* Menu hambúrguer em telas menores */}
      <div
        className={`absolute top-12 right-0 w-1/2 bg-white rounded-2xl shadow-lg flex flex-col items-center md:hidden z-20 transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{
          pointerEvents: isOpen ? "auto" : "none", // Para prevenir cliques quando o menu estiver fechado
        }}
      >
        <Link to="sobre" smooth={true} duration={900} onClick={toggleMenu}>
          <button className="py-2 w-full text-center transition-all duration-300 hover:text-gray-500 hover:underline">
            Sobre
          </button>
        </Link>
        <Link to="servicos" smooth={true} duration={900} onClick={toggleMenu}>
          <button className="py-2 w-full text-center transition-all duration-300 hover:text-gray-500 hover:underline">
            Serviços
          </button>
        </Link>
        <Link to="projetos" smooth={true} duration={900} onClick={toggleMenu}>
          <button className="py-2 w-full text-center transition-all duration-300 hover:text-gray-500 hover:underline">
            Projetos
          </button>
        </Link>
        <Link to="contato" smooth={true} duration={900} onClick={toggleMenu}>
          <button className="py-2 w-full text-center transition-all duration-300 hover:text-gray-500 hover:underline">
            Contato
          </button>
        </Link>
      </div>
    </div>
  );
}
