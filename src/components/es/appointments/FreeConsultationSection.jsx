import React from 'react';

const FreeConsultationSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Consulta gratuita
        </h2>
        <p className="text-lg text-gray-600 mb-4">
        ¿No estás seguro de qué prueba de ADN necesitas? Ofrecemos una consulta telefónica gratuita de 30 minutos para ayudarte a entender tus opciones.
        </p>
        <p className="text-lg text-gray-600 mb-6">
        Ya sea por motivos legales, migratorios o personales, nuestro equipo te guiará paso a paso sobre el proceso, los requisitos y los tiempos de entrega.        
        </p>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
          <iframe
            src="https://calendly.com/milehighdnatesting/consulta-gratuita"
            width="100%"
            height="700"
            frameBorder="0"
            title="Agenda tu consulta gratuita de 30 minutos"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FreeConsultationSection;

