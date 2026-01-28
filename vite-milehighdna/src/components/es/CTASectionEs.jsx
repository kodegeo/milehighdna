import React from 'react';
import { Link } from 'react-router-dom';

const CTASectionEs = () => {
  return (
    <section className="py-24 bg-blue-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Dé el Primer Paso
        </h2>
        <p className="text-lg mb-8">
          Programe su prueba de ADN confidencial con Mile High DNA Testing y obtenga resultados en los que puede confiar.
        </p>
        <Link
          to="/appointments"
          className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition"
        >
          Reservar una Cita
        </Link>
      </div>
    </section>
  );
};

export default CTASectionEs; 