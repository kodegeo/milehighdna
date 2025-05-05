import React from "react";

const HowItWorks = ({ title, steps }) => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] text-center mb-12">
          {title}
        </h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-[#2C6FA6] mb-2">
                Paso {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C59] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 