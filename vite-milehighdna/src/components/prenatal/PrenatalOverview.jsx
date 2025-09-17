import React from 'react';

const PrenatalOverview = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          How Non-Invasive Prenatal DNA Testing Works in Denver
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Our non-invasive prenatal DNA test uses a simple blood sample from the expectant mother 
          and a cheek swab from the alleged father to safely determine paternity before birth. 
          The test is risk-free, AABB-accredited, and provides over 99.9% accurate results for peace of mind, 
          legal cases, or immigration purposes—trusted by families across Denver, Aurora, Lakewood, and throughout Colorado.
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Non-Invasive</h3>
            <p className="text-gray-600">A simple blood sample and cheek swab—no risk to pregnancy.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Safe</h3>
            <p className="text-gray-600">No amniocentesis or CVS required.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Accurate</h3>
            <p className="text-gray-600">Over 99.9% conclusive results, AABB-accredited labs.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Fast</h3>
            <p className="text-gray-600">Results in just 7–10 business days.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Confidential</h3>
            <p className="text-gray-600">Handled with the utmost privacy and care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrenatalOverview;
