import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NonLegalPaternityTesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Non-Legal Paternity DNA Testing in Denver | Peace of Mind DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Non-legal paternity DNA testing for personal knowledge and peace of mind. Private, confidential testing without court-admissible documentation requirements in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="non-legal paternity DNA testing Denver, peace of mind DNA test, private paternity test Colorado, confidential DNA testing"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/non-legal-paternity-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Non-Legal Paternity DNA Testing in Denver | Peace of Mind DNA Test" />
        <meta property="og:description" content="Non-legal paternity DNA testing for personal knowledge and peace of mind. Private, confidential testing without court documentation requirements." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/non-legal-paternity-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Non-Legal Paternity DNA Testing in Denver" />
        <meta name="twitter:description" content="Private, confidential paternity testing for personal knowledge." />
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
                "name": "Non-Legal Paternity DNA Testing",
                "item": "https://milehighdnatesting.com/services/non-legal-paternity-testing"
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
                "name": "What is the difference between legal and non-legal paternity testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-legal paternity testing is designed for personal knowledge and peace of mind without court-admissible documentation. Legal testing follows strict chain-of-custody procedures and is required for court cases or government matters."
                }
              },
              {
                "@type": "Question",
                "name": "Are non-legal paternity test results accurate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-legal paternity tests use the same laboratory analysis methods as legal tests and provide statistically reliable results. The difference is in the documentation and chain-of-custody procedures, not the accuracy of the DNA analysis."
                }
              },
              {
                "@type": "Question",
                "name": "Can non-legal paternity test results be used in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Non-legal paternity test results are not court-admissible because they do not follow the strict chain-of-custody and identification verification procedures required for legal use."
                }
              },
              {
                "@type": "Question",
                "name": "How private is non-legal paternity testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-legal paternity testing is conducted with strict confidentiality. Results are provided directly to the individuals tested, and the process is designed to respect privacy and discretion."
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
            Non-Legal Paternity DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of non-legal paternity DNA testing, including when it is appropriate,
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
                Non-legal paternity DNA testing is designed for individuals seeking personal confirmation of biological parenthood without the documentation or identification requirements associated with legal testing. This type of DNA test is used for personal knowledge and family clarity. This page covers non-legal paternity testing only; for court-admissible results, legal paternity testing is a separate category with different requirements.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If you need answers for personal reasons and do not require court-admissible documentation, this is the appropriate test.
              </p>
            </section>

            {/* When Non-Legal Paternity Testing Is Required */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Non-Legal Paternity Testing Is Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Non-legal paternity testing is commonly chosen for:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Personal knowledge and family clarity</li>
                <li>Peace-of-mind confirmation</li>
                <li>Private family discussions</li>
                <li>Situations where court documentation is not needed</li>
                <li>Confidential testing with privacy focus</li>
                <li>Early answers before legal proceedings</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This testing option maintains privacy and avoids the formal procedures required for legal testing.
              </p>
            </section>

            {/* When Non-Legal Paternity Testing Is Not Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Non-Legal Paternity Testing Is Not Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Non-legal paternity testing is not suitable if results are needed for:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Court cases or legal proceedings</li>
                <li>Child support or custody disputes</li>
                <li>Government agency requirements</li>
                <li>Birth certificate amendments</li>
                <li>Immigration or visa applications</li>
                <li>Any situation requiring court-admissible documentation</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                In these cases, legal paternity DNA testing with proper chain-of-custody procedures is required.
              </p>
            </section>

            {/* How Non-Legal Paternity DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Non-Legal Paternity DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Non-legal paternity testing follows a streamlined process designed for personal use:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Sample collection can be performed in person or through at-home kits</li>
                <li>Identification verification is simplified compared to legal testing</li>
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
                Non-legal paternity testing is commonly requested when individuals need personal confirmation before making family decisions, when privacy is a priority, when early answers are needed before potential legal proceedings, or when results are needed for family discussions without formal documentation requirements.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Non-legal paternity DNA testing provides statistically reliable results using the same laboratory analysis methods as legal tests. Results confirm or exclude biological parenthood and are suitable for personal knowledge and family clarity. These results are not court-admissible.
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
                  What is the difference between legal and non-legal paternity testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Non-legal paternity testing is used for personal knowledge without court-admissible documentation. Legal testing follows strict chain-of-custody procedures and is required for court cases or government matters.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Are non-legal paternity test results accurate?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Non-legal paternity tests use the same laboratory analysis methods as legal tests and provide statistically reliable results. The difference is in the documentation and chain-of-custody procedures, not the accuracy of the DNA analysis.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can non-legal paternity test results be used in court?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  No. Non-legal paternity test results are not court-admissible because they do not follow the strict chain-of-custody and identification verification procedures required for legal use.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How private is non-legal paternity testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Non-legal paternity testing is conducted with confidentiality. Results are provided directly to the individuals tested.
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
            <p className="text-sm text-gray-600 mt-6">
              Related service:{" "}
              <Link to="/services/legal-paternity-testing" className="underline">
                Legal Paternity Testing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NonLegalPaternityTesting;
