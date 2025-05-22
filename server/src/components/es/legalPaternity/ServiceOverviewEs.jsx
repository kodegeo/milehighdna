import React from "react";

const ServiceOverview = ({ title, paragraphs }) => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] mb-6 text-center">
          {title}
        </h2>
        {paragraphs.map((text, index) => (
          <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ServiceOverview; 