import React from "react";

const WhoWeAre = ({ title, content, imageUrl }) => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {content}
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Trusted and Accredited Testing</h3>
              <p className="text-gray-600">
              We partner with AABB-accredited laboratories to ensure that all DNA tests meet the highest standards of accuracy and legal admissibility.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Personalized, Bilingual Support</h3>
              <p className="text-gray-600">
              Our team provides compassionate, confidential service in both English and Spanish, guiding you through each step of the process with clarity and care.                
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Locally Based, Community Focused</h3>
              <p className="text-gray-600">
              Based in Denver, we proudly serve the Front Range and beyond — offering reliable testing for legal, personal, and family needs throughout Colorado.
              </p>
            </div>
          </div>

    </section>
  );
};

export default WhoWeAre;
