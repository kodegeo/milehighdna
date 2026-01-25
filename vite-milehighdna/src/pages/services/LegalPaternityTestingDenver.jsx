import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LegalDNAImage from "../../assets/images/dna-legal-document.png";

const LegalPaternityTestingDenver = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const cityName = "Denver";
  const serviceName = "Legal Paternity Testing";

  const faqs = [
    {
      question: `Is legal paternity testing available in ${cityName}, Colorado?`,
      answer: `Yes. Legal paternity testing is available in ${cityName} with professional sample collection, identity verification, and chain of custody procedures required for court-admissible results.`
    },
    {
      question: `How long do legal paternity test results take in ${cityName}?`,
      answer: `Legal paternity test results in ${cityName} are typically available within 3-5 business days after samples reach the AABB-accredited laboratory. Rush processing options may be available for faster turnaround.`
    },
    {
      question: `Where can I get a legal paternity test in ${cityName}?`,
      answer: `Legal paternity testing in ${cityName} is available at authorized collection sites throughout the city. All collection sites follow strict chain-of-custody procedures and require identity verification for court-admissible results.`
    },
    {
      question: `Are legal paternity test results from ${cityName} accepted by Colorado courts?`,
      answer: `Yes. Legal paternity test results from ${cityName} are accepted by Colorado family courts when proper chain-of-custody procedures are followed and samples are processed at an AABB-accredited laboratory.`
    },
    {
      question: `Do both parents need to be present for a legal paternity test in ${cityName}?`,
      answer: `For legal paternity testing in ${cityName}, the alleged father and child must be present for identity verification and sample collection. The mother's participation is optional but recommended for more accurate results.`
    },
    {
      question: `Can I use a legal paternity test from ${cityName} for child support cases?`,
      answer: `Yes. Legal paternity test results from ${cityName} can be used for child support cases in Colorado when the test follows proper chain-of-custody procedures and is performed at an AABB-accredited laboratory.`
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Legal Paternity Testing in Denver, Colorado | DNA Testing</title>

        <meta
          name="description"
          content={`Court-admissible legal paternity testing available in ${cityName}, Colorado. Professional sample collection, AABB-accredited laboratory analysis, and results accepted by Colorado courts and agencies.`}
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/services/legal-paternity-testing-denver"
        />

        {/* Open Graph */}
        <meta property="og:title" content={`Legal Paternity Testing in ${cityName}, Colorado | DNA Testing`} />
        <meta
          property="og:description"
          content={`Court-admissible legal paternity testing available in ${cityName}, Colorado with professional collection and AABB-accredited results.`}
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/services/legal-paternity-testing-denver"
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
              "description": `Court-admissible legal paternity testing services available in ${cityName}, Colorado with professional sample collection and AABB-accredited laboratory analysis.`,
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
              "serviceType": "Legal Paternity DNA Testing"
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
                Court-admissible legal paternity testing is available in {cityName}, Colorado with professional sample collection, identity verification, and AABB-accredited laboratory analysis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book-appointment"
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
                  src={LegalDNAImage}
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
              What is Legal Paternity Testing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Legal paternity testing provides court-admissible results for legal proceedings, child support cases, and custody matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                What It Is
              </h3>
              <p className="text-gray-600">
                Court-admissible DNA testing that follows strict chain-of-custody procedures with professional sample collection and identity verification.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Who It's For
              </h3>
              <p className="text-gray-600">
                Individuals who need paternity results for child support, custody cases, inheritance matters, or other legal proceedings in Colorado.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Why {cityName} Residents Need It
              </h3>
              <p className="text-gray-600">
                Colorado family courts require legal paternity testing with proper documentation for child support and custody cases. {cityName} residents can access these services locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How This Service Works in Denver */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Legal Paternity Testing Works in {cityName}
            </h2>
            <p className="text-lg text-gray-600">
              The process is straightforward and professional.
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
                    Book an appointment at a collection site in or near {cityName}. All parties must be present for identity verification.
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
                    A certified professional collects cheek swab samples with identity verification and chain-of-custody documentation at the {cityName} collection site.
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
                    Samples are sent to an AABB-accredited laboratory for analysis. Chain of custody is maintained throughout the process.
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
                    Results are typically available within 3-5 business days and are delivered securely. Results are court-admissible and can be used in legal proceedings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Availability */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Legal Paternity Testing Availability in {cityName}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional legal paternity testing services are available at collection sites in and around {cityName}, Colorado.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <p className="text-gray-600 mb-6">
              Legal paternity testing is available at authorized collection sites throughout {cityName}. All collection sites follow strict chain-of-custody procedures and require identity verification for court-admissible results.
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
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {cityName} Legal Paternity Testing FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about legal paternity testing in {cityName}.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
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
      <section className="py-12 px-6 md:px-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 border border-blue-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Schedule Legal Paternity Testing in {cityName}?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Contact us to schedule your appointment at a collection site in {cityName}, Colorado. Our team will guide you through the process and answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Appointment
              </Link>
              <Link
                to="/locations/denver"
                className="inline-flex items-center justify-center bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300"
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

export default LegalPaternityTestingDenver;
