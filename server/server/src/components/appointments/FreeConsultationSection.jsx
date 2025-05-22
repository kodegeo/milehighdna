import React from 'react';

const FreeConsultationSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Free Consultation
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Not sure which DNA test is right for your situation? We offer a <strong>free 30-minute consultation call</strong> to help you understand your options.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Whether it's for legal, immigration, or personal reasons, our team will walk you through the process, documentation requirements, and timelines.
        </p>
        <a
          href="https://calendly.com/milehighdnatesting-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-md"
        >
          Schedule Your 30-Minute Call
        </a>
      </div>
    </section>
  );
};

export default FreeConsultationSection;

