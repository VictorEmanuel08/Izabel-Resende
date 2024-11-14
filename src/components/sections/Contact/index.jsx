import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Perfil from "../../../assets/FOTO_BEL_PERFIL.jpg";
import { ContactForm } from "../../ContactForm";

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

        <ContactForm />
      </div>
      {/* Descrição */}
      <p className="text-center text-gray-700 max-w-lg mb-8">
        Adoraríamos ouvir de você! Entre em contato para sugestões, dúvidas ou
        parcerias.
      </p>
    </div>
  );
}
