import React from 'react';

const PrenatalOverview = () => {
return (
  <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
      How Prenatal Paternity Testing Works      </h2>
      <p className="text-lg text-gray-600 mb-8">
      Prenatal paternity testing uses a simple blood sample from the mother and a cheek swab from the alleged father to safely determine paternity before the baby is born. This non-invasive test poses no risk to the pregnancy and provides accurate, court-admissible results for personal, legal, or immigration purposes.      
      </p>

      <div className="grid gap-8 md:grid-cols-3 text-left">
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Non-invasive</h3>
          <p className="text-gray-600">
          Only a blood sample from the mother and a cheek swab from the alleged father are required.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Safe</h3>
          <p className="text-gray-600">
          No risk to the pregnancy—no amniocentesis or CVS needed.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Accurate</h3>
          <p className="text-gray-600">
          Results are 99.9%+ conclusive and AABB-accredited.          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Fast</h3>
          <p className="text-gray-600">
          Results typically available in 7-10 business days.          
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Confidential</h3>
          <p className="text-gray-600">
          All testing and results are handled with the utmost privacy.         
          </p>
        </div>

      </div>
    </div>
  </section>
);
};

export default PrenatalOverview; 