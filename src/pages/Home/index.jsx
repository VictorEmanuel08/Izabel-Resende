import { Header } from "../../components/Header";
import { About } from "../../components/sections/About";
import { Contact } from "../../components/sections/Contact";
import { Projects } from "../../components/sections/Projects";
import { Services } from "../../components/sections/Services";

export function Home() {
  return (
    <div className="min-w-full min-h-screen flex flex-col font-poppins">
      <Header />
      <div className="flex flex-col ">
        <div id="sobre">
          <About />
        </div>
        <div id="servicos">
          <Services />
        </div>
        <div id="projetos">
          <Projects />
        </div>
        <div id="contato">
          <Contact />
        </div>
      </div>
    </div>
  );
}
