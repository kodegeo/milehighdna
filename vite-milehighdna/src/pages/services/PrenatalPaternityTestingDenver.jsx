import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PrenatalImage from "../../assets/images/prenatal-3.png";

const PrenatalPaternityTestingDenver = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const cityName = "Denver";
  const serviceName = "Prenatal Paternity Testing";

  const faqs = [
    {
      question: "Is prenatal paternity testing safe during pregnancy?",
      answer: "Yes. Non-invasive prenatal paternity testing (NIPP) is completely safe for both the mother and baby. It requires only a blood draw from the mother and a cheek swab from the alleged father—no risk to the pregnancy."
    },
    {
      question: "How early can prenatal DNA testing be done?",
      answer: "Prenatal paternity testing can typically be performed as early as 7-8 weeks into pregnancy. The test analyzes cell-free DNA from the mother's blood sample, making it safe and accurate throughout pregnancy."
    },
    {
      question: "Is prenatal paternity testing legal or court-admissible?",
      answer: "Prenatal paternity testing can be performed as either a legal or non-legal test. Legal prenatal tests follow chain-of-custody procedures and are court-admissible. Non-legal tests provide accurate results for personal knowledge only."
    },
    {
      question: "How long do prenatal paternity test results take in Denver?",
      answer: "Prenatal paternity test results in Denver are typically available within 3-5 business days after samples reach the laboratory. Rush processing options may be available for faster turnaround when needed."
    },
    {
      question: "Do both parents need to be present for a prenatal paternity test in Denver?",
      answer: "For prenatal paternity testing in Denver, the mother provides a blood sample and the alleged father provides a cheek swab. Both parties must be present for legal tests to verify identity. For non-legal tests, samples can be collected at different times if needed."
    },
    {
      question: "Where can I get prenatal paternity testing in Denver?",
      answer: "Prenatal paternity testing is available at authorized collection sites in Denver. The mother's blood draw is performed by a medical professional, and the alleged father's sample is collected via cheek swab at the same or a separate appointment."
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Prenatal Paternity Testing in Denver, CO | DNA Testing</title>

        <meta
          name="description"
          content="Non-invasive prenatal paternity testing available in Denver, Colorado. Safe DNA testing during pregnancy with accurate results."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/services/prenatal-paternity-testing-denver"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Prenatal Paternity Testing in Denver, CO | DNA Testing" />
        <meta
          property="og:description"
          content="Non-invasive prenatal paternity testing available in Denver, Colorado. Safe DNA testing during pregnancy with accurate results."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/services/prenatal-paternity-testing-denver"
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
              "description": `Non-invasive prenatal paternity testing services available in ${cityName}, Colorado. Safe DNA testing during pregnancy with accurate results.`,
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
              "serviceType": "Prenatal Paternity DNA Testing"
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
                Non-invasive prenatal paternity testing is available in {cityName}, Colorado. Safe DNA testing during pregnancy with accurate results—no risk to you or your baby.
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
                  src={PrenatalImage}
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
              What is Prenatal Paternity Testing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prenatal paternity testing allows you to establish paternity before your baby is born using safe, non-invasive methods.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Non-Invasive Prenatal Paternity Testing (NIPP)
              </h3>
              <p className="text-gray-600 mb-3">
                Prenatal paternity testing uses non-invasive methods to determine paternity during pregnancy. The test analyzes cell-free DNA from the mother's blood sample, which contains genetic material from both the mother and the developing baby.
              </p>
              <p className="text-gray-600">
                This method requires only a simple blood draw from the mother and a cheek swab from the alleged father. There is no risk to the pregnancy, making it a safe option for establishing paternity early.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Who It's For and When It's Used
              </h3>
              <p className="text-gray-600">
                Prenatal paternity testing is for expectant mothers and alleged fathers who want to establish paternity before birth. It can be performed as early as 7-8 weeks into pregnancy and is available as either a legal (court-admissible) or non-legal (peace of mind) test depending on your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Prenatal Paternity Testing Works in Denver */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Prenatal Paternity Testing Works in {cityName}
            </h2>
            <p className="text-lg text-gray-600">
              The process is simple, safe, and professional.
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
                    Book an appointment at a collection site in or near {cityName}. For legal tests, both parties must be present for identity verification.
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
                    Maternal Blood Draw
                  </h3>
                  <p className="text-gray-600">
                    A medical professional performs a simple blood draw from the mother at the {cityName} collection site. This sample contains cell-free DNA from both the mother and the developing baby.
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
                    Alleged Father Sample Collection
                  </h3>
                  <p className="text-gray-600">
                    The alleged father provides a cheek swab sample at the same appointment or a separate appointment. For legal tests, identity verification is required.
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
                    Laboratory Analysis
                  </h3>
                  <p className="text-gray-600">
                    Samples are sent to an AABB-accredited laboratory for analysis. The lab analyzes the cell-free DNA from the mother's blood sample to determine paternity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Results Delivery
                  </h3>
                  <p className="text-gray-600">
                    Results are typically available within 3-5 business days and are delivered securely. Legal test results are court-admissible when proper chain-of-custody procedures are followed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Accuracy */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Safety & Accuracy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prenatal paternity testing is safe for both mother and baby, with highly accurate results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Safety During Pregnancy
              </h3>
              <p className="text-gray-600">
                Non-invasive prenatal paternity testing is completely safe during pregnancy. The test requires only a blood draw from the mother and a cheek swab from the alleged father. There is no risk to the developing baby, and the procedure does not interfere with the pregnancy in any way.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Accuracy
              </h3>
              <p className="text-gray-600">
                Prenatal paternity testing provides highly accurate results. The test analyzes cell-free DNA from the mother's blood sample, which contains genetic material from both parents. Results are processed at AABB-accredited laboratories using advanced DNA analysis methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Availability in Denver */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Prenatal Paternity Testing Availability in {cityName}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Non-invasive prenatal paternity testing is available at collection sites in and around {cityName}, Colorado.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <p className="text-gray-600 mb-6">
              Prenatal paternity testing is available at authorized collection sites throughout {cityName} and surrounding areas. The mother's blood draw is performed by a medical professional, and appointments can be scheduled to accommodate your needs. Testing is available as both legal and non-legal options.
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
              {cityName} Prenatal Paternity Testing FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about prenatal paternity testing in {cityName}.
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
              Schedule a Prenatal Paternity Test in {cityName}
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Contact us to schedule your prenatal paternity testing appointment in {cityName}, Colorado. Our team will guide you through the process and answer any questions about safe, non-invasive testing during pregnancy.
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

export default PrenatalPaternityTestingDenver;
