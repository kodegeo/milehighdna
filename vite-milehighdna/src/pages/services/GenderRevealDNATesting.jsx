import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GenderRevealDNATesting = () => {
  return (
    <main>
      <Helmet>
        <title>Peek-A-Boo Gender Reveal DNA Test in Denver | Early Gender Testing | Mile High DNA</title>
        <meta name="description" content="Peek-A-Boo gender reveal DNA test in Denver. Determine your baby's gender as early as 6 weeks with a simple blood draw. Safe, non-invasive early gender testing. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/gender-reveal-dna-testing" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">Peek-A-Boo Gender Reveal DNA Test in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Peek-A-Boo Gender Reveal DNA test determines your baby's gender as early as 6 weeks into pregnancy using a simple maternal blood draw. This early gender DNA test is safe, non-invasive, and delivers fast, reliable results.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment (typically from 6 weeks pregnancy).</li>
              <li>A small maternal blood draw is performed.</li>
              <li>Cell-free fetal DNA in the mother's blood is analyzed.</li>
              <li>Results are delivered quickly and confidentially.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              This test is for <strong>personal use and early gender reveal only</strong>. It is not a substitute for prenatal paternity testing or medical prenatal screening. It is chosen by expectant parents who want to learn their baby's gender early in pregnancy in a safe, accurate way.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing and availability may vary. Contact us for current pricing and to schedule. Testing is performed in partnership with accredited laboratories.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule Your Gender Reveal Test</h2>
            <p className="text-gray-700 mb-4">Book an appointment in Denver, Aurora, or Lakewood for early gender testing.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:underline">Prenatal Paternity Testing</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default GenderRevealDNATesting;
