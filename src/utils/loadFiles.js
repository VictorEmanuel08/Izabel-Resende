export function loadFiles() {
  const importAll = (pattern) => Object.values(pattern).map((module) => module);

  // Importa todas as imagens dos projetos usando o caminho correto
  const projeto1Images = importAll(
    import.meta.glob("../assets/projeto1/*.{png,jpg,jpeg,svg}", {
      eager: true,
    })
  );

  const projeto2Images = importAll(
    import.meta.glob("../assets/projeto2/*.{png,jpg,jpeg,svg}", {
      eager: true,
    })
  );

  // Retorna os projetos com as imagens carregadas
  return [
    {
      id: 1,
      name: "Projeto 1",
      photos: projeto1Images.map((module) => module.default),
      desc: "Descrição do projeto",
    },
    {
      id: 2,
      name: "Projeto 2",
      photos: projeto2Images.map((module) => module.default),
      desc: "Descrição do projeto 2",
    },
  ];
}
