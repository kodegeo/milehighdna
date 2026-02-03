import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const LifestyleAncestryDNATesting = () => {
  return (
    <main>
      <Helmet>
        <title>Lifestyle & Ancestry DNA Tests in Denver | Wellness & Origins | Mile High DNA</title>
        <meta name="description" content="Lifestyle and ancestry DNA testing in Denver. Insight into genetic traits, wellness, nutrition, and ancestral origins. Mile High DNA Testing." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/lifestyle-ancestry-dna-testing" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">Lifestyle & Ancestry DNA Tests in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lifestyle and ancestry DNA testing provides insight into genetic traits related to wellness, nutrition, and ancestral origins. These tests help you understand personal genetics beyond paternity and relationship testing.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment to discuss your goals (wellness, ancestry, or both).</li>
              <li>A simple DNA sample (e.g., cheek swab) is collected.</li>
              <li>Your sample is analyzed for the selected lifestyle and/or ancestry markers.</li>
              <li>Results are delivered in an easy-to-understand report.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              Lifestyle and ancestry DNA tests are for <strong>personal knowledge and wellness</strong>—not for legal or court use. They are chosen by individuals interested in genetic traits, diet response, ancestry composition, or geographic origins. They do not replace paternity, maternity, or other relationship DNA tests when legal or court-admissible results are needed.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing varies by test type and panel. Contact us for options and current pricing.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule a Consultation</h2>
            <p className="text-gray-700 mb-4">Book an appointment to explore lifestyle and ancestry DNA testing options.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/healthy-weight-dna-test" className="text-blue-600 hover:underline">Healthy Weight DNA Test</Link> · <Link to="/services/gps-origins-dna-test" className="text-blue-600 hover:underline">GPS Origins DNA Test</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LifestyleAncestryDNATesting;
