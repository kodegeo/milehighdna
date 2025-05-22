// src/components/ServicesPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';


const services = [
  {
    title: 'Paternity Testing',
    description:
      'Accurate and confidential testing for legal, personal, or peace-of-mind purposes.',
  },
  {
    title: 'Maternity Testing',
    description:
      'Establish biological maternity with our reliable, lab-certified DNA tests.',
  },
  {
    title: 'Sibling Testing',
    description:
      'Determine if individuals are full or half-siblings through comparative DNA analysis.',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
