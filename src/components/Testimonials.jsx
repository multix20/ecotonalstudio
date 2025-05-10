import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Vocalista, Luna Roja",
      image: "/api/placeholder/80/80",
      quote: "Trabajar con SoundWave Studio transformó completamente nuestro sonido. El equipo entendió nuestra visión desde el primer momento y la calidad final superó todas nuestras expectativas.",
      rating: 5
    },
    {
      id: 2,
      name: "María Jiménez",
      role: "Productora musical",
      image: "/api/placeholder/80/80",
      quote: "Las instalaciones y el equipo técnico son de primer nivel. Cada vez que necesito un estudio para mis artistas, SoundWave es mi primera opción. La atención al detalle es incomparable.",
      rating: 5
    },
    {
      id: 3,
      name: "Daniel Torres",
      role: "Compositor independiente",
      image: "/api/placeholder/80/80",
      quote: "La experiencia y conocimientos del equipo me ayudaron a llevar mis composiciones a otro nivel. El ambiente creativo que generan es perfecto para sacar el máximo potencial de cada proyecto.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-container bg-black bg-opacity-60">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-purple-900 bg-opacity-50 rounded-full mb-4">
          <span className="text-purple-300 font-medium">Testimonios</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Artistas y productores que han confiado en nosotros para sus proyectos musicales.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-lg border border-purple-900">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-500" 
                    />
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-purple-400">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">"{testimonial.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevTestimonial}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center border border-purple-500 hover:bg-purple-900 transition-colors"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextTestimonial}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center border border-purple-500 hover:bg-purple-900 transition-colors"
          aria-label="Testimonio siguiente"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-purple-500' : 'bg-gray-700'}`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;