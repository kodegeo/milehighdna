import React from "react";

const HeroSection = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A3C59] leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
          <div className="mt-6">
            <a
              href="https://calendly.com/milehighdnatesting/freeconsultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2C6FA6] text-white px-6 py-3 rounded-md hover:bg-[#7DB9E8] transition"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>

        {/* Image Section */}
        {imageUrl && (
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt="Hero"
              className="rounded-lg shadow-md max-h-[400px] w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

