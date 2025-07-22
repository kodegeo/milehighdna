import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const services = [
  {
    title: 'Prueba de Paternidad',
    description:
      'Pruebas precisas y confidenciales para fines legales, personales o para tranquilidad.',
  },
  {
    title: 'Prueba de Maternidad',
    description:
      'Establezca la maternidad biológica con nuestras pruebas de ADN confiables y certificadas por laboratorio.',
  },
  {
    title: 'Prueba de Hermanos',
    description:
      'Determine si los individuos son hermanos completos o medios a través de análisis comparativo de ADN.',
  },
];

const ServicesPreviewEs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Saber Más →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewEs; 