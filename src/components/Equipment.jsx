import { Mic, Speaker, Headphones } from 'lucide-react';

const Equipment = () => {
  const equipmentCategories = [
    {
      icon: <Mic size={32} />,
      title: "Micrófonos",
      equipment: [
        "Neumann U87 AI",
        "Shure SM7B",
        "AKG C414 XLS",
        "Rode NT1-A",
        "Sennheiser MD 421-II"
      ]
    },
    {
      icon: <Speaker size={32} />,
      title: "Monitores",
      equipment: [
        "Genelec 8040B",
        "Yamaha HS8",
        "Adam Audio A7X",
        "KRK Rokit 8 G4"
      ]
    },
    {
      icon: <Headphones size={32} />,
      title: "Interfaces & Procesadores",
      equipment: [
        "Universal Audio Apollo x8",
        "SSL Fusion",
        "API 2500 Compressor",
        "Neve 1073 Preamp",
        "Avalon VT-737sp"
      ]
    }
  ];

  return (
    <section id="equipment" className="section-container">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <div className="inline-block px-4 py-1 bg-purple-900 bg-opacity-50 rounded-full mb-4">
            <span className="text-purple-300 font-medium">Equipamiento</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnología profesional para resultados de calidad</h2>
          <p className="text-gray-300 mb-8">
            Disponemos de equipamiento de alta gama para asegurar que tu música tenga el sonido profesional que merece. Nuestro estudio cuenta con salas tratadas acústicamente y la mejor tecnología del mercado.
          </p>

          {equipmentCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {category.equipment.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 relative">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/fondo.jpeg" 
              alt="Estudio de grabación SoundWave" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-80 p-4 rounded border border-purple-500">
            <h4 className="text-lg font-bold mb-2">Sala principal de grabación</h4>
            <p className="text-sm text-gray-300">
              40m² tratados acústicamente para una grabación óptima con cabina aislada y línea visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;