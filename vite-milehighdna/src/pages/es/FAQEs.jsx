import React from 'react';
import { Helmet } from 'react-helmet-async';
import FAQSection from '../../components/es/FAQ/FAQSectionEs';
import HowToUse from '../../components/es/FAQ/HowToUseEs';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';

const FAQEs = () => {
  return (
    <>
      <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
        <Helmet>
          <title>Preguntas Frecuentes | Pruebas de ADN en Español en Colorado</title>
          <meta 
            name="description" 
            content="Respuestas a las preguntas más comunes sobre pruebas de ADN en español. Información sobre costos, tiempos, validez legal, inmigración, paternidad, y más." 
          />

          <link rel="canonical" href="https://milehighdnatesting.com/es/preguntas-frecuentes" />
          <link rel="alternate" hreflang="en" href="https://milehighdnatesting.com/faq" />
          <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/preguntas-frecuentes" />
          <link rel="alternate" hreflang="x-default" href="https://milehighdnatesting.com" />

          <meta property="og:title" content="Preguntas Frecuentes sobre Pruebas de ADN en Español" />
          <meta property="og:description" content="Conozca los detalles sobre pruebas de paternidad, inmigración y ADN legales. Servicios disponibles en Denver, Aurora y todo Colorado." />
          <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
          <meta property="og:url" content="https://milehighdnatesting.com/es/preguntas-frecuentes" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        </Helmet>

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