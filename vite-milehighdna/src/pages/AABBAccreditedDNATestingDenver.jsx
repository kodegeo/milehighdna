import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this DNA test AABB accredited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All legal and immigration DNA testing we provide is performed by AABB-accredited laboratories that meet nationally recognized standards for relationship DNA testing required by courts and USCIS."
      }
    },
    {
      "@type": "Question",
      "name": "Do courts require AABB-accredited DNA testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most courts require legal paternity testing to be performed by an AABB-accredited laboratory using documented chain-of-custody procedures for court-admissible DNA results."
      }
    },
    {
      "@type": "Question",
      "name": "Does USCIS require AABB-accredited laboratories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. USCIS requires relationship DNA testing to be performed by an AABB-accredited laboratory for immigration DNA cases and embassy processing."
      }
    },
    {
      "@type": "Question",
      "name": "Will my results be accepted for court or immigration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When your DNA test follows verified identity procedures and documented chain-of-custody standards and is performed by an AABB-accredited laboratory, the results meet the requirements used by courts, USCIS, and federal agencies."
      }
    }
  ]
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com/" },
    { "@type": "ListItem", "position": 2, "name": "AABB-Accredited DNA Testing in Denver", "item": "https://milehighdnatesting.com/aabb-accredited-dna-testing-denver" }
  ]
};

const AABBAccreditedDNATestingDenver = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "Is this DNA test AABB accredited?", answer: "Yes. All legal and immigration DNA testing we provide is performed by AABB-accredited laboratories that meet nationally recognized standards for relationship DNA testing required by courts and USCIS." },
    { question: "Do courts require AABB-accredited DNA testing?", answer: "Most courts require legal paternity testing to be performed by an AABB-accredited laboratory using documented chain-of-custody procedures for court-admissible DNA results." },
    { question: "Does USCIS require AABB-accredited laboratories?", answer: "Yes. USCIS requires relationship DNA testing to be performed by an AABB-accredited laboratory for immigration DNA cases and embassy processing." },
    { question: "Will my results be accepted for court or immigration?", answer: "When your DNA test follows verified identity procedures and documented chain-of-custody standards and is performed by an AABB-accredited laboratory, the results meet the requirements used by courts, USCIS, and federal agencies." }
  ];

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>AABB-Accredited DNA Testing in Denver | Court & USCIS Compliant | Mile High DNA</title>
        <meta name="description" content="AABB-accredited DNA testing in Denver for legal, court, and immigration cases. Chain-of-custody, court-admissible and USCIS-compliant results. Mile High DNA Testing." />
        <link rel="canonical" href="https://milehighdnatesting.com/aabb-accredited-dna-testing-denver" />
        <meta property="og:title" content="AABB-Accredited DNA Testing in Denver | Mile High DNA" />
        <meta property="og:description" content="AABB-accredited DNA testing for court and USCIS. Chain-of-custody, court-admissible results in Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/aabb-accredited-dna-testing-denver" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* Intro */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            AABB-Accredited DNA Testing in Denver
          </h1>
          <p className="text-lg text-white leading-relaxed">
            AABB accreditation is the nationally recognized standard for relationship DNA testing. It matters for legal and immigration DNA tests because courts and USCIS require results from laboratories that meet strict quality and chain-of-custody standards. Mile High DNA Testing works exclusively with AABB-accredited laboratory partners so that your results are reliable, defensible, and accepted when they matter most.
          </p>
        </div>
      </section>

      {/* H2: What AABB Accreditation Means */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What AABB Accreditation Means for DNA Testing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AABB (Association for the Advancement of Blood & Biotherapies) accreditation means the laboratory has met rigorous quality standards for relationship testing. These standards cover how samples are handled, how testing is performed, and how results are reported. For legal and immigration cases, accreditation is directly tied to chain-of-custody: only when identity is verified and every step is documented can results be used in court or by federal agencies. Choosing an AABB-accredited lab ensures your test meets the bar that courts and USCIS expect.
          </p>
        </div>
      </section>

      {/* H2: When You Need AABB-Accredited DNA Testing */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            When You Need AABB-Accredited DNA Testing
          </h2>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
            <li>Court cases (paternity, custody, child support)</li>
            <li>Child support or custody proceedings</li>
            <li>Immigration and USCIS applications</li>
            <li>U.S. embassy or consular cases</li>
            <li>Other legal or government requirements</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            In these situations, identity verification and chain of custody are required. Testing must be performed by an AABB-accredited laboratory and follow documented procedures so that results are admissible.
          </p>
        </div>
      </section>

      {/* H2: How the AABB Chain-of-Custody Process Works */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How the AABB Chain-of-Custody Process Works
          </h2>
          <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-700">
            <li>You schedule an in-person appointment (required for legal and immigration testing).</li>
            <li>Government-issued ID is verified and documented.</li>
            <li>Samples are collected by a trained collector and sealed with tamper-evident packaging.</li>
            <li>Chain-of-custody paperwork tracks the sample from collection to the AABB-accredited lab.</li>
            <li>The laboratory analyzes the sample and issues a formal report suitable for court or USCIS.</li>
            <li>Results are delivered securely; certified copies are available when needed.</li>
          </ol>
          <p className="mt-6 text-gray-700 leading-relaxed">
            At-home peace of mind kits are not performed under chain of custody and are not court-admissible. For any legal or immigration need, you must schedule an in-person appointment so that identity and chain of custody are properly documented.
          </p>
        </div>
      </section>

      {/* H2: We Specialize in Legal and Immigration DNA Testing */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            We Specialize in Legal and Immigration DNA Testing
          </h2>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
            <li><Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">AABB-accredited paternity testing</Link></li>
            <li><Link to="/services/immigration-dna-testing" className="text-blue-600 hover:underline">USCIS AABB-accredited DNA testing</Link></li>
            <li><Link to="/services/postmortem-paternity-testing" className="text-blue-600 hover:underline">Court-admissible DNA testing</Link></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            All of these tests are processed by AABB-accredited laboratories and follow chain-of-custody procedures when required for court or immigration use.
          </p>
        </div>
      </section>

      {/* H2: FAQ */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions About AABB-Accredited DNA Testing
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900 pr-4">Q: {faq.question}</span>
                  <svg className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 border-t border-gray-100">
                    <p className="pt-4 text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white mb-6">
            Need a legal or immigration DNA test in Denver? Schedule an appointment with our team.
          </p>
          <Link
            to="/appointments"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      
    </main>
  );
};

export default AABBAccreditedDNATestingDenver;
