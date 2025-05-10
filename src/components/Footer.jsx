import { Volume2, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, url: "#", label: "YouTube" },
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
    { icon: <Facebook size={20} />, url: "#", label: "Facebook" }
  ];

  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { text: "Grabación", url: "#services" },
        { text: "Mezcla", url: "#services" },
        { text: "Masterización", url: "#services" },
        { text: "Producción", url: "#services" }
      ]
    },
    {
      title: "Estudio",
      links: [
        { text: "Sobre nosotros", url: "#" },
        { text: "Equipo", url: "#equipment" },
        { text: "Instalaciones", url: "#" },
        { text: "Trabajos", url: "#portfolio" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { text: "Preguntas frecuentes", url: "#" },
        { text: "Términos de servicio", url: "#" },
        { text: "Política de privacidad", url: "#" },
        { text: "Contacto", url: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white pt-16 border-t border-purple-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Volume2 size={28} className="text-purple-400" />
              <span className="text-2xl font-bold gradient-text">ECOTONAL STUDIO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Estudio de grabación profesional con tecnología de vanguardia y expertos apasionados por el sonido de calidad.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-purple-800/60 hover:bg-purple-600 transition-all flex items-center justify-center hover:scale-105"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-purple-300 mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-purple-900 pt-6 pb-8 text-sm text-gray-600">
          © {currentYear} MultiX. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
