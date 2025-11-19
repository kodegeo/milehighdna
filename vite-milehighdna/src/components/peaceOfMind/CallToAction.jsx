import React from "react";

const CallToAction = ({ heading, subtext, buttonText, buttonLink }) => {
  return (
    <section className="bg-blue-600 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={buttonLink}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition font-semibold text-lg"
          >
            {buttonText}
          </a>
        </div>
        <p className="text-blue-200 mt-6">
          Have questions? Contact our support team at{" "}
          <a href="mailto:support@milehighdnatesting.com" className="underline hover:text-white">
            support@milehighdnatesting.com
          </a>{" "}
          or{" "}
          <a 
            href="tel:7209009342" 
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "PeaceOfMindCallToAction - CTA Component"
              });
            }}
            className="underline hover:text-white">
            (720) 900-9342
          </a>
        </p>
      </div>
    </section>
  );
};

export default CallToAction; 