import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Perfil from "../../../assets/FOTO_BEL_PERFIL.jpg";

export function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 md:px-16 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Entre em Contato
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
        <div className="w-full md:w-1/2 space-y-6">
          <img
            src={Perfil}
            alt="Profile"
            className="w-64 rounded-full mx-auto shadow-lg"
          />

          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:scale-110 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+558699073398"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:scale-110 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-4 space-y-2">
          <div>
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua mensagem"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
      {/* Descrição */}
      <p className="text-center text-gray-700 max-w-lg mb-8">
        Adoraríamos ouvir de você! Entre em contato para sugestões, dúvidas ou
        parcerias.
      </p>
    </div>
  );
}
