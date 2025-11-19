import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#2C6FA6] text-white w-full">
      <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Take the Next Step Toward Clarity <br />and Peace of Mind
        </h2>
        <p className="text-lg mb-8">
          Whether for personal knowledge <span className="font-semibold">($1,599) </span> 
          or legal needs <span className="font-semibold">($1,799)</span>, 
          our AABB-accredited prenatal testing provides the answers you deserve. 
          Schedule your test today and get results you can trust.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:7209009342"
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "PrenatalCallToAction - CTA Component"
              });
            }}
            className="bg-white text-[#2C6FA6] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            📞 Call (720) 900-9342
          </a>
          <a
            href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition"
          >
            📅 Book Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
