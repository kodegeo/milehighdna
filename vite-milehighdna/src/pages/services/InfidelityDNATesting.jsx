import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const InfidelityDNATesting = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "Is infidelity DNA testing court-admissible?", answer: "No. Infidelity DNA testing is for personal use only—not for court or legal proceedings. Results are not court-admissible. When legal documentation is required, legal paternity or relationship testing must be used." },
    { question: "How is the testing conducted?", answer: "Testing uses personal items or DNA samples, handled with strict confidentiality. Laboratory analysis is performed with sensitivity and privacy. Results are delivered privately and securely." },
    { question: "Who should I contact for a confidential consultation?", answer: "Contact Mile High DNA Testing to schedule a confidential consultation. All inquiries are handled with discretion. We serve Denver and Colorado." }
  ];

  const processSteps = [
    { step: 1, title: "Confidential Consultation", description: "Contact us to schedule a confidential consultation to discuss your situation and options." },
    { step: 2, title: "Sample Submission", description: "Submit personal items or samples as directed. All materials are handled with care and privacy." },
    { step: 3, title: "Laboratory Analysis", description: "Analysis is performed with strict confidentiality at our laboratory partner." },
    { step: 4, title: "Secure Delivery", description: "Results are delivered privately and securely. No court or legal use." },
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/infidelity-dna-testing#webpage", "url": "https://milehighdnatesting.com/services/infidelity-dna-testing", "name": "Infidelity DNA Testing in Denver | Mile High DNA", "description": "Confidential infidelity DNA testing in Denver. Discreet, private, non-legal testing." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "Infidelity DNA Testing", "description": "Discreet DNA analysis using personal items or samples. Private, non-court use. Denver, Colorado.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "Infidelity DNA Testing", "item": "https://milehighdnatesting.com/services/infidelity-dna-testing" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <title>Infidelity DNA Testing in Denver | Discreet DNA Analysis | Mile High DNA</title>
        <meta name="description" content="Confidential infidelity DNA testing in Denver. Discreet analysis using personal items or samples. Private, non-legal testing. Strict confidentiality. Call 720-900-9342." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/infidelity-dna-testing" />
        <meta property="og:title" content="Infidelity DNA Testing in Denver | Mile High DNA" />
        <meta property="og:description" content="Confidential infidelity DNA testing. Discreet, private, non-legal. Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/infidelity-dna-testing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Infidelity DNA Testing in Denver</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">Discreet DNA analysis using personal items or samples. Conducted with strict confidentiality and sensitivity for private, non-court use in Denver and Colorado.</p>
          <Link to="/appointments" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Schedule Confidential Consultation</Link>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ AABB Accredited Laboratory</span>
            <span>✓ Court-Admissible Options Available</span>
            <span>✓ 3–5 Business Day Results</span>
            <span>✓ Confidential & Secure Process</span>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is Infidelity DNA Testing?</h2>
          <p className="text-gray-700 mb-4">Infidelity DNA testing provides discreet analysis using personal items or DNA samples to help confirm or exclude biological relationships. This testing is conducted with strict confidentiality and sensitivity for private, non-court use.</p>
        </div>
      </section>

      {/* When Is It Needed / Legal note */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">When This Test Is Used</h2>
          <p className="text-gray-700 mb-4">Infidelity DNA testing is for <strong>personal use only</strong>—not for court or legal proceedings. It is intended for individuals seeking private, discreet answers. Results are not court-admissible and do not replace <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">legal paternity</Link> or relationship testing when documentation is required.</p>
          <p className="text-gray-700">All testing is conducted with strict confidentiality. Samples and results are handled with sensitivity and privacy.</p>
        </div>
      </section>

      {/* How The Process Works */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How the Process Works</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
            <div className="space-y-8">
              {processSteps.map(({ step, title, description }) => (
                <div key={step} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">{step}</div>
                  <div className="flex-grow bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">Pricing varies by type of sample and analysis required. Mile High DNA Testing uses AABB-accredited laboratory partners where applicable and serves Denver and Colorado with strict confidentiality. Contact us for a confidential quote.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100">
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
          <h2 className="text-3xl font-bold mb-4">Schedule a Confidential Consultation</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Book an appointment to discuss your options with our team. All inquiries are handled with discretion.</p>
          <Link to="/appointments" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">Book Appointment</Link>
          <p className="mt-8 text-blue-200">975 N Lincoln Street, Suite 205C, Denver, CO 80203</p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p>
            <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">Legal paternity</Link> · <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:underline">Prenatal paternity</Link> · <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:underline">Immigration DNA</Link> · <Link to="/services/discreet-dna-testing" className="text-blue-600 hover:underline">Discreet DNA Testing</Link> · <Link to="/locations/denver" className="text-blue-600 hover:underline">Denver location</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default InfidelityDNATesting;
