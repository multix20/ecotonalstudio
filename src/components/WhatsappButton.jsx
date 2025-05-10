import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

/**
 * Componente reutilizable de botón de WhatsApp
 * @param {string} number - número en formato internacional sin +
 * @param {string} message - texto opcional para mostrar al pasar el mouse
 */
const WhatsappButton = ({ number = "56994124159", message = "¡Escríbenos!" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>

      <a
        href={`https://wa.me/${number}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform ${isHovered ? 'scale-110' : 'scale-100'}`}
        aria-label="Contáctanos por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="w-6 h-6"
          style={{
            filter: isHovered ? 'drop-shadow(0 0 3px rgba(255,255,255,0.7))' : 'none',
            transition: 'filter 0.3s ease'
          }}
        />

        {isHovered && (
          <span className="absolute top-0 right-full mr-2 whitespace-nowrap bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded opacity-90">
            {message}
          </span>
        )}
      </a>
    </div>
  );
};

export default WhatsappButton;
