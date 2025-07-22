import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#2C6FA6] text-white w-full">
      <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Schedule Your <br />Free Consultation Today
        </h2>
        <p className="text-lg mb-8">
          Speak with a specialist to learn more about our DNA testing services,
          timelines, and legal options. Our 30-minute consultations are free and confidential.
        </p>
        <div className="w-full">
          <iframe
            src="https://calendly.com/milehighdnatesting/freeconsultation"
            width="100%"
            height="500"
            frameBorder="0"
            title="Book Your Free Consultation"
            style={{ minHeight: '500px', borderRadius: '12px', border: '1px solid #e5e7eb' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;