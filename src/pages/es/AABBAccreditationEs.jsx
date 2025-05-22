import React from 'react';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';

const AABBAccreditation = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Acreditación AABB</h1>

        <p className="mb-4">
          En Mile High DNA Testing, nos enorgullece trabajar en alianza con <a href="https://www.ufclab.com/lab-services" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Universal Forensics Corporation</a>, un laboratorio confiable y acreditado por la AABB.
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