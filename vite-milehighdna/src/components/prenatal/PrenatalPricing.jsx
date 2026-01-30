const PrenatalPricing = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Pricing for Prenatal DNA Tests
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Our prenatal packages include non-invasive lab analysis, professional sample collection, and 
          optional legal documentation. We provide clear, upfront pricing for Denver families—no hidden fees.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Non-Legal: Alleged Father <br />+ Expectant Mother
            </h3>
            <p className="text-gray-600 mb-4">
              A non-legal test for one alleged father and one expectant mother. Best for peace of mind.
            </p>
            <p className="text-2xl font-bold text-blue-700 mb-4">$1,599.00</p>
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li>✔ AABB Lab Analysis</li>
              <li>✔ Sample Collection</li>
              <li>✔ Peace of Mind</li>
              <li>✔ 7–10 Business Day Turnaround</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition font-medium"
              >
                Book This Test
              </a>
              <a
                href="tel:+17209009342"
                onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-5 py-3 rounded-lg shadow hover:bg-blue-50 transition font-medium"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Legal: Alleged Father <br />+ Expectant Mother
            </h3>
            <p className="text-gray-600 mb-4">
              A legal test with notarized documentation. Recommended for court, custody, or immigration cases.
            </p>
            <p className="text-2xl font-bold text-blue-700 mb-4">$1,799.00</p>
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li>✔ AABB Lab Analysis</li>
              <li>✔ Full Sample Collection</li>
              <li>✔ Legal Documentation</li>
              <li>✔ 7–10 Business Day Turnaround</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition font-medium"
              >
                Book This Test
              </a>
              <a
                href="tel:+17209009342"
                onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-5 py-3 rounded-lg shadow hover:bg-blue-50 transition font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">*Pricing may vary for out-of-state testing.</p>
      </div>
    </section>
  );
};

export default PrenatalPricing;
