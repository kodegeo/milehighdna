import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#2C6FA6] text-white w-full">
      <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Call Today <br />For A Free Consultation
        </h2>
        <p className="text-lg mb-8">
          Speak with a specialist to learn more about our DNA testing services,
          timelines, and legal options. Our 30-minute consultations are free and confidential.
        </p>
          <a
                href="tel:+17209009342"
                onClick={() => {
                  window.dataLayer?.push({
                    event: "phone_click",
                    phone_location: "CallToAction - Common Component"
                  });
                }}
                className="bg-white text-[#2C6FA6] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
            📞 Call (720) 900-9342
            </a>


      </div>
    </section>
  );
};

export default CallToAction;