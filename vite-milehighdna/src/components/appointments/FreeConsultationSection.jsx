import React from 'react';

const FreeConsultationSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Free Consultation
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Not sure which DNA test is right for your situation? We offer a <strong>free 30-minute consultation call</strong> to help you understand your options.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Whether it's for legal, immigration, or personal reasons, our team will walk you through the process, documentation requirements, and timelines.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-md">
          <iframe
            src="https://calendly.com/milehighdnatesting/freeconsultation"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule Free Consultation"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FreeConsultationSection;

