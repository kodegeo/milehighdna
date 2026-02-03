import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#2C6FA6] text-white py-12 md:py-16 px-6 md:px-12 lg:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Ready to Get Started?
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-8 opacity-95">
          Schedule your immigration DNA test today. We're here to guide you through every step — from embassy coordination to result delivery. Book an appointment with us today.
        </p>
        <a
          href="https://calendly.com/milehighdnatesting/immigration"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#2C6FA6] font-semibold px-6 py-3 rounded-md hover:bg-[#7DB9E8] hover:text-white transition"
        >
          Book Your Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CallToAction;