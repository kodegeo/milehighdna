import React from 'react';

const PrenatalWhyChooseUs = () => {

  const reasons = [
    {
      title: 'Safe & Non-Invasive',
      description:
        'Prenatal testing only requires a simple blood draw from the mother and a cheek swab from the alleged father—no risk to the pregnancy.',
    },
    {
      title: 'AABB-Accredited Labs',
      description:
        'All tests are processed by AABB-accredited laboratories, ensuring accuracy, reliability, and legal compliance.',
    },
    {
      title: 'Legal & Peace-of-Mind Options',
      description:
        'Choose certified results for court, immigration, or custody needs, or select a non-legal test for personal reassurance.',
    },
    {
      title: 'Accurate, Court-Admissible Results',
      description:
        'Results are over 99.9% conclusive and include notarized documentation if required for legal use.',
    },
    {
      title: 'Confidential & Supportive',
      description:
        'We handle every case with the utmost privacy and compassion, guiding you through each step of the process.',
    },
    {
      title: 'Transparent Pricing',
      description:
        'No hidden fees. Our pricing includes lab analysis, sample collection, and optional legal documentation.',
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Mile High DNA for Prenatal Testing?</h2>
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
      </div>
    </section>
  );
};

export default PrenatalWhyChooseUs; 