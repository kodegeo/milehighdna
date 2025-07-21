import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#2C6FA6] text-white w-full">
      <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Schedule Your <br></br>Free Consultation Today
        </h2>
        <p className="text-lg mb-8">
          Speak with a specialist to learn more about our DNA testing services,
          timelines, and legal options. Our 30-minute consultations are free and confidential.
        </p>
        <a
          href="https://calendly.com/milehighdnatesting/consulta-gratuita"
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