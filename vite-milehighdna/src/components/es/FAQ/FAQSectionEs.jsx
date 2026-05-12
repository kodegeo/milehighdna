import React from 'react';
import FAQItemEs from './FAQItemEs';

const faqs = [
  {
    id: 'results',
    question: '¿Cuánto tardan los resultados de una prueba de ADN?',
    answer: 'La mayoría de los resultados están listos entre 2 y 5 días hábiles después de que el laboratorio asociado recibe las muestras. Para pruebas legales o de inmigración, el análisis lo realizan laboratorios asociados que mantienen acreditación AABB cuando aplica. Las pruebas para inmigración pueden tardar más por motivos de envío o embajadas.',
  },
  {
    id: 'legal',
    question: '¿Las pruebas de ADN son válidas legalmente?',
    answer: 'Sí. Nuestras pruebas legales siguen una cadena de custodia rigurosa y son aceptadas por tribunales, jueces, y agencias del gobierno como el USCIS.',
  },
  {
    id: 'same-day',
    question: '¿Puedo hacerme una prueba de ADN el mismo día?',
    answer: 'Sí, ofrecemos citas el mismo día según disponibilidad. Agenda en línea o llámanos para verificar horarios en Denver, Aurora o Lakewood.',
  },
  {
    id: 'immigration',
    question: '¿La prueba de ADN se puede usar para trámites migratorios?',
    answer: 'Sí, cuando se realiza como prueba legal o de inmigración con cadena de custodia y laboratorio asociado acreditado por la AABB según corresponde. Mile High DNA Testing no está acreditada por la AABB; coordinamos la recolección y el caso con laboratorios asociados aprobados por USCIS, consulados y embajadas de EE. UU.',
  },
  {
    id: 'cost',
    question: '¿Cuánto cuesta una prueba de ADN?',
    answer: 'El costo varía según el tipo de prueba. Las pruebas de paternidad legales comienzan desde $300. Para precios exactos, contáctanos o agenda una consulta gratuita.',
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