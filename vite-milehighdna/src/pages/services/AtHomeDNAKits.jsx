import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AtHomeDNAKits = () => {
  return (
    <main>
      <Helmet>
        <title>At-Home DNA Kits in Denver | Postnatal Peace of Mind Testing | Mile High DNA</title>
        <meta name="description" content="At-home DNA test kits in Denver provide convenient, non-legal postnatal DNA testing with AABB-accredited lab accuracy. Order your kit, collect at home, ship securely. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/at-home-dna-kits" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">At-Home DNA Kits in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At-home DNA test kits provide a convenient, non-legal postnatal DNA testing option with the same laboratory accuracy as in-office testing. All samples are processed by an AABB-accredited laboratory and can be shipped securely nationwide.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment or order a kit; we guide you through the process.</li>
              <li>Receive your at-home DNA collection kit with clear instructions.</li>
              <li>Collect cheek swab samples at home and ship them to the lab in the provided packaging.</li>
              <li>Receive accurate, confidential results once the lab completes analysis.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When At-Home Kits Are Used</h2>
            <p className="text-gray-700 mb-4">
              At-home DNA kits are for <strong>peace of mind (non-legal) testing only</strong>. Results are not court-admissible. They are ideal for personal knowledge and family clarity when you prefer to collect samples at home. For legal paternity, custody, child support, or immigration cases, in-office legal testing with chain-of-custody is required.
            </p>
            <p className="text-gray-700">
              All testing is performed through AABB-accredited laboratories. Your privacy and the security of samples are prioritized.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing varies by test type and kit. Contact us for current options. Kits can be shipped to most U.S. addresses.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Order an At-Home DNA Kit or Book a Consultation</h2>
            <p className="text-gray-700 mb-4">Schedule an appointment to order your kit or learn more about at-home testing options.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mr-3">
              Book Appointment
            </Link>
            <Link to="/products/peace-of-mind-dna-kit" className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Peace of Mind DNA Kit
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/non-legal-paternity-testing" className="text-blue-600 hover:underline">Non-Legal Paternity Testing</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AtHomeDNAKits;
