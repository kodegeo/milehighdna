import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TwinZygosityTesting = () => {
  return (
    <main>
      <Helmet>
        <title>Twin Zygosity DNA Testing in Denver | Identical or Fraternal Twins | Mile High DNA</title>
        <meta name="description" content="Twin zygosity DNA testing in Denver determines whether twins are identical or fraternal. Accurate DNA analysis for medical insight and family knowledge. Mile High DNA Testing." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/twin-zygosity-testing" />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Twin Zygosity DNA Testing in Denver
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Twin zygosity DNA testing determines whether twins are identical (monozygotic) or fraternal (dizygotic) using precise DNA analysis. This test is commonly used for medical insight, family knowledge, or personal clarity.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link to="/appointments" className="inline-flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book Now
            </Link>
            <a href="tel:+17209009342" className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ AABB Accredited Laboratory</span>
            <span>✓ Legal & Peace-of-Mind Options</span>
            <span>✓ Clear, Confidential Results</span>
            <span>✓ Serving Denver & Colorado</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-info" className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Testing Option</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Non-Legal (Peace of Mind)</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$250+</p>
              <p className="text-sm text-gray-500 mb-4">Twin zygosity for personal or family knowledge.</p>
              <p className="text-gray-600 mb-4">Results are not court-admissible. Cheek swabs from both twins.</p>
              <Link
                to="/appointments"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full"
              >
                Schedule Appointment
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Legal (Court-Admissible)</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">$374+</p>
              <p className="text-sm text-gray-500 mb-4">Chain of custody when results may be used officially.</p>
              <p className="text-gray-600 mb-4">AABB-accredited laboratory processing when required.</p>
              <Link
                to="/appointments"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Standard twin zygosity package: <strong>$369</strong>. Additional participants for postnatal tests: often <strong>$150 per person</strong>. Final price depends on lab package and documentation needs.
          </p>

          <p className="text-gray-700 mb-6 text-lg">
            Need a different relationship test? See{" "}
            <Link to="/services/siblingship-testing" className="text-blue-600 underline">siblingship testing</Link>{" "}
            or{" "}
            <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">legal paternity testing</Link>.
          </p>
        </div>
      </section>

      {/* How the Test Works */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How the Test Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>Schedule an appointment; simple cheek swabs are collected from both twins.</li>
            <li>DNA from each twin is analyzed and compared.</li>
            <li>Results indicate whether twins share identical DNA (identical) or not (fraternal).</li>
            <li>Results are delivered in a clear, confidential report.</li>
          </ol>
        </div>
      </section>

      {/* When This Test Is Used */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">When This Test Is Used</h2>
          <p className="text-gray-700 mb-4">
            Twin zygosity testing is used for <strong>personal knowledge</strong>, medical or genetic counseling purposes, and family clarity. It can be performed as a legal (court-admissible) or non-legal (peace of mind) test depending on your needs. Legal testing follows chain-of-custody procedures when results may be used for official purposes.
          </p>
        </div>
      </section>

      {/* Final CTA — full-width background */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule Twin Zygosity Testing</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Book an appointment in Denver or surrounding Colorado areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              Book Appointment
            </Link>
            <a href="tel:+17209009342" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}>
              Call 720-900-9342
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p>
            <Link to="/services/siblingship-testing" className="text-blue-600 hover:underline">Siblingship Testing</Link>
            {' · '}
            <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default TwinZygosityTesting;
