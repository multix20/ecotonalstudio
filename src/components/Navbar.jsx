import { useState } from 'react';
import { Volume2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black bg-opacity-80 border-b border-purple-900">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <Volume2 size={24} className="text-purple-400" />
          <span className="text-xl md:text-2xl font-bold gradient-text">ECOTONONAL STUDIO</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-purple-400 transition-colors">Servicios</a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portafolio</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonios</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">Tarifas</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:opacity-90 transition-opacity">Contactar</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 border-t border-purple-900 px-4 py-4 space-y-4">
          <a href="#services" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Servicios</a>
          <a href="#portfolio" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Portafolio</a>
          <a href="#testimonials" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Testimonios</a>
          <a href="#pricing" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Tarifas</a>
          <a href="#contact" className="block py-2 mt-4 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:opacity-90 transition-opacity text-center" onClick={toggleMenu}>Contactar</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
