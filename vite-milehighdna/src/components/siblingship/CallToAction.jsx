import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#2C6FA6] text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Schedule Your <br/>Siblingship DNA Test?
        </h2>
        <p className="text-lg mb-8">
          Whether you're confirming a sibling relationship for legal purposes, immigration, or peace of mind — we're here to help. Our team will walk you through the process and make sure everything goes smoothly.
        </p>
        <div className="w-full">
          <iframe
            src="https://calendly.com/milehighdnatesting/prueba-hermandad"
            width="100%"
            height="500"
            frameBorder="0"
            title="Book Your Siblingship DNA Test"
            style={{ minHeight: '500px', borderRadius: '12px', border: '1px solid #e5e7eb' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;