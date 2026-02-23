import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";

const HealthyWeightDNATest = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "What does the Healthy Weight DNA Test analyze?", answer: "The Healthy Weight DNA Test analyzes genetic factors related to metabolism, diet response, and exercise tendencies. You receive a report with personalized insights and recommendations to support health and wellness goals." },
    { question: "Can this test diagnose medical conditions?", answer: "No. The Healthy Weight DNA Test is for personal wellness only—not for medical diagnosis or legal use. It does not replace advice from a healthcare provider. It is chosen by individuals who want genetic insight to support diet, exercise, and weight management." },
    { question: "How is the sample collected?", answer: "A simple DNA sample (cheek swab) is collected in our Denver office. Genes related to metabolism, nutrient response, and exercise are analyzed and results are for personal use to support health and wellness goals." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule your appointment", description: "Book online or call our Denver office." },
    { step: 2, title: "DNA sample collection", description: "A simple DNA sample (cheek swab) is collected." },
    { step: 3, title: "Genetic analysis", description: "Genes related to metabolism, nutrient response, and exercise are analyzed." },
    { step: 4, title: "Personalized report", description: "You receive a report with personalized insights and recommendations. Results are for personal use to support health and wellness goals." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/healthy-weight-dna-test#webpage", "url": "https://milehighdnatesting.com/services/healthy-weight-dna-test", "name": "Healthy Weight DNA Test in Denver | Mile High DNA", "description": "Healthy Weight DNA Test for metabolism, diet, and exercise insights. Denver, Colorado." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "Healthy Weight DNA Test", "description": "Genetic testing for metabolism, diet response, and exercise. Personalized wellness insights.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "Healthy Weight DNA Test", "item": "https://milehighdnatesting.com/services/healthy-weight-dna-test" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Healthy Weight DNA Test in Denver | Metabolism & Diet Genetics | Mile High DNA</title>
        <meta name="description" content="Healthy Weight DNA Test in Denver analyzes genetic factors for metabolism, diet response, and exercise. Personalize weight and wellness strategies. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/healthy-weight-dna-test" />
        <meta property="og:title" content="Healthy Weight DNA Test in Denver | Mile High DNA" />
        <meta property="og:description" content="Genetic insights for metabolism, diet, and exercise. Personal wellness. Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/healthy-weight-dna-test" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">Healthy Weight DNA Test in Denver</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">Personalize weight and wellness strategies based on your genetics.</p>
          <p className="text-blue-100 mb-8 max-w-2xl">The Healthy Weight DNA Test analyzes genetic factors related to metabolism, diet response, and exercise tendencies. This test helps personalize weight and wellness strategies based on your genetics.</p>
          <ul className="space-y-2 text-blue-100 mb-8">
            <li>✔ Metabolism and nutrient response</li>
            <li>✔ Exercise tendency insights</li>
            <li>✔ Personal wellness only</li>
            <li>✔ Confidential results</li>
          </ul>
          <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Book Your Appointment</a>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ Professional Laboratory Analysis</span>
            <span>✓ Confidential & Secure</span>
            <span>✓ Personal Wellness Use</span>
            <span>✓ Denver & Colorado</span>
          </div>
        </div>
      </section>

      {/* What Is / When needed */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is the Healthy Weight DNA Test?</h2>
          <p className="text-gray-700 mb-4">The Healthy Weight DNA Test analyzes genetic factors related to metabolism, diet response, and exercise tendencies. This test helps personalize weight and wellness strategies based on your genetics.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">When Is This Test Used?</h2>
          <p className="text-gray-700 mb-4">The Healthy Weight DNA Test is for <strong>personal wellness only</strong>—not for medical diagnosis or legal use. It is chosen by individuals who want genetic insight to support diet, exercise, and weight management. It does not replace advice from a healthcare provider.</p>
        </div>
      </section>

      {/* How the process works */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How the Process Works</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
            <div className="space-y-8">
              {processSteps.map(({ step, title, description }) => (
                <div key={step} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">{step}</div>
                  <div className="flex-grow bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700">Pricing and turnaround time vary. Contact us for current pricing and to schedule.</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">We offer the Healthy Weight DNA Test in Denver and surrounding areas. Contact us for current pricing and to schedule your appointment.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50">
                  <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                  <svg className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100"><p className="pt-4 text-gray-700">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule Your Healthy Weight DNA Test</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Book an appointment in Denver or surrounding areas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">Book Appointment</a>
          </div>
          <p className="mt-8 text-blue-200">📍 {ADDRESS}</p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p>
            <Link to="/services/lifestyle-ancestry-dna-testing" className="text-blue-600 hover:underline">Lifestyle & Ancestry DNA Tests</Link>
            {' · '}
            <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default HealthyWeightDNATest;
