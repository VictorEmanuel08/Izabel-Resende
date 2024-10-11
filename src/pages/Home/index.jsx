import { Header } from "../../components/Header";
import { About } from "../../components/sections/About";

export function Home() {
  return (
    <div className="min-w-full min-h-screen flex flex-col font-poppins">
      <Header />
      <div className="flex flex-col">
        <div id="sobre">
          <About />
        </div>
        <div
          id="servicos"
          className="flex items-center justify-center h-screen bg-gray-100"
        >
          <p className="font-bold">Serviços</p>
        </div>
        <div
          id="projetos"
          className="flex items-center justify-center h-screen bg-gray-200"
        >
          <p className="font-bold">Projetos</p>
        </div>
        <div
          id="contato"
          className="flex items-center justify-center h-screen bg-gray-300"
        >
          <p className="font-bold">Contato</p>
        </div>
      </div>
    </div>
  );
}