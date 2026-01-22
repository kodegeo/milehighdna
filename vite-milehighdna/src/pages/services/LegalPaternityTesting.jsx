import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const LegalPaternityTesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Legal Paternity DNA Testing in Denver | Court-Admissible DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Legal paternity DNA testing for court-admissible proof of biological parenthood. Strict chain-of-custody procedures accepted by courts, government agencies, and legal authorities in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="legal paternity DNA testing Denver, court-admissible DNA test, legal paternity test Colorado, chain of custody DNA testing"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/legal-paternity-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Legal Paternity DNA Testing in Denver | Court-Admissible DNA Test" />
        <meta property="og:description" content="Legal paternity DNA testing for court-admissible proof of biological parenthood. Strict chain-of-custody procedures accepted by courts and government agencies." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/legal-paternity-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Legal Paternity DNA Testing in Denver" />
        <meta name="twitter:description" content="Court-admissible DNA testing with strict chain-of-custody procedures." />
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
                "name": "Legal Paternity DNA Testing",
                "item": "https://milehighdnatesting.com/services/legal-paternity-testing"
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
                "name": "Is legal paternity testing required for court cases?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Courts typically require DNA testing that follows documented chain-of-custody procedures."
                }
              },
              {
                "@type": "Question",
                "name": "Can legal paternity testing be done without the mother?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In some cases, yes. Requirements depend on the court or agency requesting the test."
                }
              },
              {
                "@type": "Question",
                "name": "How long does legal paternity testing take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Turnaround times vary, but results are typically available within a few business days after sample collection."
                }
              },
              {
                "@type": "Question",
                "name": "Is this test accepted for government or immigration use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Legal paternity testing may be accepted for certain government purposes. Immigration cases often require additional coordination."
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
            Legal Paternity DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of court-admissible paternity DNA testing, including when it is required,
            how it works, and how to determine whether it applies to your situation.
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
                Legal paternity DNA testing is designed for individuals who need court-admissible proof of biological parenthood. This type of DNA test follows strict chain-of-custody procedures and is accepted by courts, government agencies, and legal authorities. Denver court-admissible DNA testing follows Colorado legal paternity testing requirements for court use.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If verified DNA results are required for a legal matter, this is the appropriate test.
              </p>
            </section>

            {/* When Legal Paternity Testing Is Required */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Legal Paternity Testing Is Required
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Legal paternity DNA testing is commonly required for:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Child support cases</li>
                <li>Custody or visitation disputes</li>
                <li>Court orders or legal proceedings</li>
                <li>Birth certificate amendments</li>
                <li>Social Security or government benefits</li>
                <li>Legal or administrative documentation</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                At-home or non-legal DNA tests are typically not accepted in these situations.
              </p>
            </section>

            {/* When Legal Paternity Testing Is Not Required */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Legal Paternity Testing Is Not Required
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Legal paternity testing is not necessary if results are needed solely for:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Personal knowledge</li>
                <li>Family discussions</li>
                <li>Peace-of-mind confirmation</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                In these cases, a non-legal paternity DNA test may be sufficient.
              </p>
            </section>

            {/* How Legal Paternity DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Legal Paternity DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Legal paternity testing follows a controlled process to ensure accuracy and admissibility:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Sample collection is performed in person</li>
                <li>Government-issued identification is verified</li>
                <li>A strict chain of custody is maintained</li>
                <li>Samples are analyzed by an accredited laboratory</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This process meets requirements for results to be used in legal and official settings.
              </p>
            </section>

            {/* Common Situations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Common Situations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Legal paternity testing is commonly requested when a court mandates DNA confirmation, when parental rights or responsibilities must be established, when government agencies require certified results, or when legal disputes depend on verified parentage.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Legal paternity DNA testing provides statistically reliable results when performed under proper legal procedures. Results confirm or exclude biological parenthood and include documentation suitable for legal use.
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
                  Is legal paternity testing required for court cases?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Yes. Courts typically require DNA testing that follows documented chain-of-custody procedures.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can legal paternity testing be done without the mother?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  In some cases, yes. Requirements depend on the court or agency requesting the test.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How long does legal paternity testing take?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Turnaround times vary, but results are typically available within a few business days after sample collection.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Is this test accepted for government or immigration use?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Legal paternity testing may be accepted for certain government purposes. Immigration cases often require additional coordination.
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
              <Link to="/services/non-legal-paternity-testing" className="underline">
                Non-Legal Paternity Testing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPaternityTesting;
