const Pricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pricing for Legal DNA Paternity Testing
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            No hidden fees. Our pricing includes lab testing, coordination with international embassies, and direct result delivery to immigration officials.
          </p>
  
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Starting at $349</h3>
            <ul className="text-left text-gray-700 space-y-4 mb-6">
              <li>✔ AABB-Accredited Laboratory Testing</li>
              <li>✔ Sample Collection at Our Office</li>
              <li>✔ Results in 3–5 Business Days</li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/milehighdnatesting/legal-paternity-test"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-medium"
              >
                Book Now
              </a>
              <a
                href="tel:+17209009342"
                onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition font-medium"
              >
                Call Now
              </a>
            </div>
          </div>

          <p className="text-gray-600 mt-8 mb-4">Questions about pricing or testing? We’re here to help.</p>
          <a
            href="tel:+17209009342"
            onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Now: (720) 900-9342
          </a>
  
        </div>
      </section>
    );
  };
  
  export default Pricing;
  