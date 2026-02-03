import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const YStrDNATesting = () => {
  return (
    <main>
      <Helmet>
        <title>Y-STR DNA Testing in Denver | Paternal Lineage & Genealogy | Mile High DNA</title>
        <meta name="description" content="Y-STR DNA testing in Denver analyzes the Y-chromosome for paternal lineage and genealogy. Surname studies and paternal relationship analysis. Mile High DNA Testing." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/y-str-dna-testing" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">Y-STR DNA Testing in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Y-STR DNA testing analyzes the male Y-chromosome to establish paternal lineage and shared male ancestry. This test is frequently used for genealogy research, surname studies, and paternal relationship analysis.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment; a DNA sample (typically cheek swab) is collected from male participants.</li>
              <li>Y-chromosome STR (short tandem repeat) markers are analyzed.</li>
              <li>Results show whether males share a direct paternal line (same Y-DNA profile) or not.</li>
              <li>Results are provided in a clear report for genealogy or relationship purposes.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              Y-STR testing is used for <strong>genealogy, surname studies, and paternal line verification</strong>. It can support relationship questions along the direct paternal line (father to son). It is not a substitute for standard paternity testing when legal paternity is in question; for court or legal purposes, legal paternity testing is required.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing varies by number of participants and reporting options. Contact us for a quote. Testing may be performed through accredited laboratories depending on your needs.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule Y-STR DNA Testing</h2>
            <p className="text-gray-700 mb-4">Book an appointment to discuss your paternal lineage or genealogy testing needs.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/mtdna-testing" className="text-blue-600 hover:underline">mtDNA (Maternal Lineage) Testing</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default YStrDNATesting;
