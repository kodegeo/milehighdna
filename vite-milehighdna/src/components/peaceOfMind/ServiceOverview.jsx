import React from "react";

const ServiceOverview = ({ title, paragraphs }) => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview; 