import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MH_LEGAL_IMMIGRATION_SHORT, MH_NOT_AABB_LONG } from "../constants/aabbComplianceCopy";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Mile High DNA Testing AABB accredited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${MH_NOT_AABB_LONG}`
      }
    },
    {
      "@type": "Question",
      "name": "Do courts require AABB-accredited partner laboratory testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most courts require legal paternity testing to be performed by an AABB-accredited partner laboratory using documented chain-of-custody procedures for court-admissible DNA results. Mile High DNA Testing is a collection company and coordinates testing with partner laboratory that maintain AABB accreditation."
      }
    },
    {
      "@type": "Question",
      "name": "Does USCIS require AABB-accredited partner laboratory?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. USCIS requires relationship DNA testing to be performed by an AABB-accredited partner laboratory for immigration DNA cases and embassy processing. We partner with an AABB-accredited partner laboratory for legal and immigration DNA testing."
      }
    },
    {
      "@type": "Question",
      "name": "Will my results be accepted for court or immigration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When your DNA test follows verified identity procedures and documented chain-of-custody standards and is performed by an AABB-accredited partner laboratory, the results can meet the requirements used by courts, USCIS, and federal agencies. Mile High DNA Testing coordinates collection and case management; analysis is performed by accredited partner laboratory."
      }
    }
  ]
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com/" },
    { "@type": "ListItem", "position": 2, "name": "AABB standards & partner laboratory (Denver)", "item": "https://milehighdnatesting.com/aabb-accredited-dna-testing-denver" }
  ]
};

const AABBAccreditedDNATestingDenver = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    {
      question: "Is Mile High DNA Testing AABB accredited?",
      answer: `${MH_NOT_AABB_LONG}`
    },
    {
      question: "Do courts require AABB-accredited partner laboratory testing?",
      answer:
        "Most courts require legal paternity testing to be performed by an AABB-accredited partner laboratory using documented chain-of-custody procedures for court-admissible DNA results. Mile High DNA Testing coordinates collection and chain-of-custody with a partner laboratory that maintain AABB accreditation."
    },
    {
      question: "Does USCIS require AABB-accredited partner laboratory?",
      answer:
        "Yes. USCIS requires relationship DNA testing to be performed by an AABB-accredited partner laboratory for immigration DNA cases and embassy processing. We partner with an AABB-accredited partner laboratory for legal and immigration DNA testing."
    },
    {
      question: "Will my results be accepted for court or immigration?",
      answer:
        "When your DNA test follows verified identity procedures and documented chain-of-custody standards and is performed by an AABB-accredited partner laboratory, the results can meet the requirements used by courts, USCIS, and federal agencies."
    }
  ];

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Legal & Immigration DNA Testing in Denver | AABB partner laboratory | Mile High DNA</title>
        <meta
          name="description"
          content="Mile High DNA Testing is not AABB accredited. We coordinate legal and immigration DNA testing in Denver with AABB-accredited partner laboratory chain-of-custody, and court-ready documentation."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/aabb-accredited-dna-testing-denver" />
        <meta property="og:title" content="Legal & Immigration DNA Testing in Denver | partner laboratory | Mile High DNA" />
        <meta
          property="og:description"
          content="Independent DNA testing company in Denver. Legal and immigration testing is performed by AABB-accredited partner laboratory."
        />
        <meta property="og:url" content="https://milehighdnatesting.com/aabb-accredited-dna-testing-denver" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Legal & Immigration DNA Testing in Denver | Mile High DNA" />
        <meta
          name="twitter:description"
          content="We partner with an AABB-accredited partner laboratory for legal and immigration DNA testing."
        />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Legal & Immigration DNA Testing in Denver
          </h1>
          <p className="text-lg text-blue-100 font-medium mb-4">
            Court-admissible DNA testing requires strict identity verification, documented chain-of-custody procedures, and analysis by an AABB-accredited partner laboratory.
          </p>
          <p className="text-white leading-relaxed mb-4">{MH_NOT_AABB_LONG}</p>
        </div>
      </section>

      {/* What Is AABB Accreditation? */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Is AABB Accreditation?</h2>
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
            This oversight helps ensure that relationship DNA testing results from accredited laboratories remain scientifically reliable and legally defensible. Accreditation applies to the laboratory, not to a specimen collection company or an at-home kit product.
          </p>
        </div>
      </section>

      {/* Why Courts Require AABB Partner-Laboratory Testing */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Courts Require AABB Partner-Laboratory Testing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Family courts require strict documentation procedures when DNA results are used as legal evidence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            An AABB-accredited partner laboratory follows validated testing procedures and chain-of-custody protocols designed to ensure:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
            <li>verified participant identification</li>
            <li>documented sample collection</li>
            <li>controlled laboratory analysis</li>
            <li>certified reporting procedures</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These safeguards allow DNA testing results to meet court-admissibility standards when testing is performed by an accredited partner laboratory.
          </p>
        </div>
      </section>

      {/* Why USCIS Requires AABB Partner-Laboratory Testing */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why USCIS Requires AABB Partner-Laboratory Testing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The United States Citizenship and Immigration Services (USCIS) requires relationship DNA testing to be performed by an AABB-accredited partner laboratory when DNA evidence is used in immigration cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These requirements help ensure that immigration DNA testing results meet consistent scientific and documentation standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In many cases, U.S. embassies and consulates also require AABB accreditation for family relationship DNA testing.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">{MH_LEGAL_IMMIGRATION_SHORT}</p>
        </div>
      </section>

      {/* Chain-of-Custody DNA Testing Procedures */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Chain-of-Custody DNA Testing Procedures</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Legal and immigration DNA testing must follow documented chain-of-custody procedures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chain-of-custody ensures the identity of each participant is verified and that samples are handled securely from collection through laboratory analysis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">Standard procedures include:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
            <li>government-issued photo identification verification</li>
            <li>certified DNA sample collection</li>
            <li>sealed specimen packaging</li>
            <li>documented transfer to the laboratory</li>
            <li>controlled laboratory processing</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These procedures protect the integrity of the testing process and help ensure results can be used for official purposes when processed by an accredited partner laboratory.
          </p>
        </div>
      </section>

      {/* We Specialize in Legal and Immigration DNA Testing */}
      <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Legal and Immigration DNA Testing We Coordinate</h2>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
            <li>
              <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">
                Legal paternity testing
              </Link>{" "}
              (partner laboratory analysis where AABB applies)
            </li>
            <li>
              <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:underline">
                Immigration DNA testing
              </Link>{" "}
              (AABB-accredited partner laboratory)
            </li>
            <li>
              <Link to="/services/postmortem-paternity-testing" className="text-blue-600 hover:underline">
                Court-admissible relationship testing
              </Link>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            {MH_LEGAL_IMMIGRATION_SHORT} Chain-of-custody procedures apply when required for court or immigration use.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-blue-200 pl-4">{MH_NOT_AABB_LONG}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-900 pr-4">Q: {faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
          <p className="text-white mb-6">Need a legal or immigration DNA test in Denver? Schedule an appointment with our team.</p>
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
