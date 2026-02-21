import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PHONE = "720-900-9342";
const PHONE_TEL = "tel:+17209009342";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";

const PostmortemPaternityTesting = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    {
      question: "Can you do a DNA test if the father is deceased?",
      answer: "Yes, postmortem DNA testing can be completed using biological relatives, stored medical samples, or certain personal items depending on the circumstances."
    },
    {
      question: "Can postmortem DNA testing determine relationships other than paternity?",
      answer: "Yes, postmortem testing can determine grandparentage, siblingship, avuncular relationships, and other kinship determinations."
    },
    {
      question: "Can this be used for inheritance or probate in Colorado?",
      answer: "Yes, postmortem DNA testing can support probate and inheritance claims only if strict legal chain-of-custody procedures are followed from the beginning."
    },
    {
      question: "How long does postmortem DNA testing take?",
      answer: "The timeline depends on the type and condition of the sample submitted and the complexity of DNA extraction."
    },
    {
      question: "Is postmortem DNA testing accurate?",
      answer: "Yes, when sufficient biological reference samples are available, postmortem DNA testing meets the same scientific standards as legal paternity testing."
    }
  ];

  const processSteps = [
    { step: 1, title: "Case Review by Phone", description: "We evaluate your intended use of results, available biological relatives, and legal requirements specific to Colorado." },
    { step: 2, title: "Relationship and Legal Goal Confirmation", description: "We determine whether legal or personal effects testing is appropriate." },
    { step: 3, title: "Collection and Case Activation", description: "The test is officially started once DNA samples are collected or a submitted article is accepted for laboratory processing." },
    { step: 4, title: "Laboratory Analysis", description: "All testing is performed through our AABB-accredited laboratory partner. Legal cases undergo multi-level technical review before release." },
    { step: 5, title: "Secure Delivery", description: "Results are delivered securely via PDF. Certified copies are available if required." }
  ];

  const schemaWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://milehighdnatesting.com/services/postmortem-paternity-testing#webpage",
    "url": "https://milehighdnatesting.com/services/postmortem-paternity-testing",
    "name": "Postmortem DNA Testing in Denver | Mile High DNA Testing",
    "description": "Court-admissible and kinship DNA testing after a loved one has passed away. Postmortem paternity, grandparent, siblingship, and probate testing in Denver, Colorado."
  };

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Postmortem DNA Testing in Denver",
    "description": "Postmortem paternity testing, grandparent DNA testing after death, siblingship and avuncular testing, probate and inheritance DNA cases in Denver and Colorado.",
    "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" },
    "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO", "addressCountry": "US" }
  };

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://milehighdnatesting.com/services/postmortem-paternity-testing#business",
    "name": "Mile High DNA Testing",
    "url": "https://milehighdnatesting.com",
    "telephone": "+1-720-900-9342",
    "address": { "@type": "PostalAddress", "streetAddress": "975 N Lincoln St Suite 205C", "addressLocality": "Denver", "addressRegion": "CO", "postalCode": "80203", "addressCountry": "US" }
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Postmortem DNA Testing", "item": "https://milehighdnatesting.com/services/postmortem-paternity-testing" }
    ]
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
  };

  return (
    <main className="pb-20 md:pb-0">
      <Helmet>
        <html lang="en" />
        <title>Postmortem DNA Testing in Denver | Court-Admissible & Kinship Testing | Mile High DNA</title>
        <meta name="description" content="Postmortem paternity test Denver. Court-admissible and kinship DNA testing after a loved one has passed. Probate, inheritance, grandparent & siblingship testing in Colorado. Call for case evaluation." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/postmortem-paternity-testing" />
        <meta property="og:title" content="Postmortem DNA Testing in Denver | Mile High DNA Testing" />
        <meta property="og:description" content="Court-admissible postmortem paternity and kinship DNA testing in Denver, Colorado. Probate, inheritance, and survivor benefit cases." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/postmortem-paternity-testing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Postmortem DNA Testing in Denver
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Court-admissible and kinship DNA testing after a loved one has passed away.
          </p>
          <a
            href={PHONE_TEL}
            onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE, phone_location: "Postmortem Hero" }); }}
            className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Call Now: {PHONE}
          </a>
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

      {/* Intro + visual block */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When a potential father or biological relative is deceased, families are often navigating grief, probate deadlines, and complex legal questions at the same time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mile High DNA Testing provides structured postmortem DNA testing in Denver for:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-8">
            <li>Postmortem paternity testing</li>
            <li>Grandparent DNA testing after death</li>
            <li>Siblingship testing after death</li>
            <li>Avuncular testing after death</li>
            <li>Probate and inheritance DNA cases</li>
            <li>Social Security survivor benefit cases</li>
          </ul>
          <p className="text-gray-700 font-medium mb-4">These cases require precision. Procedure matters as much as science.</p>
          <a href={PHONE_TEL} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE }); }}>Call Now to Speak With a Denver DNA Specialist</a>
          <p className="mt-4 text-gray-600">{ADDRESS}</p>

          {/* Visual block placeholder */}
          {/*}
          <div className="mt-12 rounded-xl bg-gray-100 border border-gray-200 p-8 text-center text-gray-500">
            Professional forensic documentation and chain-of-custody procedures
          </div>*/}
        </div>
      </section>

      {/* What Is Postmortem DNA Testing */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is Postmortem DNA Testing?</h2>
          <p className="text-gray-700 mb-4">Postmortem DNA testing determines biological relationships when one individual is deceased.</p>
          <p className="text-gray-700 mb-4">While postmortem paternity testing is the most common request, testing can also determine:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
            <li>Whether a deceased man was the biological father</li>
            <li>Whether grandparents are biologically related to a child</li>
            <li>Whether siblings share a biological parent</li>
            <li>Whether an aunt or uncle is biologically related</li>
            <li>Other kinship relationships required for probate or inheritance matters</li>
          </ul>
          <p className="text-gray-700 mb-4">In Denver and throughout Colorado, legal admissibility depends on documented procedure, not simply DNA extraction. If results may be used in court, the correct testing pathway must be selected from the beginning.</p>
          <p className="font-semibold text-gray-800">Call before proceeding to ensure your case is structured properly.</p>
          <a href={PHONE_TEL} className="inline-block mt-4 text-blue-600 font-semibold hover:underline" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE }); }}>{PHONE}</a>
        </div>
      </section>

      {/* Common scenarios */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Common Postmortem DNA Testing Scenarios in Denver</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Postmortem Paternity Testing</h3>
              <p className="text-gray-700">Used to establish legal fatherhood after death for probate, inheritance, or government benefits.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Grandparent DNA Testing</h3>
              <p className="text-gray-700">Used when the alleged father is deceased and the paternal grandparents are available for testing. Learn more about <Link to="/services/grandparentage-testing" className="text-blue-600 hover:underline">grandparentage testing</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Siblingship DNA Testing</h3>
              <p className="text-gray-700">Used to determine whether two individuals share one or both biological parents. See <Link to="/services/siblingship-testing" className="text-blue-600 hover:underline">siblingship testing</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Avuncular DNA Testing</h3>
              <p className="text-gray-700">Used to determine whether a child is biologically related to an aunt or uncle when the alleged father is deceased. <Link to="/services/avuncular-dna-testing" className="text-blue-600 hover:underline">Avuncular DNA testing</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Probate and Inheritance DNA Testing</h3>
              <p className="text-gray-700">Used in Denver Probate Court and Colorado estate matters when biological relationships must be legally confirmed.</p>
            </div>
          </div>
          <p className="mt-8 text-gray-700">Each case requires a structured evaluation before testing begins.</p>
          <a href={PHONE_TEL} className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE }); }}>Call Now for Proper Case Evaluation</a>
        </div>
      </section>

      {/* Legal vs Personal effects */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Legal vs Personal Effects DNA Testing</h2>
          <p className="text-gray-700 mb-8">Not all postmortem DNA testing is legally admissible.</p>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Postmortem DNA Testing</h3>
              <p className="text-gray-700 mb-2">Used for:</p>
              <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700 mb-4">
                <li>Denver probate proceedings</li>
                <li>Colorado inheritance claims</li>
                <li>Social Security survivor benefits</li>
                <li>Court submission</li>
                <li>Birth certificate amendments</li>
              </ul>
              <p className="text-gray-700 mb-2">Legal testing requires:</p>
              <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700">
                <li>Government-issued identification for living participants</li>
                <li>Certified third-party DNA collection</li>
                <li>Strict chain-of-custody documentation</li>
                <li>AABB-accredited laboratory analysis</li>
                <li>Court-admissible reporting</li>
              </ul>
              <p className="mt-4"><Link to="/services/legal-paternity-testing" className="text-blue-600 font-semibold hover:underline">Legal paternity testing</Link> follows the same chain-of-custody standards.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Effects DNA Testing</h3>
              <p className="text-gray-700 mb-2">Used for informational purposes only. This may involve items such as:</p>
              <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700 mb-4">
                <li>Toothbrush</li>
                <li>Razor</li>
                <li>Clothing</li>
                <li>Hairbrush</li>
              </ul>
              <p className="text-gray-700">DNA recovery from personal items depends on sample condition and environmental exposure. Results from personal effects testing are not court admissible, and legal chain-of-custody cannot be created retroactively. If inheritance or court use is possible, legal testing must be selected from the start.</p>
              <a href={PHONE_TEL} className="inline-block mt-4 text-blue-600 font-semibold hover:underline" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE }); }}>Call for Proper Guidance</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Denver Postmortem DNA Testing Process</h2>
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
          <p className="mt-8 text-gray-600 text-sm">The length of testing depends on the type and condition of the sample submitted and the complexity of extracting usable DNA.</p>
          {/* Visual block */}
          {/*
          <div className="mt-12 rounded-xl bg-gray-100 border border-gray-200 p-8 text-center text-gray-500">
            Laboratory analysis and chain-of-custody documentation
          </div>*/}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Families in Denver Choose Mile High DNA Testing</h2>
          <p className="text-gray-700 mb-6">Postmortem DNA testing involves higher evidentiary sensitivity, court scrutiny, emotional complexity, and increased risk if structured incorrectly.</p>
          <p className="text-gray-700 mb-4">Families choose Mile High DNA Testing because we provide:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
            <li>Structured legal DNA coordination</li>
            <li>AABB-accredited laboratory partnerships</li>
            <li>Strict chain-of-custody compliance</li>
            <li>Experience with probate and inheritance cases</li>
            <li>A local Denver office with nationwide coordination</li>
          </ul>
          <p className="font-semibold text-gray-800">We focus on doing it correctly the first time.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions About Postmortem DNA Testing in Denver</h2>
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Speak With a Denver DNA Specialist Today</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Postmortem DNA testing must be structured correctly from the beginning.</p>
          <a href={PHONE_TEL} className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE, phone_location: "Postmortem Final CTA" }); }}>
            Call or Text Now: {PHONE}
          </a>
          <p className="mt-6 text-gray-400">{ADDRESS}</p>
        </div>
      </section>

      {/* Sticky mobile call */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-blue-600 text-white py-4 text-center font-bold shadow-lg">
        <a href={PHONE_TEL} className="block" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE, phone_location: "Sticky Mobile Bar" }); }}>
          Call Now – {PHONE}
        </a>
      </div>
    </main>
  );
};

export default PostmortemPaternityTesting;
