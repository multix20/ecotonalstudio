import { Mic, Volume2, Music, Sliders, Headphones, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Mic size={24} />,
      title: "Grabación",
      description: "Captura tu sonido con equipamiento de alta gama en nuestras salas acústicamente tratadas."
    },
    {
      icon: <Sliders size={24} />,
      title: "Mezcla",
      description: "Balanceamos cada elemento para que tu música suene profesional y equilibrada."
    },
    {
      icon: <Headphones size={24} />,
      title: "Masterización",
      description: "El toque final que hará que tu música suene de calidad comercial en cualquier plataforma."
    },
    {
      icon: <Music size={24} />,
      title: "Producción",
      description: "Asesoría musical para llevar tus ideas a un nivel profesional con arreglos y dirección."
    },
    {
      icon: <Users size={24} />,
      title: "Músicos de sesión",
      description: "Contamos con profesionales para complementar tu proyecto con instrumentos adicionales."
    },
    {
      icon: <Volume2 size={24} />,
      title: "Diseño sonoro",
      description: "Creación de paisajes sonoros, efectos y ambientes para tu proyecto audiovisual."
    }
  ];

  return (
    <section id="services" className="section-container bg-black bg-opacity-60">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-purple-900 bg-opacity-50 rounded-full mb-4">
          <span className="text-purple-300 font-medium">Nuestros servicios</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios profesionales para músicos</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Ofrecemos soluciones integrales para llevar tu música al siguiente nivel con tecnología de punta y expertos en la industria.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="card group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;