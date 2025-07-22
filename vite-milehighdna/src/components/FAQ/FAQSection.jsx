import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    id: 'results',
    question: 'How long does it take to get DNA test results?',
    answer: 'Most DNA test results are available within 2 to 5 business days after the lab receives your sample. Immigration and legal testing may take longer depending on shipping and embassy coordination.',
  },
  {
    id: 'legal',
    question: 'Are DNA test results legally admissible in court?',
    answer: 'Yes. Our legal DNA tests follow a strict chain of custody and are accepted by courts, immigration authorities, and government agencies throughout Colorado and nationwide.',
  },
  {
    id: 'same-day',
    question: 'Can I schedule a same-day DNA test appointment?',
    answer: 'Yes, we offer same-day appointments based on availability. Please visit our scheduling page or call us to confirm same-day DNA testing in Denver or surrounding areas.',
  },
  {
    id: 'immigration',
    question: 'Can DNA testing be used for immigration cases?',
    answer: 'Absolutely. We provide AABB-accredited immigration DNA testing approved by USCIS and U.S. embassies worldwide for family-based petitions, CRBA, and visa applications.',
  },
  {
    id: 'aabb',
    question: 'What does AABB accreditation mean?',
    answer: 'AABB accreditation ensures that a DNA testing lab meets strict standards for accuracy and legal reliability. It is required for immigration, legal, and court-admissible DNA tests.',
  },
  {
    id: 'cost',
    question: 'How much does a DNA test cost?',
    answer: 'Pricing varies by test type. Legal paternity testing typically starts around $300, while immigration and sibling tests may vary. Please contact us for a personalized quote.',
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