import React from "react";

const ServiceHero = ({ title, subtitle, imageUrl, buttonText, buttonLink, secondaryButtonText, secondaryButtonLink }) => {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                {buttonText}
              </a>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <a
                href={secondaryButtonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
              >
                {secondaryButtonText}
              </a>
            )}
          </div>
        </div>
        {/* Image Section */}
        {imageUrl && (
          <div className="lg:w-1/2">
            <img
              src={imageUrl}
              alt={title}
              className="w-full rounded-xl shadow-md"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceHero; 