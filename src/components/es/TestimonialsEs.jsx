import React from 'react';
import clsx from 'clsx';

const testimonials = [
  {
    quote:
      'El proceso fue rápido, profesional y los resultados se entregaron puntualmente. ¡Lo recomiendo ampliamente!',
    name: 'Sarah M.',
  },
  {
    quote:
      'El personal fue increíblemente comprensivo durante todo el proceso. Hicieron que una situación difícil fuera mucho más fácil de manejar.',
    name: 'James T.',
  },
];

const TestimonialsEs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <p className="text-gray-700 mb-4 italic leading-relaxed">"{t.quote}"</p>
              <p className="font-semibold text-gray-900">- {t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/testimonials"
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
          >
            Leer Más Testimonios →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsEs; 