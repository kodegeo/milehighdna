import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";

const GuidesIndex = () => {
  const guides = [
    {
      title: "Prenatal DNA Test Cost Guide",
      description: "Learn about the costs of non-invasive prenatal paternity testing (NIPP), what affects pricing, and how to budget for prenatal DNA testing during pregnancy.",
      link: "/guides/prenatal-dna-test-cost",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Legal DNA Test Cost Guide",
      description: "Understand the costs of court-admissible DNA testing, what's included in legal DNA test pricing, and why chain-of-custody procedures affect cost.",
      link: "/guides/legal-dna-test-cost",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Non-Legal DNA Test Cost Guide",
      description: "Compare peace of mind DNA test costs, at-home testing options, and what to expect when budgeting for personal paternity or relationship testing.",
      link: "/guides/non-legal-dna-test-cost",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
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
              <strong>About This Page:</strong> This is an <em>educational resource hub</em> providing informational guides about DNA testing costs and options. For booking appointments or service-specific details, please visit our{' '}
              <Link to="/services" className="text-blue-600 underline font-medium">
                Services page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cost & Pricing Guides</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Explore our detailed guides to understand what affects DNA testing costs and how to budget for your specific needs.
          </p>
          
          <div className="grid md:grid-cols-1 gap-8">
            {guides.map((guide, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm">
                    {guide.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {guide.title}
                    </h3>
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
