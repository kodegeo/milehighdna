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

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">Twin Zygosity DNA Testing in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Twin zygosity DNA testing determines whether twins are identical (monozygotic) or fraternal (dizygotic) using precise DNA analysis. This test is commonly used for medical insight, family knowledge, or personal clarity.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment; simple cheek swabs are collected from both twins.</li>
              <li>DNA from each twin is analyzed and compared.</li>
              <li>Results indicate whether twins share identical DNA (identical) or not (fraternal).</li>
              <li>Results are delivered in a clear, confidential report.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              Twin zygosity testing is used for <strong>personal knowledge</strong>, medical or genetic counseling purposes, and family clarity. It can be performed as a legal (court-admissible) or non-legal (peace of mind) test depending on your needs. Legal testing follows chain-of-custody procedures when results may be used for official purposes.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing depends on whether you need legal or non-legal results. Contact us for a quote. Testing is performed through AABB-accredited laboratories when court-admissible results are required.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule Twin Zygosity Testing</h2>
            <p className="text-gray-700 mb-4">Book an appointment in Denver or surrounding Colorado areas.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/siblingship-testing" className="text-blue-600 hover:underline">Siblingship Testing</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default TwinZygosityTesting;
