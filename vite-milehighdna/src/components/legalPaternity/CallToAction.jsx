import React from "react";

const CallToAction = ({ heading, subtext, buttonText, buttonLink }) => {
  return (
    <section className="bg-[#2C6FA6] text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          {heading || "Schedule Your Free Consultation Today"}
        </h2>
        <p className="text-lg mb-8">
          {subtext ||
            "Speak with a specialist to learn more about our DNA testing services, timelines, and legal options. Our 30-minute consultations are free and confidential."}
        </p>
        <a
          href={buttonLink || "https://calendly.com/milehighdnatesting/legal-paternity-test"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#2C6FA6] font-semibold px-6 py-3 rounded-md hover:bg-[#7DB9E8] hover:text-white transition"
        >
          {buttonText || "Book Free Consultation"}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
