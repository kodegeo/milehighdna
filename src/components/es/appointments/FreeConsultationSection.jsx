import React from 'react';

const FreeConsultationSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Consulta gratuita
        </h2>
        <p className="text-lg text-gray-600 mb-4">
        ¿No estás seguro de qué prueba de ADN necesitas? Ofrecemos una consulta telefónica gratuita de 30 minutos para ayudarte a entender tus opciones.
        </p>
        <p className="text-lg text-gray-600 mb-6">
        Ya sea por motivos legales, migratorios o personales, nuestro equipo te guiará paso a paso sobre el proceso, los requisitos y los tiempos de entrega.        
        </p>
        <a
          href="https://calendly.com/milehighdnatesting-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-md"
        >
          Agenda tu llamada de 30 minutos
        </a>
      </div>
    </section>
  );
};

export default FreeConsultationSection;

