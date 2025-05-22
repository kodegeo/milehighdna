import React from 'react';
import { Link } from 'react-router-dom';

const HeroEs = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: 'url(./assets/images/father_baby.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Mile High DNA Testing
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Servicios profesionales y confidenciales de pruebas de ADN para familias en todo Colorado
          </p>
          <Link
            to="/book-appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Reservar una Cita
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroEs; 