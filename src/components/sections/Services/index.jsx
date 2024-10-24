import { CardServices } from "../../CardServices";

export function Services() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 md:px-16 py-8 space-y-6 ">
      <h1 className="text-3xl font-bold mt-12 text-black">Serviços</h1>
      <div className="border-t border-black w-full"></div>

      {/* Layout responsivo da grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        <CardServices
          titulo={"Consultoria"}
          desc={
            "A consultoria é um serviço prestado para atender às necessidades de outro profissional ou negócio."
          }
        />
        <CardServices
          titulo={"Reforma"}
          desc={
            "Mudança introduzida em algo para fins de aprimoramento e obtenção de melhores resultados."
          }
        />
        <CardServices
          titulo={"Projeto de Interiores Residencial"}
          desc={
            "Uma descrição do projeto de interiores é semelhante a um resumo criativo do projeto para o cliente."
          }
        />
        <CardServices
          titulo={"Projeto Arquitetônico"}
          desc={
            "Um conjunto de especificações que descrevem a concepção e a organização de um espaço arquitetônico"
          }
        />
        <CardServices
          titulo={"Projeto Executivo"}
          desc={
            "Documento que oferece as maiores informações sobre a obra entre todos os projetos existentes na legislação brasileira."
          }
        />
        <CardServices
          titulo={"Projeto Legal"}
          desc={
            "Desenhos técnicos (cortes e plantas) sendo desenvolvidos com base nos modelos pré-estabelecidos."
          }
        />
        <CardServices
          titulo={"Projeto de Interiores Comercial"}
          desc={
            "Intervenção nos ambientes internos e externos, definindo o uso do espaço conforme o mobiliário."
          }
        />
        <CardServices
          titulo={"Outro nome"}
          desc={"Outro nome outro nome outro nome outro nome."}
        />
      </div>
    </div>
  );
}
