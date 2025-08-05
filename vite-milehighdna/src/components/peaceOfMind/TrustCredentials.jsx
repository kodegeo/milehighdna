import React from "react";

const TrustCredentials = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Trust & Credentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              AABB or CLIA-Certified Labs
            </h3>
            <p className="text-gray-600">
              Processed in accredited laboratories meeting strict quality standards.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Complete Confidentiality
            </h3>
            <p className="text-gray-600">
              Your data remains confidential and is not shared with third parties.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Transparent Pricing
            </h3>
            <p className="text-gray-600">
              No surprise fees - transparent pricing and delivery included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredentials; 