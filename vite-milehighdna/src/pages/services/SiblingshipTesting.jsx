import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SiblingshipTesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Siblingship DNA Testing in Denver | Full or Half Sibling DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Siblingship DNA testing determines whether individuals are full or half siblings through genetic analysis. Used when one or both parents are unavailable for testing in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="siblingship DNA testing Denver, sibling DNA test, full sibling test Colorado, half sibling DNA testing"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/siblingship-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Siblingship DNA Testing in Denver | Full or Half Sibling DNA Test" />
        <meta property="og:description" content="Siblingship DNA testing determines whether individuals are full or half siblings through genetic analysis when parents are unavailable." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/siblingship-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siblingship DNA Testing in Denver" />
        <meta name="twitter:description" content="DNA testing to determine full or half sibling relationships." />
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
                "name": "Siblingship DNA Testing",
                "item": "https://milehighdnatesting.com/services/siblingship-testing"
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
                "name": "What is siblingship DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Siblingship DNA testing determines whether two or more individuals are full siblings (sharing both parents) or half siblings (sharing one parent) through genetic analysis. This testing is commonly used when one or both parents are unavailable for direct comparison."
                }
              },
              {
                "@type": "Question",
                "name": "When is siblingship testing used instead of paternity testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Siblingship testing is used when a parent is unavailable, deceased, or unwilling to participate in testing. It can also be used to establish relationships between siblings when paternity or maternity is in question."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is siblingship DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Siblingship DNA testing provides statistically reliable results when performed by an accredited laboratory. The test analyzes genetic markers to determine the probability of a full or half sibling relationship."
                }
              },
              {
                "@type": "Question",
                "name": "Can siblingship test results be used in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Legal siblingship testing that follows proper chain-of-custody procedures can be used in court. Non-legal siblingship testing provides accurate results but is not court-admissible."
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
            Siblingship DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of siblingship DNA testing, including when it is appropriate,
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
                Siblingship DNA testing is designed for individuals who need to determine whether they are full or half siblings when one or both parents are unavailable for testing. This type of DNA test is used as an alternative to paternity testing when a parent is unavailable, analyzing genetic markers to establish sibling relationships through indirect comparison.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If you need to establish a sibling relationship and direct parent testing is not possible, this is the appropriate test.
              </p>
            </section>

            {/* When Siblingship Testing Is Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Siblingship Testing Is Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Siblingship DNA testing is commonly used when:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>One or both parents are unavailable for testing</li>
                <li>A parent is deceased or unwilling to participate</li>
                <li>Full vs half sibling relationship needs to be determined</li>
                <li>Legal cases require sibling relationship verification</li>
                <li>Family relationships need clarification</li>
                <li>Immigration cases require sibling relationship proof</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This testing option is used when direct parent-child testing is not feasible.
              </p>
            </section>

            {/* When Siblingship Testing Is Not Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Siblingship Testing Is Not Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Siblingship testing may not be necessary if:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>A parent is available and willing to participate in direct paternity or maternity testing</li>
                <li>Direct parent-child testing would provide clearer results</li>
                <li>The relationship in question is not between siblings</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                In these cases, direct paternity or maternity testing may be more appropriate and conclusive.
              </p>
            </section>

            {/* How Siblingship DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Siblingship DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Siblingship DNA testing follows a genetic analysis process:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>DNA samples are collected from the individuals being tested</li>
                <li>Genetic markers are analyzed and compared</li>
                <li>Statistical analysis determines the probability of a sibling relationship</li>
                <li>Results indicate whether individuals are full siblings, half siblings, or unrelated</li>
                <li>Laboratory analysis is performed by an accredited facility</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This process allows relationship determination when direct parent testing is not available.
              </p>
            </section>

            {/* Common Situations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Common Situations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Siblingship testing is commonly requested when separated siblings need to establish their relationship, when a parent is deceased and relationships need verification, when legal cases require sibling relationship proof, when immigration cases need sibling relationship documentation, or when family relationships need clarification for personal knowledge.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Siblingship DNA testing provides statistically reliable results when performed by an accredited laboratory. Results indicate the probability of a full or half sibling relationship and include statistical analysis. Legal siblingship testing includes documentation suitable for court use, while non-legal testing provides results for personal knowledge.
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
                  What is siblingship DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Siblingship DNA testing determines whether two or more individuals are full siblings (sharing both parents) or half siblings (sharing one parent) through genetic analysis. This testing is commonly used when one or both parents are unavailable for direct comparison.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  When is siblingship testing used instead of paternity testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Siblingship testing is used when a parent is unavailable, deceased, or unwilling to participate in testing. It can also be used to establish relationships between siblings when paternity or maternity is in question.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How accurate is siblingship DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Siblingship DNA testing provides statistically reliable results when performed by an accredited laboratory. The test analyzes genetic markers to determine the probability of a full or half sibling relationship.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can siblingship test results be used in court?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Legal siblingship testing that follows proper chain-of-custody procedures can be used in court. Non-legal siblingship testing provides results but is not court-admissible.
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
              <Link to="/services/grandparentage-testing" className="underline">
                Grandparentage Testing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SiblingshipTesting;
