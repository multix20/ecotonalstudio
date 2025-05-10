import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-purple-900 bg-opacity-50 rounded-full mb-4">
          <span className="text-purple-300 font-medium">Contacto</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comienza tu proyecto ahora</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo para discutir cómo podemos ayudarte.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <div className="bg-black bg-opacity-50 border border-purple-900 rounded-lg p-6 h-full">
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Ubicación</h4>
                  <p className="text-gray-300">Calle de la Música 123, Ciudad Creativa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">info@soundwavestudio.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Teléfono</h4>
                  <p className="text-gray-300">+34 612 345 678</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-4">Horario</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                <div>Lunes - Viernes</div>
                <div>10:00 - 22:00</div>
                <div>Sábado</div>
                <div>12:00 - 20:00</div>
                <div>Domingo</div>
                <div>Cerrado</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <div className="bg-black bg-opacity-50 border border-purple-900 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            
            {formStatus.submitted ? (
              <div className="p-6 bg-purple-900/20 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Send size={28} />
                </div>
                <h4 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h4>
                <p className="text-gray-300">
                  Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                </p>
                <button 
                  className="mt-6 btn-secondary"
                  onClick={() => setFormStatus({ submitting: false, submitted: false, error: false })}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="612 345 678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block mb-2 font-medium">Tipo de proyecto</label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Grabación">Grabación</option>
                      <option value="Mezcla">Mezcla</option>
                      <option value="Masterización">Masterización</option>
                      <option value="Producción completa">Producción completa</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Enviar mensaje
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;