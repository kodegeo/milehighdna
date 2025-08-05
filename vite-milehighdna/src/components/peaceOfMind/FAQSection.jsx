import React from 'react';
import FAQItem from '../FAQ/FAQItem';

const peaceOfMindFaqs = [
  {
    id: 'court-eligible',
    question: 'Is this test eligible for court use?',
    answer: 'No. This kit is for personal use only. For legal requirements (child support, custody, immigration), a court-admissible DNA test is required.',
  },
  {
    id: 'accuracy',
    question: 'How accurate is the test?',
    answer: 'Over 99% accurate. Most labs report 99.99% accuracy using the same technology as court-admissible tests.',
  },
  {
    id: 'turnaround',
    question: 'How long to get results?',
    answer: 'Typically 2–3 business days after lab receives your samples. Rushed options may be available.',
  },
  {
    id: 'collection',
    question: 'How do I collect the samples?',
    answer: 'Simple cheek swabs are included. No blood draws or medical appointments required. Clear instructions are provided.',
  },
  {
    id: 'privacy',
    question: 'How is my privacy protected?',
    answer: 'All packaging is discreet and unbranded. Your personal data is protected and not shared with third parties.',
  },
  {
    id: 'cost',
    question: 'What does the test cost?',
    answer: 'Peace of Mind Paternity Test Kit costs $99–$129. Price may vary by promotion or volume.',
  },
];

const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {peaceOfMindFaqs.map((faq) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 