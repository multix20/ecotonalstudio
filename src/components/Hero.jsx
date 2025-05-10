import { useState, useEffect } from 'react';
import { Play, Pause, Music, Mic } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const studioSections = [
    "Grabación profesional",
    "Mezcla y masterización",
    "Producción musical",
    "Sesiones con músicos profesionales"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentSection((prev) => (prev + 1) % studioSections.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, studioSections.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="hero" className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Tu sonido merece 
            <span className="block mt-2 gradient-text">
              calidad profesional
            </span>
          </h1>
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl font-light">
              Especialistas en{" "}
              <span className="font-medium text-purple-400">
                {studioSections[currentSection]}
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="btn-primary">
              <span>Reservar sesión</span>
              <Mic className="ml-2" size={18} />
            </a>
            <button className="btn-secondary" onClick={togglePlay}>
              <span>Escuchar demos</span>
              {isPlaying ? (
                <Pause className="ml-2" size={18} />
              ) : (
                <Play className="ml-2" size={18} />
              )}
            </button>
          </div>

          {/* YouTube player */}
          {isPlaying && (
            <div className="mt-6 aspect-video w-full max-w-xl">
              <iframe
                className="w-full h-64 md:h-72 rounded-lg"
                src="https://www.youtube.com/embed/dE9bFc06Mwk?autoplay=1&rel=0"
                title="Demo musical"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 to-pink-600 opacity-80 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-xs">
                <div className="flex items-center justify-center h-24 space-x-1">
                  {[...Array(18)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-white opacity-70 rounded-full"
                      style={{
                        height: `${Math.sin(i / 2) * 50 + 30}%`,
                        animation: isPlaying ? `pulse 0.5s infinite ${i * 0.05}s` : 'none'
                      }}
                    ></div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <span className="text-xl font-bold">Convierte tu visión en sonido</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-black bg-opacity-80 p-4 rounded-lg border border-purple-500">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <span className="font-mono">250+ proyectos completados</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <p className="text-center text-gray-400 mb-8">Confían en nosotros</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="flex items-center"><Music size={16} /> <span className="ml-2 font-bold">SonicWave Records</span></div>
          <div className="flex items-center"><Music size={16} /> <span className="ml-2 font-bold">Harmony Productions</span></div>
          <div className="flex items-center"><Music size={16} /> <span className="ml-2 font-bold">Echo Entertainment</span></div>
          <div className="flex items-center"><Music size={16} /> <span className="ml-2 font-bold">Rhythm Republic</span></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
