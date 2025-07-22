import React from 'react';
import clsx from 'clsx';

const steps = [
  {
    number: '1',
    title: 'Programe Su Prueba',
    description:
      'Reserve una cita en línea o por teléfono. Ofrecemos horarios flexibles que se adaptan a sus necesidades.',
  },
  {
    number: '2',
    title: 'Recolección de Muestra',
    description:
      'Visite nuestras instalaciones para una simple e indolora prueba de hisopado bucal realizada por profesionales capacitados.',
  },
  {
    number: '3',
    title: 'Obtenga Sus Resultados',
    description:
      'Reciba resultados seguros y admisibles en corte en tan solo 24-48 horas por correo electrónico o recogida en persona.',
  },
];

const ProcessOverviewEs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Cómo Funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverviewEs; 