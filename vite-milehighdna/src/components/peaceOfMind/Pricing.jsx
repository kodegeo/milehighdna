import React from "react";

const Pricing = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Peace of Mind Paternity Test Kit Pricing
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Clear pricing with no hidden fees. Includes everything you need for confidential, accurate results.
        </p>

        <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">$99–$129</h3>
          <p className="text-gray-600 mb-6">*(Price may vary by promotion or volume.)</p>
          <ul className="text-left text-gray-700 space-y-4 mb-6">
            <li>✔ 99%+ Accuracy Guarantee</li>
            <li>✔ Simple Home Collection Kit</li>
            <li>✔ Discreet, Unbranded Packaging</li>
            <li>✔ Results in 2–3 Business Days</li>
            <li>✔ Secure, Confidential Results</li>
            <li>✔ Prepaid Return Shipping Available</li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#order-now"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Order Your Kit Today
            </a>
            <a
              href="tel:7209009342"
              className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
            >
              Call Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing; 