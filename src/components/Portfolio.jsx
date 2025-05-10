import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const Portfolio = () => {
  const [activeAudio, setActiveAudio] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Chamber of refletion 'cover'",
      artist: "Pipe y los Ecos",
      genre: "Rock Alternativo",
      image: "/mesa.jpeg",
      description: "Grabación y producción completa del disco debut.",
      audio: "/audios/tlabaja-chino.mp3"
    },
    {
      id: 2,
      title: "EP 'Horizontes'",
      artist: "Mar Adentro",
      genre: "Folk / Indie",
      image: "/bateria.jpeg",
      description: "Mezcla y masterización de 5 temas acústicos.",
      audio: "/audios/horizontes.mp3"
    },
    {
      id: 3,
      title: "Single 'Memorias'",
      artist: "Estelar",
      genre: "Pop",
      image: "/mesados.jpg",
      description: "Producción integral y arreglos de cuerdas.",
      audio: "/audios/memorias.mp3"
    },
    {
      id: 4,
      title: "BSO 'Caminos'",
      artist: "Soundtrack Original",
      genre: "Instrumental / Ambiental",
      image: "/fondo.jpeg",
      description: "Diseño sonoro y composición para cortometraje.",
      audio: "/audios/caminos.mp3"
    }
  ];

  const toggleAudio = (id) => {
    setActiveAudio(prev => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="section-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-purple-900 bg-opacity-50 rounded-full mb-4">
          <span className="text-purple-300 font-medium">Nuestro trabajo</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos destacados</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Descubre algunos de los proyectos en los que hemos trabajado y el resultado profesional que logramos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gradient-to-br from-black to-purple-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-900/30 transition-shadow"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <button 
                onClick={() => toggleAudio(project.id)}
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-400 transition-colors"
              >
                {activeAudio === project.id ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-900 text-purple-300">
                  {project.genre}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">por {project.artist}</p>
              <p className="text-gray-300">{project.description}</p>

              {activeAudio === project.id && (
                <div className="mt-4">
                  <audio controls autoPlay className="w-full">
                    <source src={project.audio} type="audio/mpeg" />
                    Tu navegador no soporta el reproductor de audio.
                  </audio>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#contact" className="btn-secondary">
          Ver más proyectos
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
