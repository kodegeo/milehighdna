// src/components/Testimonials.jsx
import React from 'react';
import clsx from 'clsx';


const testimonials = [
  {
    quote:
      'The process was quick, professional, and the results were delivered promptly. Highly recommend!',
    name: 'Sarah M.',
  },
  {
    quote:
      'The staff was incredibly supportive throughout the entire process. They made a difficult situation much easier to handle.',
    name: 'James T.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <p className="text-gray-700 mb-4 italic leading-relaxed">"{t.quote}"</p>
              <p className="font-semibold text-gray-900">- {t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/testimonials"
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
          >
            Read More Testimonials →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
