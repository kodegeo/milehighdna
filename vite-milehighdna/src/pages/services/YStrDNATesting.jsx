import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";

const YStrDNATesting = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "What is Y-STR DNA testing?", answer: "Y-STR DNA testing analyzes the male Y-chromosome to establish paternal lineage and shared male ancestry. It is used for genealogy research, surname studies, and paternal relationship analysis along the direct paternal line." },
    { question: "Can Y-STR results be used in court?", answer: "Y-STR testing is used for genealogy and paternal line verification. It is not a substitute for standard legal paternity testing when court-admissible results are required. For court or legal purposes, legal paternity testing is needed." },
    { question: "Who can take a Y-STR test?", answer: "Y-STR testing requires male participants, as it analyzes the Y-chromosome that is passed from father to son. Females do not have a Y-chromosome and would need mtDNA testing for maternal lineage instead." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule your appointment", description: "Book online or call our Denver office." },
    { step: 2, title: "DNA sample collection", description: "A DNA sample (typically cheek swab) is collected from male participants." },
    { step: 3, title: "Y-chromosome STR analysis", description: "Y-chromosome short tandem repeat markers are analyzed in the laboratory." },
    { step: 4, title: "Results report", description: "Results show whether males share a direct paternal line (same Y-DNA profile) or not. Delivered in a clear report for genealogy or relationship purposes." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/y-str-dna-testing#webpage", "url": "https://milehighdnatesting.com/services/y-str-dna-testing", "name": "Y-STR DNA Testing in Denver | Mile High DNA", "description": "Y-STR DNA testing for paternal lineage and genealogy. Denver, Colorado." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "Y-STR DNA Testing", "description": "Y-chromosome DNA testing for paternal lineage, surname studies, and genealogy.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "Y-STR DNA Testing", "item": "https://milehighdnatesting.com/services/y-str-dna-testing" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Y-STR DNA Testing in Denver | Paternal Lineage & Genealogy | Mile High DNA</title>
        <meta name="description" content="Y-STR DNA testing in Denver analyzes the Y-chromosome for paternal lineage and genealogy. Surname studies and paternal relationship analysis. Mile High DNA Testing." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/y-str-dna-testing" />
        <meta property="og:title" content="Y-STR DNA Testing in Denver | Mile High DNA" />
        <meta property="og:description" content="Y-STR DNA testing for paternal lineage and genealogy. Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/y-str-dna-testing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">Y-STR DNA Testing in Denver</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">Paternal lineage and genealogy through the Y-chromosome.</p>
          <p className="text-blue-100 mb-8 max-w-2xl">Y-STR DNA testing analyzes the male Y-chromosome to establish paternal lineage and shared male ancestry. This test is frequently used for genealogy research, surname studies, and paternal relationship analysis.</p>
          <ul className="space-y-2 text-blue-100 mb-8">
            <li>✔ Paternal line verification</li>
            <li>✔ Genealogy and surname studies</li>
            <li>✔ Simple cheek swab collection</li>
            <li>✔ Clear, confidential reports</li>
          </ul>
          <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Book Your Appointment</a>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ Accredited Laboratory Partners</span>
            <span>✓ Confidential & Secure</span>
            <span>✓ Genealogy & Relationship Use</span>
            <span>✓ Denver & Colorado</span>
          </div>
        </div>
      </section>

      {/* What Is / When needed */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is Y-STR DNA Testing?</h2>
          <p className="text-gray-700 mb-4">Y-STR DNA testing analyzes the male Y-chromosome to establish paternal lineage and shared male ancestry. This test is frequently used for genealogy research, surname studies, and paternal relationship analysis.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">When Is This Test Used?</h2>
          <p className="text-gray-700 mb-4">Y-STR testing is used for <strong>genealogy, surname studies, and paternal line verification</strong>. It can support relationship questions along the direct paternal line (father to son). It is not a substitute for standard paternity testing when legal paternity is in question; for court or legal purposes, <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">legal paternity testing</Link> is required.</p>
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
          <p className="text-gray-700">Pricing varies by number of participants and reporting options. Contact us for a quote. Testing may be performed through accredited laboratories depending on your needs.</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">We offer Y-STR DNA testing in Denver and Colorado with clear guidance on when it is appropriate versus legal paternity testing. Contact us to discuss your paternal lineage or genealogy testing needs.</p>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule Y-STR DNA Testing</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Book an appointment to discuss your paternal lineage or genealogy testing needs.</p>
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
            <Link to="/services/mtdna-testing" className="text-blue-600 hover:underline">mtDNA (Maternal Lineage) Testing</Link>
            {' · '}
            <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default YStrDNATesting;
