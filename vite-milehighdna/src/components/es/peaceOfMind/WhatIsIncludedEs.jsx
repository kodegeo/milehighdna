import React from "react";

const WhatIsIncludedEs = ({ title, items }) => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {title}
        </h2>
        <div className="bg-blue-50 rounded-xl p-8">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIncludedEs; 