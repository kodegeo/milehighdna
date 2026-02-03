import React from 'react';

const HeroSection = ({ title, subtitle, imageUrl, buttonText, buttonLink, secondaryButtonText, secondaryButtonLink }) => {
  return (
    <section className="bg-gradient-to-r from-white to-[#F5F7FA] py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A3C59] mb-5 max-w-2xl leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {buttonText && (
              <a href={buttonLink} className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                {buttonText}
              </a>
            )}
            {secondaryButtonText && (
              <a 
                href={secondaryButtonLink} 
                onClick={() => {
                  if (secondaryButtonLink?.startsWith('tel:')) {
                    window.dataLayer?.push({
                      event: "phone_click",
                      phone_location: "HeroSection - Common Component Secondary CTA"
                    });
                  }
                }}
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition">
                {secondaryButtonText}
              </a>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 