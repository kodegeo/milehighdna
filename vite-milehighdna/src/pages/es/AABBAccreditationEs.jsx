import React from 'react';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';
import { Helmet } from 'react-helmet-async';


const AABBAccreditation = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
        <title>Acreditación AABB | Pruebas de ADN Legales y de Inmigración en Colorado</title>
        <meta 
          name="description" 
          content="Descubre por qué la acreditación AABB es esencial para pruebas de ADN legales e inmigratorias. Resultados aceptados por USCIS y tribunales. Atendemos en Denver, Aurora y Lakewood." 
        />

        <link rel="canonical" href="https://milehighdnatesting.com/es/aabb-accreditation" />
        <link rel="alternate" hreflang="en" href="https://milehighdnatesting.com/aabb-accreditation" />
        <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/aabb-accreditation" />
        <link rel="alternate" hreflang="x-default" href="https://milehighdnatesting.com" />

        <meta property="og:title" content="¿Qué es la acreditación AABB en pruebas de ADN?" />
        <meta property="og:description" content="Laboratorios acreditados por la AABB garantizan pruebas de ADN confiables, válidas legalmente y aceptadas por USCIS. Servicios disponibles en español en Colorado." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/aabb-accreditation" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

        <h1 className="text-3xl font-bold mb-6">Acreditación AABB</h1>

        <p className="mb-4">
        En Mile High DNA Testing, nos enorgullece trabajar con múltiples laboratorios de reconocido prestigio nacional, acreditados por la AABB, para ofrecer pruebas de ADN precisas, admisibles en tribunales y compatibles con los requisitos de USCIS.
        </p>

        <p className="mb-4">
          La <a href="https://www.aabb.org/standards-accreditation/accreditation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AABB (Asociación para el Avance de Sangre y Bioterapias)</a> es la entidad reconocida a nivel nacional que regula la calidad de las pruebas de ADN utilizadas en procesos legales, migratorios y familiares.
        </p>

        <p className="mb-4">
          ¿Por qué es importante esta acreditación?
          Al colaborar exclusivamente con laboratorios acreditados por la AABB, garantizamos:
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>Resultados legalmente válidos para pruebas de paternidad, hermandad, abuelidad e inmigración</li>
          <li>Cadena de custodia certificada, desde la toma de muestra hasta el análisis final</li>
          <li>Cumplimiento con los más altos estándares de calidad en la industria</li>
        </ul>

        <p className="mb-4">
          Ya sea que necesites tu prueba de ADN por razones legales o personales, puedes confiar en la precisión, confidencialidad y validez de los resultados.
        </p>

        <p className="italic text-sm text-gray-600">
          ¿Tienes preguntas? Contáctanos o visita el sitio oficial de la AABB para más información.
        </p>
      </div>

      <ServingColoradoEs />
      <CallToActionEs />
    </div>
  );
};

export default AABBAccreditation; 