import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MtdnaTesting = () => {
  return (
    <main>
      <Helmet>
        <title>mtDNA Testing in Denver | Maternal Lineage & Genealogy | Mile High DNA</title>
        <meta name="description" content="Mitochondrial DNA (mtDNA) testing in Denver traces maternal ancestry through the direct maternal line. Genealogy and maternal relationship testing. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/mtdna-testing" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">mtDNA Testing in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mitochondrial DNA (mtDNA) testing traces maternal ancestry through the direct maternal line. This test is useful when close maternal relatives are unavailable and is commonly used for genealogy and extended maternal relationship testing.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment; a DNA sample (e.g., cheek swab) is collected.</li>
              <li>Mitochondrial DNA is analyzed (inherited from mother to child).</li>
              <li>Results show maternal line relatedness and can support genealogy research.</li>
              <li>Results are delivered in a clear, confidential report.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              mtDNA testing is used for <strong>genealogy and maternal line verification</strong>. It is helpful when a direct maternal relative is unavailable for standard testing. It is not a substitute for legal maternity or paternity testing when court-admissible results are required.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing varies by testing panel and reporting. Contact us for a quote. Testing may be performed through accredited laboratories depending on your needs.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule mtDNA Testing</h2>
            <p className="text-gray-700 mb-4">Book an appointment to explore your maternal genetic lineage.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/y-str-dna-testing" className="text-blue-600 hover:underline">Y-STR (Paternal Lineage) Testing</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default MtdnaTesting;
