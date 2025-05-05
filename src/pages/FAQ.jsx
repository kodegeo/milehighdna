import React from 'react';
import FAQSection from '../components/FAQ/FAQSection';
import HowToUse from '../components/FAQ/HowToUse';

const FAQ = () => {
  return (
    <>
      <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700">
            Have questions about DNA testing, appointments, or how it all works?
            We've got answers.
          </p>
          <HowToUse />
        </div>
      </section>

      <FAQSection />
    </>
  );
};

export default FAQ;
