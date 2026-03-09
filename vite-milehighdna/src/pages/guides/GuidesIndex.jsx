import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";

const iconGuide = (
  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const GuidesIndex = () => {
  const categories = [
    {
      name: "General DNA Testing",
      guides: [
        { title: "How DNA Testing Works | Complete Guide", description: "A complete guide to how DNA testing works: sample collection, laboratory analysis, and how results are used for paternity, legal, and relationship testing.", link: "/guides/how-dna-testing-works" },
        { title: "How Accurate Is DNA Testing?", description: "Learn how accurate DNA testing is for paternity and relationship tests. Understand probability statistics, accreditation, and what affects reliability.", link: "/guides/how-accurate-is-dna-testing" },
        { title: "How Long Do DNA Test Results Take?", description: "Typical turnaround times for paternity, prenatal, legal, and immigration DNA tests—and what affects how long you wait for results.", link: "/guides/how-long-does-dna-testing-take" },
        { title: "Understanding DNA Test Results", description: "How to read and understand DNA test results: probability of paternity, combined paternity index, and when results are court-admissible.", link: "/guides/dna-testing-results-explained" },
        { title: "How To Prepare For A DNA Test", description: "Practical steps to prepare for a DNA test: what to bring, eating and drinking guidelines, and what to expect at your appointment.", link: "/guides/how-to-prepare-for-a-dna-test" },
        { title: "Non-Legal DNA Test Cost Guide", description: "Compare peace of mind DNA test costs, at-home testing options, and what to expect when budgeting for personal paternity or relationship testing.", link: "/guides/non-legal-dna-test-cost" }
      ]
    },
    {
      name: "Legal DNA Testing",
      guides: [
        { title: "Court Admissible DNA Testing Explained", description: "What makes DNA testing court admissible: chain-of-custody, AABB accreditation, and identity verification. Legal paternity testing in Denver.", link: "/guides/court-admissible-dna-testing" },
        { title: "What Is Chain of Custody DNA Testing?", description: "Chain of custody in DNA testing: what it is, why courts and USCIS require it, and how it keeps results legally admissible.", link: "/guides/chain-of-custody-dna-testing" },
        { title: "DNA Testing For Court Cases", description: "How to get DNA testing for court cases: legal paternity tests, court orders, and AABB-accredited results in Denver.", link: "/guides/dna-test-for-court" },
        { title: "DNA Testing For Child Custody Cases", description: "DNA testing for child custody: when courts use paternity tests, legal requirements, and how to get court-admissible results in Denver.", link: "/guides/dna-test-for-child-custody" },
        { title: "Can You Do A DNA Test Without The Father?", description: "Options when the father is unavailable: grandparent testing, avuncular testing, and postmortem DNA testing. Legal options in Denver.", link: "/guides/dna-test-without-the-father" },
        { title: "Legal DNA Test Cost Guide", description: "Understand the costs of court-admissible DNA testing, what's included in legal DNA test pricing, and why chain-of-custody procedures affect cost.", link: "/guides/legal-dna-test-cost" },
        { title: "Paternity Test Guide: Legal vs Non-Legal DNA Testing Types", description: "Learn about legal vs non-legal DNA testing types in Denver. Compare costs, requirements, and find the right DNA test for your needs.", link: "/guides/paternity-test-guide" }
      ]
    },
    {
      name: "Prenatal DNA Testing",
      guides: [
        { title: "DNA Testing While Pregnant", description: "DNA testing while pregnant: non-invasive prenatal paternity (NIPP), when you can test, safety, and accuracy. Denver prenatal DNA testing.", link: "/guides/dna-test-while-pregnant" },
        { title: "How Accurate Are Prenatal DNA Tests?", description: "Accuracy of prenatal DNA tests and NIPP: how reliable they are, what affects results, and when to test. Denver prenatal paternity testing.", link: "/guides/prenatal-paternity-test-accuracy" },
        { title: "Is Prenatal DNA Testing Safe?", description: "Safety of prenatal DNA testing: why NIPP is safe for mother and baby, and the difference between non-invasive and invasive tests.", link: "/guides/prenatal-paternity-test-safety" },
        { title: "Prenatal DNA Testing Timeline", description: "Prenatal DNA testing timeline: when you can test, how long results take, and what to expect. NIPP testing in Denver.", link: "/guides/prenatal-dna-test-timeline" },
        { title: "What Affects Prenatal DNA Test Cost?", description: "What affects prenatal DNA test cost: NIPP pricing, legal vs peace-of-mind, and how to budget. Denver prenatal paternity testing.", link: "/guides/prenatal-dna-test-cost-breakdown" },
        { title: "Prenatal DNA Test Cost Guide", description: "Learn about the costs of non-invasive prenatal paternity testing (NIPP), what affects pricing, and how to budget for prenatal DNA testing during pregnancy.", link: "/guides/prenatal-dna-test-cost" }
      ]
    },
    {
      name: "Immigration DNA Testing",
      guides: [
        { title: "Immigration DNA Testing Process", description: "How the immigration DNA testing process works: USCIS and embassy requirements, chain-of-custody, and AABB-accredited testing. Denver immigration DNA testing.", link: "/guides/immigration-dna-testing-process" },
        { title: "USCIS DNA Testing Requirements", description: "USCIS DNA testing requirements: AABB accreditation, chain-of-custody, and how to complete immigration DNA testing for USCIS. Denver immigration DNA testing.", link: "/guides/uscis-dna-testing" },
        { title: "AABB Accredited Labs For Immigration DNA Tests", description: "Why immigration DNA tests must use AABB-accredited laboratories. USCIS and embassy requirements. Denver immigration DNA testing.", link: "/guides/aabb-labs-for-immigration" },
        { title: "Embassy DNA Testing Explained", description: "Embassy DNA testing: what U.S. embassies and consulates require for relationship verification. AABB accreditation and chain-of-custody.", link: "/guides/embassy-dna-testing" },
        { title: "How Long Immigration DNA Testing Takes", description: "How long immigration DNA testing takes: lab turnaround, international collection, and what affects the timeline. Denver immigration DNA testing.", link: "/guides/immigration-dna-test-timeline" }
      ]
    },
    {
      name: "Kinship DNA Testing",
      guides: [
        { title: "Grandparent DNA Testing Explained", description: "Grandparent DNA testing: when it is used, how it works, and legal options when the father is unavailable. Denver kinship DNA testing.", link: "/guides/grandparent-dna-testing-explained" },
        { title: "Siblingship DNA Testing Explained", description: "Siblingship DNA testing: full vs half siblings, when it is used, and legal options for court and immigration. Denver kinship DNA testing.", link: "/guides/siblingship-dna-testing-explained" },
        { title: "Avuncular DNA Testing (Aunt/Uncle Test)", description: "Avuncular DNA testing: aunt/uncle relationship testing when the parent is unavailable. Legal options for court and immigration. Denver kinship DNA testing.", link: "/guides/avuncular-dna-testing-explained" },
        { title: "DNA Testing After Death", description: "Postmortem DNA testing: when and how DNA testing can be done after someone has died. Probate, inheritance, and legal options. Denver postmortem DNA testing.", link: "/guides/dna-testing-after-death" },
        { title: "Single Profile DNA Testing Guide", description: "Single profile DNA testing: document one person's DNA now for future comparison. Legal and peace-of-mind options. Denver single profile DNA testing.", link: "/guides/single-profile-dna-testing" }
      ]
    }
  ];

  return (
    <main>
      <Helmet>
        <title>DNA Testing Guides & Cost Resources | Mile High DNA Testing</title>
        <meta 
          name="description" 
          content="Educational guides and pricing resources for DNA testing. Learn about prenatal, legal, and non-legal DNA test costs, what affects pricing, and how to budget for testing. Informational resources only." 
        />
        <meta name="keywords" content="dna test cost guide, prenatal dna test pricing, legal dna test cost, non-legal dna test cost, dna testing pricing information" />
        
        {/* Canonical - self-referencing */}
        <link rel="canonical" href="https://milehighdnatesting.com/guides" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DNA Testing Guides & Cost Resources | Mile High DNA Testing" />
        <meta property="og:description" content="Educational guides and pricing resources for DNA testing. Learn about costs, what affects pricing, and how to budget for testing." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/guides" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        
        {/* WebPage and BreadcrumbList Schema ONLY (no Service, Product, LocalBusiness) */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://milehighdnatesting.com/guides#webpage",
              "url": "https://milehighdnatesting.com/guides",
              "name": "DNA Testing Guides & Cost Resources",
              "description": "Educational guides and pricing resources for DNA testing. Learn about prenatal, legal, and non-legal DNA test costs.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Mile High DNA Testing",
                "url": "https://milehighdnatesting.com"
              }
            },
            {
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
                  "name": "Guides",
                  "item": "https://milehighdnatesting.com/guides"
                }
              ]
            }
          ])}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            DNA Testing Guides & Cost Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Educational resources to help you understand DNA testing costs and make informed decisions. These guides provide pricing information and explanations—they are not service pages.
          </p>
        </div>
      </section>

      {/* Informational Notice */}
      <section className="py-6 px-6 md:px-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <p className="text-gray-700">
              <strong>About This Page:</strong> This is an <em>educational resource hub</em> providing informational guides about DNA testing costs and options. For booking or service details, see our <Link to="/services/prenatal-paternity-testing" className="text-blue-600 underline font-medium">prenatal paternity test</Link>, <Link to="/services/legal-paternity-testing" className="text-blue-600 underline font-medium">legal paternity testing</Link>, <Link to="/services/non-legal-paternity-testing" className="text-blue-600 underline font-medium">peace of mind paternity test</Link>, <Link to="/services/immigration-dna-testing" className="text-blue-600 underline font-medium">immigration DNA testing</Link>, or <Link to="/services" className="text-blue-600 underline font-medium">all services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">DNA Testing Guides</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Explore our guides by category: general DNA testing, legal and court testing, prenatal testing, immigration, and kinship testing.
          </p>
          
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                  {category.name}
                </h3>
                <div className="grid md:grid-cols-1 gap-6">
                  {category.guides.map((guide, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm">
                          {iconGuide}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {guide.title}
                          </h4>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {guide.description}
                          </p>
                          <Link 
                            to={guide.link}
                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                          >
                            Read Guide
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Price Ranges</h3>
              <p className="text-gray-600 text-sm">
                Understand typical costs for different types of DNA tests and what factors influence pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What's Included</h3>
              <p className="text-gray-600 text-sm">
                Learn what services and features are typically included in DNA test pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Budgeting Tips</h3>
              <p className="text-gray-600 text-sm">
                Get practical advice on how to budget for DNA testing and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="py-12 px-6 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Ready to Schedule a Test?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              If you've reviewed our pricing guides and are ready to move forward, visit our services page for current pricing and appointment scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Our Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a 
                href="tel:7209009342"
                className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (720) 900-9342
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServingColorado />
    </main>
  );
};

export default GuidesIndex;
