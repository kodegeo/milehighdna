import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#2C6FA6] text-white w-full">
      <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Book Your DNA Test Online or In Person
        </h2>
            <p className="text-gray-700 mb-6 text-lg">
            Get fast, reliable results from Denver’s trusted DNA testing center. Schedule your appointment or order your family DNA test kit today.
            </p>
        <a
            href="tel:7209009342"
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "FamilyCallToAction - CTA Component"
              });
            }}
            className="bg-white text-[#2C6FA6] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            📞 Call (720) 900-9342
          </a>

      </div>
    </section>
  );
};

export default CallToAction;