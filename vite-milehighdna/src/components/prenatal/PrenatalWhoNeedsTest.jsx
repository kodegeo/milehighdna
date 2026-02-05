import React from 'react';
import { Link } from 'react-router-dom';

const PrenatalWhoNeedsTest = () => {
  const scenarios = [
    'You want to confirm paternity before birth for peace of mind.',
    'A legal case or custody matter requires proof of paternity during pregnancy.',
    'You need documentation for immigration or benefits before the child’s birth.',
    'You want early answers to plan and prepare for your family.',
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Who Should Get a Prenatal DNA Test in Denver?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          <Link to="/services/prenatal-paternity-testing" className="text-blue-600 underline">Prenatal paternity testing</Link> helps expectant mothers and families confirm biological relationships 
          before birth. Whether for peace of mind or <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">legal</Link> documentation, or <Link to="/services/immigration-dna-testing" className="text-blue-600 underline">immigration DNA testing</Link> needs, 
          it provides clear answers when you need them most.
        </p>

        <div className="grid gap-4 md:grid-cols-2 text-left max-w-3xl mx-auto">
          {scenarios.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <span className="text-blue-600 text-xl mt-1">✓</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-600">
          These tests are especially helpful for Denver-area families who want reliable answers early in pregnancy.
        </p>

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

export default PrenatalWhoNeedsTest;
