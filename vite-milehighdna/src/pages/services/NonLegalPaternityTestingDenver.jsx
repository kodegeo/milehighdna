import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import NonLegalDNAImage from "../../assets/images/non-legal-dna-test.png";

const NonLegalPaternityTestingDenver = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const cityName = "Denver";
  const serviceName = "Non-Legal Paternity Testing";

  const faqs = [
    {
      question: "Can non-legal paternity test results be used in court?",
      answer: "No. Non-legal paternity test results cannot be used in court, for child support cases, custody proceedings, or immigration applications. These tests are designed for personal knowledge only. If you need court-admissible results, you must choose legal paternity testing."
    },
    {
      question: "How long do non-legal paternity test results take in Denver?",
      answer: "Non-legal paternity test results in Denver are typically available within 3-5 business days after samples reach the laboratory. The process is often faster than legal testing since there are no chain-of-custody documentation requirements."
    },
    {
      question: "Is non-legal paternity testing confidential in Denver?",
      answer: "Yes. Non-legal paternity testing in Denver is completely confidential. Your results are private and shared only with you. The testing process respects your privacy, and no information is shared with courts or government agencies."
    },
    {
      question: "Do all parties need to attend the same appointment in Denver?",
      answer: "For non-legal paternity testing in Denver, parties do not need to attend the same appointment. Samples can be collected at different times and locations, providing flexibility and convenience. However, the alleged father and child must both provide samples."
    },
    {
      question: "What's the difference between legal and non-legal paternity testing?",
      answer: "Legal paternity testing requires identity verification, chain-of-custody procedures, and professional collection—results are court-admissible. Non-legal testing provides the same scientific accuracy but without formal documentation, making it faster and more convenient for personal knowledge only."
    },
    {
      question: "Where can I get non-legal paternity testing in Denver?",
      answer: "Non-legal paternity testing is available at collection sites throughout Denver. Some locations may offer at-home collection kits for added convenience. Contact us to find the most convenient option for your needs."
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Non-Legal Paternity Testing in Denver, CO | Peace of Mind DNA Test</title>

        <meta
          name="description"
          content="Private, non-legal paternity testing available in Denver, Colorado. Fast and confidential DNA testing for personal knowledge."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/services/non-legal-paternity-testing-denver"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Non-Legal Paternity Testing in Denver, CO | Peace of Mind DNA Test" />
        <meta
          property="og:description"
          content="Private, non-legal paternity testing available in Denver, Colorado. Fast and confidential DNA testing for personal knowledge."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/services/non-legal-paternity-testing-denver"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />

        {/* Schema: Service + FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `${serviceName} in ${cityName}, Colorado`,
              "description": `Private, non-legal paternity testing services available in ${cityName}, Colorado. Fast and confidential DNA testing for personal knowledge.`,
              "provider": {
                "@type": "Organization",
                "name": "Mile High DNA Testing",
                "url": "https://milehighdnatesting.com"
              },
              "areaServed": {
                "@type": "City",
                "name": cityName,
                "addressRegion": "CO",
                "addressCountry": "US"
              },
              "serviceType": "Non-Legal Paternity DNA Testing"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                {serviceName} in {cityName}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Private, non-legal paternity testing is available in {cityName}, Colorado. Fast, confidential DNA testing for personal knowledge and peace of mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/appointments"
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Schedule Appointment
                </Link>
                <Link
                  to="/locations/denver"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View {cityName} Locations
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 w-80 h-80 flex items-center justify-center">
                <img
                  src={NonLegalDNAImage}
                  alt={`${serviceName} in ${cityName}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What is Non-Legal Paternity Testing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Non-legal paternity testing provides accurate results for personal knowledge without the formalities required for court use.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Private Testing for Personal Knowledge
              </h3>
              <p className="text-gray-600 mb-3">
                Non-legal paternity testing, also known as peace of mind testing, provides accurate DNA results for personal use. The test uses the same scientific methods as legal testing but without the formal documentation and chain-of-custody procedures required for court use.
              </p>
              <p className="text-gray-600">
                Results are completely confidential and are not shared with courts, government agencies, or any third parties. This makes non-legal testing ideal when you need answers for personal reasons without legal proceedings.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                Important: Results Are NOT Court-Admissible
              </h3>
              <p className="text-yellow-700">
                Non-legal paternity test results cannot be used in court, for child support cases, custody proceedings, or immigration applications. If you need results for any legal purpose, you must choose legal paternity testing instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Non-Legal Paternity Testing Works in Denver */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Non-Legal Paternity Testing Works in {cityName}
            </h2>
            <p className="text-lg text-gray-600">
              The process is simple, fast, and convenient.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Schedule Your Appointment
                  </h3>
                  <p className="text-gray-600">
                    Book an appointment at a collection site in or near {cityName}. For non-legal testing, parties do not need to attend the same appointment, providing flexibility and convenience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Sample Collection
                  </h3>
                  <p className="text-gray-600">
                    Simple cheek swab samples are collected from the alleged father and child. No identity verification is required, and samples can be collected at different times and locations if needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Laboratory Analysis
                  </h3>
                  <p className="text-gray-600">
                    Samples are sent to an AABB-accredited laboratory for analysis. The same scientific methods used in legal testing ensure accurate results.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Results Delivery
                  </h3>
                  <p className="text-gray-600">
                    Results are typically available within 3-5 business days and are delivered securely and confidentially. Results are for personal use only and cannot be used in legal proceedings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Test Is For */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Who This Test Is For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Non-legal paternity testing is ideal for personal knowledge and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Personal Confirmation
                  </h3>
                  <p className="text-gray-600">
                    When you need to confirm paternity for personal reasons without legal proceedings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Family Knowledge
                  </h3>
                  <p className="text-gray-600">
                    For families seeking clarity about biological relationships for personal understanding.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Curiosity or Peace of Mind
                  </h3>
                  <p className="text-gray-600">
                    When you want answers quickly and privately without the formalities of legal testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Faster, Simpler Process
                  </h3>
                  <p className="text-gray-600">
                    Ideal when you need results quickly without identity verification or chain-of-custody requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700">
              <strong>Note:</strong> If you need results for child support, custody cases, or any legal proceeding, you must choose legal paternity testing instead. Non-legal results are not accepted by courts or government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Local Availability in Denver */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Non-Legal Paternity Testing Availability in {cityName}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Private, non-legal paternity testing is available at collection sites in and around {cityName}, Colorado.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <p className="text-gray-600 mb-6">
              Non-legal paternity testing is available at collection sites throughout {cityName} and surrounding areas. The process is appointment-based, and some locations may offer at-home collection kits for added convenience. Testing is completely confidential and designed for personal use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/locations/denver"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View {cityName} Collection Sites
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/dna-testing-colorado"
                className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Learn About DNA Testing in Colorado
              </Link>
              <Link
                to="/paternity-test-colorado"
                className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Learn About Paternity Testing in Colorado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {cityName} Non-Legal Paternity Testing FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about non-legal paternity testing in {cityName}.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-800 pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="pt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Schedule a Non-Legal Paternity Test in {cityName}
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Contact us to schedule your non-legal paternity testing appointment in {cityName}, Colorado. Our team will help you find the most convenient option for fast, confidential results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Appointment
              </Link>
              <Link
                to="/locations/denver"
                className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                View {cityName} Locations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NonLegalPaternityTestingDenver;
