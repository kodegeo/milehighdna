import React from 'react';

const PrenatalWhyChooseUs = () => {
  const reasons = [
    {
      title: 'Safe & Non-Invasive',
      description:
        'Prenatal testing requires only a simple blood draw from the mother and a cheek swab from the alleged father—no risk to pregnancy.',
    },
    {
      title: 'AABB-Accredited Labs',
      description:
        'All tests are processed by AABB-accredited laboratories, ensuring accuracy, reliability, and compliance.',
    },
    {
      title: 'Legal & Peace-of-Mind Options',
      description:
        'Choose certified results for court, immigration, or custody cases, or select a non-legal test for personal reassurance.',
    },
    {
      title: 'Accurate & Court-Admissible',
      description:
        'Results are over 99.9% conclusive, with notarized documentation available for legal use. Results are typically delivered in 7–10 business days.',
    },
    {
      title: 'Confidential & Supportive',
      description:
        'Every case is handled with privacy and compassion. We guide Denver families step by step through the process.',
    },
    {
      title: 'Transparent Pricing',
      description:
        'No hidden fees—pricing includes lab analysis, sample collection, and optional legal documentation.',
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Denver Families Choose Mile High DNA Testing
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 text-center py-8 px-6">
        <p className="text-gray-600 mt-8 mb-4">Questions about pricing or testing? We’re here to help.</p>
        <a
          href="tel:+17209009342"
          onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-medium"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Call Now: (720) 900-9342
        </a>
      </div>

      </div>
    </section>
  );
};

export default PrenatalWhyChooseUs;
