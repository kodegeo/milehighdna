import React from 'react';
import FAQItem from '../../FAQ/FAQItem';

const peaceOfMindFaqsEs = [
  {
    id: 'court-eligible',
    question: '¿Esta prueba es elegible para uso en la corte?',
    answer: 'No. Este kit es solo para uso personal. Para requisitos legales (manutención infantil, custodia, inmigración), se requiere una prueba de ADN admisible en la corte.',
  },
  {
    id: 'accuracy',
    question: '¿Qué tan precisa es la prueba?',
    answer: 'Más del 99% de precisión. La mayoría de los laboratorios reportan 99.99% de precisión usando la misma tecnología que las pruebas admisibles en la corte.',
  },
  {
    id: 'turnaround',
    question: '¿Cuánto tiempo toma obtener resultados?',
    answer: 'Típicamente 2–3 días hábiles después de que el laboratorio recibe tus muestras. Opciones aceleradas pueden estar disponibles.',
  },
  {
    id: 'collection',
    question: '¿Cómo recolecto las muestras?',
    answer: 'Se incluyen hisopos bucales simples. No se requieren extracciones de sangre ni citas médicas. Se proporcionan instrucciones claras.',
  },
  {
    id: 'privacy',
    question: '¿Cómo se protege mi privacidad?',
    answer: 'Todo el empaque es discreto y sin marca. Tus datos personales están protegidos y no se comparten con terceros.',
  },
  {
    id: 'cost',
    question: '¿Cuánto cuesta la prueba?',
    answer: 'El Kit de Prueba de Paternidad para Tranquilidad cuesta $99–$129. El precio puede variar por promoción o volumen.',
  },
];

const FAQSectionEs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          {peaceOfMindFaqsEs.map((faq) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionEs; 