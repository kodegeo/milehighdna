import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GrandparentageTesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Grandparentage DNA Testing in Denver | Grandparent DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Grandparentage DNA testing helps establish biological relationships between grandparents and grandchildren when a parent is unavailable. Used for legal cases, family verification, and personal knowledge in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="grandparentage DNA testing Denver, grandparent DNA test, grandparent relationship test Colorado, indirect paternity testing"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/grandparentage-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Grandparentage DNA Testing in Denver | Grandparent DNA Test" />
        <meta property="og:description" content="Grandparentage DNA testing establishes biological relationships between grandparents and grandchildren when a parent is unavailable." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/grandparentage-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grandparentage DNA Testing in Denver" />
        <meta name="twitter:description" content="DNA testing to establish grandparent-grandchild relationships." />
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
                "name": "Grandparentage DNA Testing",
                "item": "https://milehighdnatesting.com/services/grandparentage-testing"
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
                "name": "What is grandparentage DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Grandparentage DNA testing helps establish a biological relationship between grandparents and grandchildren when a parent is unavailable for testing. This indirect testing method analyzes genetic markers to determine the probability of a grandparent-grandchild relationship."
                }
              },
              {
                "@type": "Question",
                "name": "When is grandparentage testing used instead of paternity testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Grandparentage testing is used when a parent is unavailable, deceased, or unwilling to participate in testing. It provides an indirect way to establish biological relationships through grandparent DNA analysis."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is grandparentage DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Grandparentage DNA testing provides statistically reliable results when performed by an accredited laboratory. The test analyzes genetic markers to determine the probability of a grandparent-grandchild relationship, though results may be more conclusive when both grandparents participate."
                }
              },
              {
                "@type": "Question",
                "name": "Can grandparentage test results be used in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Legal grandparentage testing that follows proper chain-of-custody procedures can be used in court. Non-legal grandparentage testing provides accurate results but is not court-admissible."
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
            Grandparentage DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of grandparentage DNA testing, including when it is appropriate,
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
                Grandparentage DNA testing is designed for situations where a biological relationship between grandparents and grandchildren needs to be established when a parent is unavailable for testing. This type of DNA test provides an indirect method to verify family relationships through genetic analysis. Grandparent DNA testing for paternity establishment is commonly used when direct parent testing is not possible.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If you need to establish a grandparent-grandchild relationship and direct parent testing is not possible, this is the appropriate test.
              </p>
            </section>

            {/* When Grandparentage Testing Is Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Grandparentage Testing Is Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Grandparentage DNA testing is commonly used when:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>A parent is unavailable, deceased, or unwilling to participate</li>
                <li>Legal cases require grandparent-grandchild relationship verification</li>
                <li>Family verification is needed for personal knowledge</li>
                <li>Immigration cases require extended family relationship proof</li>
                <li>Inheritance or estate matters need relationship confirmation</li>
                <li>Extended family relationships need clarification</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This testing option is used when direct parent-child testing is not feasible.
              </p>
            </section>

            {/* When Grandparentage Testing Is Not Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Grandparentage Testing Is Not Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Grandparentage testing may not be necessary if:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>A parent is available and willing to participate in direct paternity or maternity testing</li>
                <li>Direct parent-child testing would provide clearer results</li>
                <li>The relationship in question is not between grandparents and grandchildren</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                In these cases, direct paternity or maternity testing may be more appropriate and conclusive.
              </p>
            </section>

            {/* How Grandparentage DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Grandparentage DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Grandparentage DNA testing follows an indirect genetic analysis process:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>DNA samples are collected from the grandchild and grandparent(s)</li>
                <li>Genetic markers are analyzed and compared</li>
                <li>Statistical analysis determines the probability of a grandparent-grandchild relationship</li>
                <li>Results indicate whether a biological relationship exists</li>
                <li>Laboratory analysis is performed by an accredited facility</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This process allows relationship determination when direct parent testing is not available. Testing both grandparents typically yields more conclusive results.
              </p>
            </section>

            {/* Common Situations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Common Situations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Grandparentage testing is commonly requested when a parent is deceased and relationships need verification, when legal cases require grandparent-grandchild relationship proof, when immigration cases need extended family documentation, when inheritance matters depend on relationship confirmation, or when family relationships need clarification for personal knowledge.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Grandparentage DNA testing provides statistically reliable results when performed by an accredited laboratory. Results indicate the probability of a grandparent-grandchild relationship and include statistical analysis. Legal grandparentage testing includes documentation suitable for court use, while non-legal testing provides results for personal knowledge. Testing both grandparents typically provides more conclusive results than testing a single grandparent.
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
                  What is grandparentage DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Grandparentage DNA testing helps establish a biological relationship between grandparents and grandchildren when a parent is unavailable for testing. This indirect testing method analyzes genetic markers to determine the probability of a grandparent-grandchild relationship.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  When is grandparentage testing used instead of paternity testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Grandparentage testing is used when a parent is unavailable, deceased, or unwilling to participate in testing. It provides an indirect way to establish biological relationships through grandparent DNA analysis.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How accurate is grandparentage DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Grandparentage DNA testing provides statistically reliable results when performed by an accredited laboratory. The test analyzes genetic markers to determine the probability of a grandparent-grandchild relationship, though results may be more conclusive when both grandparents participate.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can grandparentage test results be used in court?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Legal grandparentage testing that follows proper chain-of-custody procedures can be used in court. Non-legal grandparentage testing provides results but is not court-admissible.
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

export default GrandparentageTesting;
