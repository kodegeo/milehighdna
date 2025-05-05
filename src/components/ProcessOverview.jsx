// src/components/ProcessOverview.jsx
import React from 'react';
import clsx from 'clsx';


const steps = [
  {
    number: '1',
    title: 'Schedule Your Test',
    description:
      'Book an appointment online or by phone. We offer flexible scheduling to fit your needs.',
  },
  {
    number: '2',
    title: 'Sample Collection',
    description:
      'Visit our facility for a simple and painless cheek swab collected by trained professionals.',
  },
  {
    number: '3',
    title: 'Get Your Results',
    description:
      'Receive secure, court-admissible results in as little as 24-48 hours via email or pickup.',
  },
];

const ProcessOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
