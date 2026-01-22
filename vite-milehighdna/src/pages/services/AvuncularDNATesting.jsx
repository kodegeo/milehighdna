import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AvuncularDNATesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Avuncular DNA Testing in Denver | Aunt/Uncle DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Avuncular DNA testing examines biological relationships through an aunt or uncle when direct parent testing is not possible. Used for extended family relationships in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="avuncular DNA testing Denver, aunt uncle DNA test, extended family DNA test Colorado, indirect paternity testing"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/avuncular-dna-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Avuncular DNA Testing in Denver | Aunt/Uncle DNA Test" />
        <meta property="og:description" content="Avuncular DNA testing examines biological relationships through an aunt or uncle when direct parent testing is not possible." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/avuncular-dna-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avuncular DNA Testing in Denver" />
        <meta name="twitter:description" content="DNA testing to establish relationships through aunt or uncle." />
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
                "name": "Avuncular DNA Testing",
                "item": "https://milehighdnatesting.com/services/avuncular-dna-testing"
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
                "name": "What is avuncular DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Avuncular DNA testing examines biological relationships through an aunt or uncle when direct parent testing is not possible. This method is used to evaluate extended family relationships and provide clarity in complex family situations."
                }
              },
              {
                "@type": "Question",
                "name": "When is avuncular testing used instead of paternity testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Avuncular testing is used when a parent is unavailable, deceased, or unwilling to participate in testing. It provides an indirect way to establish biological relationships through aunt or uncle DNA analysis."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is avuncular DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Avuncular DNA testing provides statistically reliable results when performed by an accredited laboratory. The test analyzes genetic markers to determine the probability of an avuncular relationship, though results may be more conclusive when both aunt and uncle participate."
                }
              },
              {
                "@type": "Question",
                "name": "Can avuncular test results be used in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Legal avuncular testing that follows proper chain-of-custody procedures can be used in court. Non-legal avuncular testing provides results but is not court-admissible."
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
            Avuncular DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of avuncular DNA testing, including when it is appropriate,
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
                Avuncular DNA testing is designed for situations where a biological relationship needs to be established through an aunt or uncle when direct parent testing is not possible. This type of DNA test provides an indirect method to verify family relationships through genetic analysis. Avuncular testing involves DNA testing between a child and an aunt or uncle to establish biological relationships.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If you need to establish a relationship and direct parent testing is not possible, this is an appropriate test.
              </p>
            </section>

            {/* When Avuncular DNA Testing Is Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Avuncular DNA Testing Is Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Avuncular DNA testing is commonly used when:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>A parent is unavailable, deceased, or unwilling to participate</li>
                <li>Extended family relationships need to be evaluated</li>
                <li>Legal cases require indirect relationship verification</li>
                <li>Family verification is needed for personal knowledge</li>
                <li>Immigration cases require extended family relationship proof</li>
                <li>Complex family situations need clarification</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This testing option is used when direct parent-child testing is not feasible.
              </p>
            </section>

            {/* When Avuncular DNA Testing Is Not Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Avuncular DNA Testing Is Not Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Avuncular testing may not be necessary if:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>A parent is available and willing to participate in direct paternity or maternity testing</li>
                <li>Direct parent-child testing would provide clearer results</li>
                <li>The relationship in question is not through an aunt or uncle</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                In these cases, direct paternity or maternity testing may be more appropriate and conclusive.
              </p>
            </section>

            {/* How Avuncular DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Avuncular DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Avuncular DNA testing follows an indirect genetic analysis process:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>DNA samples are collected from the child and aunt or uncle</li>
                <li>Genetic markers are analyzed and compared</li>
                <li>Statistical analysis determines the probability of an avuncular relationship</li>
                <li>Results indicate whether a biological relationship exists</li>
                <li>Laboratory analysis is performed by an accredited facility</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This process allows relationship determination when direct parent testing is not available. Testing both aunt and uncle typically yields more conclusive results.
              </p>
            </section>

            {/* Common Situations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Common Situations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Avuncular testing is commonly requested when a parent is unavailable and relationships need verification, when legal cases require indirect relationship proof, when immigration cases need extended family documentation, or when complex family situations need clarification for personal knowledge.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Avuncular DNA testing provides statistically reliable results when performed by an accredited laboratory. Results indicate the probability of an avuncular relationship and include statistical analysis. Legal avuncular testing includes documentation suitable for court use, while non-legal testing provides results for personal knowledge. Testing both aunt and uncle typically yields more conclusive results than testing a single relative.
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
                  What is avuncular DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Avuncular DNA testing examines biological relationships through an aunt or uncle when direct parent testing is not possible. This method is used to evaluate extended family relationships and provide clarity in complex family situations.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  When is avuncular testing used instead of paternity testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Avuncular testing is used when a parent is unavailable, deceased, or unwilling to participate in testing. It provides an indirect way to establish biological relationships through aunt or uncle DNA analysis.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How accurate is avuncular DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Avuncular DNA testing provides statistically reliable results when performed by an accredited laboratory. The test analyzes genetic markers to determine the probability of an avuncular relationship, though results may be more conclusive when both aunt and uncle participate.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can avuncular test results be used in court?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Legal avuncular testing that follows proper chain-of-custody procedures can be used in court. Non-legal avuncular testing provides results but is not court-admissible.
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
              <Link to="/services/siblingship-testing" className="underline">
                Siblingship Testing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AvuncularDNATesting;
