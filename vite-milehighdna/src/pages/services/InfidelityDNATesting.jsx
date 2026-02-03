import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const InfidelityDNATesting = () => {
  return (
    <main>
      <Helmet>
        <title>Infidelity DNA Testing in Denver | Discreet DNA Analysis | Mile High DNA</title>
        <meta name="description" content="Confidential infidelity DNA testing in Denver. Discreet analysis using personal items or samples. Private, non-legal testing with strict confidentiality. Mile High DNA Testing." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/infidelity-dna-testing" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">Infidelity DNA Testing in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Infidelity DNA testing provides discreet analysis using personal items or DNA samples to help confirm or exclude biological relationships. This testing is conducted with strict confidentiality and sensitivity for private, non-court use.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Contact us to schedule a confidential consultation.</li>
              <li>Submit personal items or samples as directed (handled with care and privacy).</li>
              <li>Laboratory analysis is performed with strict confidentiality.</li>
              <li>Results are delivered privately and securely.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              Infidelity DNA testing is for <strong>personal use only</strong>—not for court or legal proceedings. It is intended for individuals seeking private, discreet answers. Results are not court-admissible and do not replace legal paternity or relationship testing when documentation is required.
            </p>
            <p className="text-gray-700">
              All testing is conducted with strict confidentiality. Samples and results are handled with sensitivity and privacy.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing varies by type of sample and analysis required. Contact us for a confidential quote. Mile High DNA Testing is AABB-accredited for relationship testing where applicable.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule a Confidential Consultation</h2>
            <p className="text-gray-700 mb-4">Book an appointment to discuss your options with our team. All inquiries are handled with discretion.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/discreet-dna-testing" className="text-blue-600 hover:underline">Discreet DNA Testing</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default InfidelityDNATesting;
