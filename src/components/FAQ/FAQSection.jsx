import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    id: 'results',
    question: 'How long does it take to get DNA test results?',
    answer: 'Most results are available within 2–5 business days after the lab receives your sample.',
  },
  {
    id: 'legal',
    question: 'Is your DNA testing legally admissible?',
    answer: 'Yes, our legal DNA tests follow a strict chain of custody and are accepted in court.',
  },
  {
    id: 'same-day',
    question: 'Do you offer same-day appointments?',
    answer: 'Yes, depending on availability. Please check our scheduling page or call to confirm.',
  },
  {
    id: 'immigration',
    question: 'Can I use DNA testing for immigration purposes?',
    answer: 'Absolutely. We provide AABB-accredited immigration DNA testing approved by USCIS and embassies.',
  },
  {
    id: 'prenatal',
    question: 'Is prenatal testing safe?',
    answer: 'Yes, we offer non-invasive prenatal paternity testing using the mother\'s blood and the alleged father\'s sample.',
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 