import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DiscreetDNATesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Discreet DNA Testing in Denver | Confidential DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Discreet DNA testing offers confidential DNA analysis for sensitive personal situations. Testing using personal items or submitted samples for private, non-legal use in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="discreet DNA testing Denver, confidential DNA test, private DNA testing Colorado, anonymous DNA testing"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/discreet-dna-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Discreet DNA Testing in Denver | Confidential DNA Test" />
        <meta property="og:description" content="Discreet DNA testing offers confidential DNA analysis for sensitive personal situations using personal items or submitted samples." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/discreet-dna-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discreet DNA Testing in Denver" />
        <meta name="twitter:description" content="Confidential DNA analysis for sensitive personal situations." />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://milehighdnatesting.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://milehighdnatesting.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Discreet DNA Testing",
                "item": "https://milehighdnatesting.com/services/discreet-dna-testing"
              }
            ]
          })}
        </script>

        {/* FAQ JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is discreet DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Discreet DNA testing offers confidential DNA analysis for sensitive personal situations. This option allows testing using personal items or submitted samples and is intended for private, non-legal use with careful handling and privacy-focused processes."
                }
              },
              {
                "@type": "Question",
                "name": "Can discreet DNA test results be used in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Discreet DNA testing is designed for private, non-legal use. Results are not court-admissible because they do not follow the strict chain-of-custody and identification verification procedures required for legal use."
                }
              },
              {
                "@type": "Question",
                "name": "How private is discreet DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Discreet DNA testing is conducted with strict confidentiality. Results are provided directly to the individuals tested, and the process is designed to respect privacy and discretion."
                }
              },
              {
                "@type": "Question",
                "name": "What types of samples can be used for discreet DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Discreet DNA testing may use personal items or submitted samples depending on the specific situation. The testing process is designed to accommodate various sample types while maintaining confidentiality."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Header Section */}
      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">
            Discreet DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of discreet DNA testing, including when it is appropriate,
            how it works, and how to determine whether this is the right test for your situation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Who This Test Is For */}
            <section className="mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Discreet DNA testing is designed for individuals who need confidential DNA analysis for sensitive personal situations. This type of DNA test allows discreet DNA testing using personal items or submitted samples and is intended for private, non-legal use with careful handling and privacy-focused processes.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If you need answers for personal knowledge in a sensitive situation requiring maximum privacy, this is an appropriate testing option.
              </p>
            </section>

            {/* When Discreet DNA Testing Is Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Discreet DNA Testing Is Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Discreet DNA testing is commonly chosen for:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Sensitive personal situations requiring maximum privacy</li>
                <li>Testing using personal items or submitted samples</li>
                <li>Private, non-legal use situations</li>
                <li>Confidential handling requirements</li>
                <li>Situations where standard testing procedures are not suitable</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This testing option maintains privacy and avoids the formal procedures required for legal testing.
              </p>
            </section>

            {/* When Discreet DNA Testing Is Not Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Discreet DNA Testing Is Not Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Discreet DNA testing is not suitable if results are needed for:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Court cases or legal proceedings</li>
                <li>Child support or custody disputes</li>
                <li>Government agency requirements</li>
                <li>Immigration or visa applications</li>
                <li>Any situation requiring court-admissible documentation</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                In these cases, legal DNA testing with proper chain-of-custody procedures is required.
              </p>
            </section>

            {/* How Discreet DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Discreet DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Discreet DNA testing follows a privacy-focused process:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Sample collection can use personal items or submitted samples</li>
                <li>Confidential handling throughout the process</li>
                <li>Samples are analyzed by an accredited laboratory</li>
                <li>Results are provided directly to the individuals tested</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This process maintains privacy and avoids the formal documentation requirements of legal testing.
              </p>
            </section>

            {/* Common Situations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Common Situations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Discreet DNA testing is commonly requested when sensitive personal situations require maximum privacy, when testing using personal items is needed, when confidential handling is a priority, or when private, non-legal answers are needed without formal documentation requirements.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Discreet DNA testing provides statistically reliable results when performed by an accredited laboratory. Results confirm or exclude biological relationships and are suitable for personal knowledge. These results are not court-admissible but provide reliable answers for private use with strict confidentiality.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A3C59] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  What is discreet DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discreet DNA testing offers confidential DNA analysis for sensitive personal situations. This option allows testing using personal items or submitted samples and is intended for private, non-legal use with careful handling and privacy-focused processes.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can discreet DNA test results be used in court?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  No. Discreet DNA testing is designed for private, non-legal use. Results are not court-admissible because they do not follow the strict chain-of-custody and identification verification procedures required for legal use.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How private is discreet DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discreet DNA testing is conducted with strict confidentiality. Results are provided directly to the individuals tested, and the process is designed to respect privacy and discretion.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  What types of samples can be used for discreet DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discreet DNA testing may use personal items or submitted samples depending on the specific situation. The testing process is designed to accommodate various sample types while maintaining confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Step CTA */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Next Step
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Appointments for this DNA test are scheduled separately.
              </p>
              <Link
                to="/appointments"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View appointment options →
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DiscreetDNATesting;
