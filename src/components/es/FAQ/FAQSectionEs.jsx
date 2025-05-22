import React from 'react';
import FAQItemEs from './FAQItemEs';

const faqs = [
  {
    id: 'results',
    question: '¿Cuánto tiempo tardan los resultados de la prueba de ADN?',
    answer: 'La mayoría de los resultados están disponibles dentro de 2 a 5 días hábiles después de que el laboratorio recibe las muestras.',
  },
  {
    id: 'legal',
    question: '¿Sus pruebas de ADN son legalmente válidas?',
    answer: 'Sí. Nuestras pruebas legales siguen una cadena de custodia estricta y son aceptadas en la corte.',
  },
  {
    id: 'same-day',
    question: '¿Ofrecen citas el mismo día?',
    answer: 'Sí, según disponibilidad. Consulta nuestra página de programación o llámanos para confirmar.',
  },
  {
    id: 'immigration',
    question: '¿Puedo usar una prueba de ADN para trámites de inmigración?',
    answer: 'Por supuesto. Ofrecemos pruebas de ADN para inmigración acreditadas por la AABB, aprobadas por el USCIS y embajadas',
  },
  {
    id: 'prenatal',
    question: '¿La prueba prenatal es segura?',
    answer: 'Sí. Ofrecemos pruebas de paternidad prenatal no invasivas, utilizando una muestra de sangre de la madre y una del presunto padre.',
  },
];

const FAQSectionEs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <FAQItemEs key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionEs; 