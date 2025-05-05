import React from 'react';
import clsx from 'clsx';

const benefits = [
  {
    value: '99.9%',
    label: 'Garantía de Precisión',
  },
  {
    value: '24-48 hrs',
    label: 'Resultados Rápidos',
  },
  {
    value: 'AABB',
    label: 'Laboratorio Acreditado',
  },
  {
    value: '100%',
    label: 'Resultados Confidenciales',
  },
];

const WhyChooseUsEs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          ¿Por Qué Elegir Mile High DNA Testing?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {benefits.map((item, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-blue-600 mb-2">{item.value}</div>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsEs; 