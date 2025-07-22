import React from "react";

const LegalUseCases = ({ title, useCases }) => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] text-center mb-12">
          {title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F7FA] p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#2C6FA6] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalUseCases;
