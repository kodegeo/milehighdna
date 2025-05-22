import React from 'react';
import FAQSection from '../../components/es/FAQ/FAQSectionEs';
import HowToUse from '../../components/es/FAQ/HowToUseEs';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';

const FAQEs = () => {
  return (
    <>
      <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-700">
          ¿Tienes preguntas sobre las pruebas de ADN, cómo agendar una cita o cómo funciona todo el proceso? Aquí encontrarás respuestas claras y confiables.
          </p>
          <HowToUse />
        </div>
      </section>

      <FAQSection />
      <ServingColoradoEs />
      <CallToActionEs />
    </>
  );
};

export default FAQEs; 