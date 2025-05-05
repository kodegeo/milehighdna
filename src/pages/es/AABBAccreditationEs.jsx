import React from 'react';

const AABBAccreditation = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Acreditación AABB</h1>

      <p className="mb-4">
        Mile High DNA Testing se enorgullece de colaborar con <a href="https://www.ufclab.com/lab-services" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Universal Forensics Corporation</a> — un laboratorio acreditado por AABB de confianza.
      </p>

      <p className="mb-4">
        La <a href="https://www.aabb.org/standards-accreditation/accreditation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AABB (Asociación para el Avance de Sangre y Bioterapias)</a> es el organismo acreditador reconocido para pruebas de ADN de relaciones familiares, especialmente para propósitos de inmigración, legales y admisibles en tribunales.
      </p>

      <p className="mb-4">
        Al trabajar exclusivamente con laboratorios acreditados por AABB, garantizamos:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>Cumplimiento con estrictos estándares de calidad</li>
        <li>Resultados legalmente admisibles para pruebas de paternidad, hermandad, abuelidad e inmigración</li>
        <li>Procedimientos adecuados de cadena de custodia para la recolección y manejo de muestras</li>
      </ul>

      <p className="mb-4">
        Esta acreditación proporciona tranquilidad y garantiza que sus resultados cumplen con los más altos estándares de la industria. Ya sea que esté realizando una prueba de ADN por razones legales o personales, puede confiar en la calidad e integridad de sus resultados.
      </p>

      <p className="italic text-sm text-gray-600">
        Para más información, visite el sitio oficial de AABB o <a href="/contact" className="text-blue-600 underline">contáctenos</a>.
      </p>
    </div>
  );
};

export default AABBAccreditation; 