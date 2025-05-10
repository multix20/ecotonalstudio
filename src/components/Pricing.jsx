import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: 250,
      duration: "por día",
      features: [
        "8 horas de estudio",
        "Ingeniero de sonido",
        "Grabación de hasta 3 instrumentos",
        "Mezcla básica",
        "1 revisión",
      ],
      popular: false,
      cta: "Seleccionar plan"
    },
    {
      name: "Profesional",
      price: 590,
      duration: "por canción",
      features: [
        "16 horas de estudio",
        "Ingeniero de sonido senior",
        "Grabación full band",
        "Mezcla profesional",
        "Masterización básica",
        "3 revisiones",
        "Músico de sesión (1)",
      ],
      popular: true,
      cta: "Seleccionar plan"
    },
    {
      name: "Premium",
      price: 1490,
      duration: "por EP",
      features: [
        "40 horas de estudio",
        "Ingeniero y productor senior",
        "Grabación completa",
        "Mezcla avanzada",
        "Masterización profesional",
        "Revisiones ilimitadas",
        "Músicos de sesión (hasta 3)",
        "Arreglos musicales",
      ],
      popular: false,
      cta: "Seleccionar plan"
    }
  ];

  return (
    <section id="pricing" className="section-container bg-black bg-opacity-60">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-purple-900 bg-opacity-50 rounded-full mb-4">
          <span className="text-purple-300 font-medium">Tarifas</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes a tu medida</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Disponemos de diferentes opciones para adaptarnos a tu proyecto y presupuesto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`rounded-lg p-8 border ${
              plan.popular 
                ? 'border-purple-500 bg-gradient-to-br from-purple-900/30 to-black relative shadow-lg shadow-purple-500/20' 
                : 'border-gray-800 bg-black/50'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold py-1 px-4 rounded-full">
                Más popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-400 ml-2">{plan.duration}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={20} className="text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className={`block text-center py-3 px-6 rounded-lg font-bold transition-colors ${
                plan.popular 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90' 
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-purple-900/20 p-6 rounded-lg border border-purple-900">
        <h3 className="text-xl font-bold mb-3">¿Necesitas un plan personalizado?</h3>
        <p className="text-gray-300 mb-4">
          Contáctanos para crear un paquete a medida según tus necesidades específicas.
        </p>
        <a href="#contact" className="btn-primary inline-flex">
          Solicitar presupuesto
        </a>
      </div>
    </section>
  );
};

export default Pricing;