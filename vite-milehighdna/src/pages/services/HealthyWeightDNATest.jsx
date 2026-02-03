import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HealthyWeightDNATest = () => {
  return (
    <main>
      <Helmet>
        <title>Healthy Weight DNA Test in Denver | Metabolism & Diet Genetics | Mile High DNA</title>
        <meta name="description" content="Healthy Weight DNA Test in Denver analyzes genetic factors for metabolism, diet response, and exercise. Personalize weight and wellness strategies. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/healthy-weight-dna-test" />
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">Healthy Weight DNA Test in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Healthy Weight DNA Test analyzes genetic factors related to metabolism, diet response, and exercise tendencies. This test helps personalize weight and wellness strategies based on your genetics.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How the Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment; a simple DNA sample (cheek swab) is collected.</li>
              <li>Genes related to metabolism, nutrient response, and exercise are analyzed.</li>
              <li>You receive a report with personalized insights and recommendations.</li>
              <li>Results are for personal use to support health and wellness goals.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When This Test Is Used</h2>
            <p className="text-gray-700 mb-4">
              The Healthy Weight DNA Test is for <strong>personal wellness only</strong>—not for medical diagnosis or legal use. It is chosen by individuals who want genetic insight to support diet, exercise, and weight management. It does not replace advice from a healthcare provider.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing and turnaround time vary. Contact us for current pricing and to schedule.
            </p>
          </section>

          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Schedule Your Healthy Weight DNA Test</h2>
            <p className="text-gray-700 mb-4">Book an appointment in Denver or surrounding areas.</p>
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

export default HealthyWeightDNATest;
