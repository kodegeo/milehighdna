import React from 'react';
import FAQItemEs from './FAQItemEs';

const faqs = [
  {
    id: 'results',
    question: '¿Cuánto tiempo toma obtener los resultados de la prueba de ADN?',
    answer: 'La mayoría de los resultados están disponibles en 2-3 días hábiles después de que el laboratorio recibe su muestra.',
  },
  {
    id: 'legal',
    question: '¿Son sus pruebas de ADN legalmente admisibles?',
    answer: 'Sí, nuestras pruebas legales de ADN siguen una cadena de custodia estricta y son aceptadas en los tribunales.',
  },
  {
    id: 'same-day',
    question: '¿Ofrecen citas el mismo día?',
    answer: 'Sí, dependiendo de la disponibilidad. Por favor, consulte nuestra página de programación o llame para confirmar.',
  },
  {
    id: 'immigration',
    question: '¿Puedo usar las pruebas de ADN para fines de inmigración?',
    answer: 'Absolutamente. Proporcionamos pruebas de ADN para inmigración acreditadas por AABB y aprobadas por USCIS y embajadas.',
  },
  {
    id: 'prenatal',
    question: '¿Es segura la prueba prenatal?',
    answer: 'Sí, ofrecemos pruebas de paternidad prenatales no invasivas utilizando la sangre de la madre y la muestra del presunto padre.',
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