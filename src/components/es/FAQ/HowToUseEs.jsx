import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HowToUseEs = () => {
  return (
    <div className="my-6">
      <p className="text-lg text-gray-700">
      ¿Tienes preguntas sobre pruebas legales?
        <HashLink 
          smooth 
          to="/faq#legal" 
          className="text-blue-600 hover:underline ml-2"
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          Consulta nuestras Preguntas Frecuentes sobre pruebas de ADN legales
        </HashLink>
      </p>
    </div>
  );
};

export default HowToUseEs; 