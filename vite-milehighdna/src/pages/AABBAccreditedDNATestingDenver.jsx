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

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            AABB-Accredited DNA Testing in Denver
          </h1>
          <p className="text-lg text-blue-100 font-medium mb-4">
            Court-admissible DNA testing requires strict identity verification, documented chain-of-custody procedures, and analysis by an AABB-accredited laboratory.
          </p>
          <p className="text-white leading-relaxed mb-4">
            Mile High DNA Testing coordinates professional DNA testing services in Denver using laboratories that meet AABB accreditation standards required for legal and immigration DNA testing.
          </p>
          <p className="text-white leading-relaxed">
            These standards ensure results meet documentation requirements used by courts, USCIS, and federal agencies.
          </p>
        </div>
      </section>

      {/* What Is AABB Accreditation? */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Is AABB Accreditation?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The American Association of Blood Banks (AABB) establishes internationally recognized standards for relationship DNA testing laboratories.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            AABB accreditation verifies that a laboratory has demonstrated compliance with strict requirements related to:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
            <li>laboratory validation procedures</li>
            <li>genetic marker analysis</li>
            <li>statistical interpretation of results</li>
            <li>documentation and record keeping</li>
            <li>chain-of-custody sample handling</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Laboratories must undergo regular inspections and audits to maintain accreditation status.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This oversight helps ensure that relationship DNA testing results remain scientifically reliable and legally defensible.
          </p>
        </div>
      </section>

      {/* Why Courts Require AABB-Accredited DNA Testing */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Courts Require AABB-Accredited DNA Testing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Family courts require strict documentation procedures when DNA results are used as legal evidence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            AABB-accredited laboratories follow validated testing procedures and chain-of-custody protocols designed to ensure:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
            <li>verified participant identification</li>
            <li>documented sample collection</li>
            <li>controlled laboratory analysis</li>
            <li>certified reporting procedures</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These safeguards allow DNA testing results to meet court-admissibility standards.
          </p>
        </div>
      </section>

      {/* Why USCIS Requires AABB-Accredited DNA Testing */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why USCIS Requires AABB-Accredited DNA Testing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The United States Citizenship and Immigration Services (USCIS) requires relationship DNA testing to be performed by an AABB-accredited laboratory when DNA evidence is used in immigration cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These requirements help ensure that immigration DNA testing results meet consistent scientific and documentation standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In many cases, U.S. embassies and consulates also require AABB accreditation for family relationship DNA testing.
          </p>
        </div>
      </section>

      {/* Chain-of-Custody DNA Testing Procedures */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Chain-of-Custody DNA Testing Procedures
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Legal and immigration DNA testing must follow documented chain-of-custody procedures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chain-of-custody ensures the identity of each participant is verified and that samples are handled securely from collection through laboratory analysis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Standard procedures include:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
            <li>government-issued photo identification verification</li>
            <li>certified DNA sample collection</li>
            <li>sealed specimen packaging</li>
            <li>documented transfer to the laboratory</li>
            <li>controlled laboratory processing</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These procedures protect the integrity of the testing process and ensure results can be used for official purposes.
          </p>
        </div>
      </section>

      {/* We Specialize in Legal and Immigration DNA Testing */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
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

      {/* FAQ */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions About AABB-Accredited DNA Testing
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-900 pr-4">Q: {faq.question}</span>
                  <svg className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 border-t border-gray-200">
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
            className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AABBAccreditedDNATestingDenver;
