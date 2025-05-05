import React from "react";

const ValuePillars = ({ title, pillars }) => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] mb-12">
          {title}
        </h2>

        {/* Pillars Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{pillar.icon}</span>
                <h3 className="text-xl font-semibold text-[#2C6FA6]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-gray-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
