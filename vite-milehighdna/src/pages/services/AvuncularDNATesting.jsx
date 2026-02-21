import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AvuncularDNATesting = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "What is avuncular DNA testing?", answer: "Avuncular DNA testing examines biological relationships through an aunt or uncle when direct parent testing is not possible. This method is used to evaluate extended family relationships and provide clarity in complex family situations." },
    { question: "When is avuncular testing used instead of paternity testing?", answer: "Avuncular testing is used when a parent is unavailable, deceased, or unwilling to participate in testing. It provides an indirect way to establish biological relationships through aunt or uncle DNA analysis." },
    { question: "How accurate is avuncular DNA testing?", answer: "Avuncular DNA testing provides statistically reliable results when performed by an accredited laboratory. The test analyzes genetic markers to determine the probability of an avuncular relationship, though results may be more conclusive when both aunt and uncle participate." },
    { question: "Can avuncular test results be used in court?", answer: "Legal avuncular testing that follows proper chain-of-custody procedures can be used in court. Non-legal avuncular testing provides results but is not court-admissible." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule Your Appointment", description: "Book online or call our Denver office. We'll confirm whether avuncular testing is the right option for your situation." },
    { step: 2, title: "Sample Collection", description: "DNA samples are collected from the child and aunt or uncle via quick cheek swab. Legal tests require ID verification." },
    { step: 3, title: "Chain of Custody (If Legal)", description: "Identity verification and documentation for court-admissible results when required." },
    { step: 4, title: "Laboratory Analysis", description: "Genetic markers are analyzed and compared at an AABB-accredited facility. Statistical analysis determines the probability of an avuncular relationship." },
    { step: 5, title: "Results Delivery", description: "Results are delivered securely, typically within 3–5 business days. Legal tests include documentation suitable for court use." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/avuncular-dna-testing#webpage", "url": "https://milehighdnatesting.com/services/avuncular-dna-testing", "name": "Avuncular DNA Testing in Denver | Aunt/Uncle DNA Test | Mile High DNA", "description": "Avuncular DNA testing in Denver, Colorado. Establish biological relationships through an aunt or uncle when direct parent testing is not possible." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "Avuncular DNA Testing", "description": "DNA testing to establish biological relationships through an aunt or uncle when direct parent testing is not possible. Available in Denver and Colorado.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "Avuncular DNA Testing", "item": "https://milehighdnatesting.com/services/avuncular-dna-testing" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Avuncular DNA Testing in Denver | Aunt/Uncle DNA Test | Mile High DNA</title>
        <meta name="description" content="Avuncular DNA testing in Denver examines biological relationships through an aunt or uncle when direct parent testing is not possible. Legal and peace-of-mind options. Call 720-900-9342." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/avuncular-dna-testing" />
        <meta property="og:title" content="Avuncular DNA Testing in Denver | Aunt/Uncle DNA Test" />
        <meta property="og:description" content="Avuncular DNA testing examines biological relationships through an aunt or uncle when direct parent testing is not possible. Denver, Colorado." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/avuncular-dna-testing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avuncular DNA Testing in Denver" />
        <meta name="twitter:description" content="DNA testing to establish relationships through aunt or uncle in Denver, Colorado." />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Avuncular DNA Testing in Denver</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">Establish biological relationships through an aunt or uncle when direct parent testing is not possible. Available for legal and peace-of-mind cases in Denver and Colorado.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/appointments" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Book Now</Link>
            <a href="tel:+17209009342" className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}>Call Now</a>
          </div>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is Avuncular DNA Testing?</h2>
          <p className="text-gray-700 mb-4">Avuncular DNA testing is designed for situations where a biological relationship needs to be established through an aunt or uncle when direct parent testing is not possible. This type of DNA test provides an indirect method to verify family relationships through genetic analysis.</p>
          <p className="text-gray-700">Avuncular testing involves DNA testing between a child and an aunt or uncle to establish biological relationships. If you need to establish a relationship and direct parent testing is not possible, this is an appropriate test.</p>
        </div>
      </section>

      {/* When Is It Needed */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">When Is Avuncular DNA Testing Appropriate?</h2>
          <p className="text-gray-700 mb-4">Avuncular DNA testing in Denver is commonly used when:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
            <li>A parent is unavailable, deceased, or unwilling to participate</li>
            <li>Extended family relationships need to be evaluated</li>
            <li>Legal cases require indirect relationship verification</li>
            <li>Family verification is needed for personal knowledge</li>
            <li>Immigration cases require extended family relationship proof</li>
            <li>Complex family situations need clarification</li>
          </ul>
          <p className="text-gray-700 mb-8">This testing option is used when direct parent-child testing is not feasible.</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">When Avuncular Testing Is Not Appropriate</h3>
          <p className="text-gray-700 mb-2">Avuncular testing may not be necessary if a parent is available and willing to participate in direct paternity or maternity testing, or if direct parent-child testing would provide clearer results. In those cases, <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">legal paternity testing</Link> or <Link to="/services/non-legal-paternity-testing" className="text-blue-600 hover:underline">peace of mind testing</Link> may be more appropriate.</p>
        </div>
      </section>

      {/* How The Process Works */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How Avuncular DNA Testing Works</h2>
          <p className="text-gray-700 mb-8">Avuncular DNA testing follows an indirect genetic analysis process: DNA samples are collected from the child and aunt or uncle; genetic markers are analyzed and compared; statistical analysis determines the probability of an avuncular relationship. Laboratory analysis is performed by an AABB-accredited facility. Testing both aunt and uncle typically yields more conclusive results than testing a single relative.</p>
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

      {/* Legal vs Non-Legal */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Legal vs Non-Legal Avuncular Testing</h2>
          <p className="text-gray-700 mb-6">Legal avuncular testing includes documentation suitable for court use and follows the same <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">chain-of-custody standards</Link> as legal paternity testing. Non-legal avuncular testing provides accurate results for personal knowledge but is not court-admissible. Choose the option that matches your intended use.</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">Avuncular DNA testing provides statistically reliable results when performed by an accredited laboratory. At Mile High DNA Testing we use AABB-accredited laboratory partners, offer both legal and peace-of-mind options, and serve Denver and Colorado with clear guidance so you choose the right test for your situation.</p>
          <p className="text-gray-700">Related services: <Link to="/services/siblingship-testing" className="text-blue-600 hover:underline">Siblingship Testing</Link>, <Link to="/services/grandparentage-testing" className="text-blue-600 hover:underline">Grandparentage Testing</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Avuncular DNA Test?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Appointments for avuncular DNA testing are scheduled through our Denver office. Book online or call to discuss your situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">Book Now</Link>
            <a href="tel:+17209009342" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}>Call 720-900-9342</a>
          </div>
          <p className="mt-8 text-blue-200">975 N Lincoln Street, Suite 205C, Denver, CO 80203</p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p>
            <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">Legal paternity testing</Link> · <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:underline">Prenatal paternity</Link> · <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:underline">Immigration DNA testing</Link> · <Link to="/locations/denver" className="text-blue-600 hover:underline">Denver location</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default AvuncularDNATesting;
