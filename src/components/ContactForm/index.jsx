import React, { useRef } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xu9pyhf", // Substitua pelo seu Service ID
        "template_0ae15x9", // Substitua pelo seu Template ID
        form.current,
        "qzrFyqoPVqUAy-DiA" // Substitua pelo seu User ID
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Erro ao enviar, tente novamente.");
        }
      );
    form.current.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-lg bg-white shadow-md rounded-lg p-4 space-y-2"
    >
      <div>
        <label className="block text-gray-700">Nome</label>
        <input
          type="text"
          name="name" // Nome do campo adicionado
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email" // Nome do campo adicionado
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu email"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Mensagem</label>
        <textarea
          rows="4"
          name="message" // Nome do campo adicionado
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite sua mensagem"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
