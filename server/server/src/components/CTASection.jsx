// src/components/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-blue-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Take the First Step
        </h2>
        <p className="text-lg mb-8">
          Schedule your confidential DNA test with Mile High DNA Testing and get results you can trust.
        </p>
        <Link
          to="/book-appointment"
          className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};

export default CTASection;