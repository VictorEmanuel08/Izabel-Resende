import { useEffect, useState } from "react";
import { db } from "../../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { CardServices } from "../../CardServices";

export function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Busca de projetos do Firestore
  useEffect(() => {
    const fetchInfoServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const infoServicesList = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => a.title.localeCompare(b.title)); // Ordena alfabeticamente pelo title
        setServices(infoServicesList); // Atualiza o estado com os projetos
      } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
      } finally {
        setIsLoading(false); // Marcar como carregado
      }
    };

    fetchInfoServices(); // Chama a função ao montar o componente
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="w-8 h-8 border-4 border-t-transparent border-gray-600 border-solid rounded-full animate-spin"></div>
      </div>
    ); // Exibe enquanto os dados estão sendo buscados
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 md:px-16 py-8 space-y-6 ">
      <h1 className="text-3xl font-bold text-black">Serviços</h1>
      <div className="border-t border-black w-full"></div>

      {/* Layout responsivo da grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {services.map((service, index) => (
          <CardServices
            titulo={service.title}
            desc={service.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
