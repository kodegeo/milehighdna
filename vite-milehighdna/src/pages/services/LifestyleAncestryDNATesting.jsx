import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";

const LifestyleAncestryDNATesting = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "What do lifestyle and ancestry DNA tests include?", answer: "Lifestyle and ancestry DNA testing provides insight into genetic traits related to wellness, nutrition, and ancestral origins. Tests may cover diet response, genetic traits, ancestry composition, or geographic origins depending on the panel selected." },
    { question: "Are these tests used for legal or court purposes?", answer: "No. Lifestyle and ancestry DNA tests are for personal knowledge and wellness only—not for legal or court use. They do not replace paternity, maternity, or other relationship DNA tests when legal or court-admissible results are needed." },
    { question: "How do I choose the right test?", answer: "Contact us to discuss your goals—wellness, ancestry, or both. We can help you select the right lifestyle and/or ancestry panel. A simple DNA sample (e.g., cheek swab) is collected and results are delivered in an easy-to-understand report." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule a consultation", description: "Book online or call to discuss your goals (wellness, ancestry, or both)." },
    { step: 2, title: "DNA sample collection", description: "A simple DNA sample (e.g., cheek swab) is collected." },
    { step: 3, title: "Laboratory analysis", description: "Your sample is analyzed for the selected lifestyle and/or ancestry markers." },
    { step: 4, title: "Report delivery", description: "Results are delivered in an easy-to-understand report for personal use." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/lifestyle-ancestry-dna-testing#webpage", "url": "https://milehighdnatesting.com/services/lifestyle-ancestry-dna-testing", "name": "Lifestyle & Ancestry DNA Tests in Denver | Mile High DNA", "description": "Lifestyle and ancestry DNA testing for wellness, nutrition, and ancestral origins. Denver, Colorado." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "Lifestyle & Ancestry DNA Testing", "description": "Genetic testing for wellness, nutrition, and ancestral origins.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "Lifestyle & Ancestry DNA Testing", "item": "https://milehighdnatesting.com/services/lifestyle-ancestry-dna-testing" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Lifestyle & Ancestry DNA Tests in Denver | Wellness & Origins | Mile High DNA</title>
        <meta name="description" content="Lifestyle and ancestry DNA testing in Denver. Insight into genetic traits, wellness, nutrition, and ancestral origins. Mile High DNA Testing." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/lifestyle-ancestry-dna-testing" />
        <meta property="og:title" content="Lifestyle & Ancestry DNA Tests in Denver | Mile High DNA" />
        <meta property="og:description" content="Wellness, nutrition, and ancestral origins DNA testing. Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/lifestyle-ancestry-dna-testing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">Lifestyle & Ancestry DNA Tests in Denver</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">Wellness, nutrition, and ancestral origins.</p>
          <p className="text-blue-100 mb-8 max-w-2xl">Lifestyle and ancestry DNA testing provides insight into genetic traits related to wellness, nutrition, and ancestral origins. These tests help you understand personal genetics beyond paternity and relationship testing.</p>
          <ul className="space-y-2 text-blue-100 mb-8">
            <li>✔ Wellness and nutrition insights</li>
            <li>✔ Ancestral origins</li>
            <li>✔ Personal knowledge only</li>
            <li>✔ Easy-to-understand reports</li>
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
            <span>✓ Multiple Panel Options</span>
            <span>✓ Denver & Colorado</span>
          </div>
        </div>
      </section>

      {/* What Is / When needed */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Are Lifestyle & Ancestry DNA Tests?</h2>
          <p className="text-gray-700 mb-4">Lifestyle and ancestry DNA testing provides insight into genetic traits related to wellness, nutrition, and ancestral origins. These tests help you understand personal genetics beyond paternity and relationship testing.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">When Are These Tests Used?</h2>
          <p className="text-gray-700 mb-4">Lifestyle and ancestry DNA tests are for <strong>personal knowledge and wellness</strong>—not for legal or court use. They are chosen by individuals interested in genetic traits, diet response, ancestry composition, or geographic origins. They do not replace paternity, maternity, or other relationship DNA tests when legal or court-admissible results are needed.</p>
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
          <p className="text-gray-700">Pricing varies by test type and panel. Contact us for options and current pricing.</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">We offer lifestyle and ancestry DNA testing in Denver and Colorado. Book an appointment to explore options and choose the right test for your goals.</p>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule a Consultation</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Book an appointment to explore lifestyle and ancestry DNA testing options.</p>
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
            <Link to="/services/healthy-weight-dna-test" className="text-blue-600 hover:underline">Healthy Weight DNA Test</Link>
            {' · '}
            <Link to="/services/gps-origins-dna-test" className="text-blue-600 hover:underline">GPS Origins DNA Test</Link>
            {' · '}
            <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LifestyleAncestryDNATesting;
