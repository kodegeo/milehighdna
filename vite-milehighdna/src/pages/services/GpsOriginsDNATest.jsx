import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GpsOriginsDNATest = () => {
  return (
    <main>
      <Helmet>
        <title>GPS Origins DNA Test in Denver | Ancestry & Geographic Origins | Mile High DNA</title>
        <meta name="description" content="GPS Origins DNA Test in Denver provides detailed ancestry and geographic genetic origins. Discover your genetic origins with advanced DNA analysis. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/gps-origins-dna-test" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">GPS Origins DNA Test in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The GPS Origins DNA Test provides detailed ancestry insights and geographic genetic origins using advanced DNA analysis. This test is ideal for individuals seeking deeper ancestral and regional genetic information.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment; a DNA sample (e.g., cheek swab) is collected.</li>
              <li>Your DNA is analyzed for ancestry and geographic origin markers.</li>
              <li>You receive a report showing ancestral composition and geographic origins.</li>
              <li>Results are delivered confidentially for personal use.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              The GPS Origins DNA Test is for <strong>personal ancestry and genealogy</strong>—not for legal or court use. It is chosen by individuals interested in discovering their genetic origins and ancestral regions. It does not replace paternity, maternity, or other relationship DNA tests when legal documentation is required.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing and report options vary. Contact us for current pricing and to schedule.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule Your GPS Origins DNA Test</h2>
            <p className="text-gray-700 mb-4">Book an appointment to discover your genetic origins.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/lifestyle-ancestry-dna-testing" className="text-blue-600 hover:underline">Lifestyle & Ancestry DNA Tests</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default GpsOriginsDNATest;
