const WhatYoullNeed = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1A3C59] mb-8 text-center">
          How It Works: Start Your Immigration DNA Test
        </h2>
        <h3 className="text-xl font-semibold text-[#1A3C59] mb-6 text-center">
          What You’ll Need Before Getting Started
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-[#F5F7FA] border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex items-start gap-3 text-base text-gray-700 leading-relaxed">
            <span className="text-blue-600 flex-shrink-0">•</span>
            <span>A <strong>written request</strong> from USCIS or a U.S. Embassy or Consulate</span>
          </div>
          <div className="p-6 bg-[#F5F7FA] border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex items-start gap-3 text-base text-gray-700 leading-relaxed">
            <span className="text-blue-600 flex-shrink-0">•</span>
            <span>A <strong>valid email address</strong> to receive instructions, forms, and updates</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://calendly.com/milehighdnatesting/immigration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-semibold text-center"
          >
            Get Started Today
          </a>
          <a
            href="tel:+17209009342"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'phone_click',
                phone_number: '720-900-9342',
                phone_location: 'WhatYoullNeed - CTA',
              });
            }}
            className="inline-block text-blue-600 font-semibold px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition text-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullNeed;
