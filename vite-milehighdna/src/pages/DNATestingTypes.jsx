import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/corner/CallToAction';
import landingHero from '../assets/images/landing-1.1.png';

const DNATestingTypes = () => {
  return (
    <main>
      <Helmet>
        <title>DNA Testing Types in Denver | Legal vs Non-Legal Paternity Test Guide</title>
        <meta 
          name="description" 
          content="Learn about legal vs non-legal DNA testing types in Denver. Compare costs, requirements, and find the right DNA test for your needs at Mile High DNA Testing." 
        />
        <meta name="keywords" content="dna testing types, legal dna testing, non legal dna testing, paternity test types, dna test guide denver, paternity testing in Denver, legal DNA testing in Denver, non-legal DNA testing for peace of mind" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DNA Testing Types in Denver | Legal vs Non-Legal Paternity Test Guide" />
<meta property="og:description" content="Compare legal and non-legal DNA testing options in Denver. Learn costs, requirements, and which paternity test is right for you." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/landing-1.1.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/guides/paternity-test-guide" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/landing-1.1.png" />
        <link rel="canonical" href="https://milehighdnatesting.com/guides/paternity-test-guide" />

        
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "DNA Testing Types: Legal vs Non-Legal Testing Guide",
              "author": { "@type": "Organization", "name": "Mile High DNA Testing" },
              "publisher": { "@type": "Organization", "name": "Mile High DNA Testing" },
              "inLanguage": "en-US",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://milehighdnatesting.com/guides/paternity-test-guide"
              },
              "description": "Complete guide to DNA testing types in Denver, including legal vs non-legal testing options, costs, and requirements."
            },
            {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "DNA Testing Types",
                "name": "DNA Testing Types in Denver",
                "provider": {
                  "@type": "Organization",
                  "name": "Mile High DNA Testing",
                  "url": "https://milehighdnatesting.com",
                  "logo": "https://milehighdnatesting.com/logo.png",
                  "telephone": "+1-720-900-9342",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "975 N Lincoln St, Suite 205C",
                    "addressLocality": "Denver",
                    "addressRegion": "CO",
                    "postalCode": "80203",
                    "addressCountry": "US"
                  }
                },
                "areaServed": ["Denver", "Aurora", "Lakewood", "Westminster", "Thornton", "Littleton"],
                "description": "Complete guide to DNA testing types in Denver, including legal and non-legal paternity tests, costs, requirements, and professional laboratory services.",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "price": "249.00",
                  "url": "https://milehighdnatesting.com/guides/paternity-test-guide",
                  "availability": "https://schema.org/InStock"
                }
              },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the different types of DNA testing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are two main types of DNA testing: legal and non-legal (peace of mind). Legal tests are court-admissible and require professional collection, while non-legal tests are for personal knowledge only."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which DNA test type should I choose?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose legal DNA testing if you need results for court, child support, immigration, or legal documentation. Choose non-legal testing for personal peace of mind and family clarity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much do different DNA test types cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Legal DNA tests typically cost $350-$550, while non-legal tests cost $199-$399. The difference reflects professional collection requirements and court documentation."
                  }
                }
              ]
            }
          ])}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[60vh] overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
             style={{ backgroundImage: `url(${landingHero})` }}>
        </div>
        <div className="relative z-10 min-h-[70vh] md:h-full flex items-center py-12 md:py-0">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              DNA Testing Types: 
              <span className="text-blue-600 block">Legal vs Non-Legal Paternity Test Guide</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Understand the different types of DNA testing available, compare costs and requirements, and choose the right test for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/services/legal-paternity-testing"
                className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg text-sm md:text-base"
              >
                Legal DNA Testing
              </Link>
              <Link 
                to="/services/non-legal-paternity-testing"
                className="bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg text-sm md:text-base"
              >
                Peace of Mind Testing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Understanding DNA Testing Types</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              When you need DNA testing, understanding the different types available is crucial for making the right choice. Whether you need results for legal purposes or personal peace of mind, each testing type serves different needs and comes with different requirements and costs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we provide both legal and non-legal DNA testing services to families across Denver, Aurora, and Lakewood. This guide will help you understand the differences and choose the right option for your situation.
            </p>
          </div>
          <p className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg text-gray-800 text-lg font-medium mb-8">
  There are two main types of DNA tests: legal DNA testing, which is court-admissible and follows strict collection rules, and non-legal (peace of mind) testing, which provides private results for personal knowledge. Both use the same AABB-accredited laboratories for accuracy.
</p>
        </div>

      </section>

      {/* Testing Types Comparison */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">DNA Testing Types: Side-by-Side Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Legal DNA Testing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Legal DNA Testing</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What it's for:</h4>
                  <p className="text-gray-600">Court proceedings, child support, immigration, inheritance disputes, legal documentation</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cost:</h4>
                  <p className="text-gray-600">$350 - $550 depending on test type</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Professional sample collection</li>
                    <li>• Photo ID verification</li>
                    <li>• Chain of custody documentation</li>
                    <li>• AABB-accredited laboratory</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                  <p className="text-gray-600">Court-admissible reports in 3-5 business days</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/guides/legal-dna-test-cost"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Legal Testing Guide
                </Link>
                <Link 
                  to="https://calendly.com/milehighdnatesting/legal-paternity-test"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
                >
                  Book Legal Test
                </Link>
              </div>
            </div>

            {/* Non-Legal DNA Testing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800">Non-Legal DNA Testing</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What it's for:</h4>
                  <p className="text-gray-600">Personal peace of mind, family clarity, private relationship confirmation</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cost:</h4>
                  <p className="text-gray-600">$199 - $399 depending on collection method</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• At-home or simple collection</li>
                    <li>• No ID verification needed</li>
                    <li>• Self-collection instructions</li>
                    <li>• AABB-accredited laboratory</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                  <p className="text-gray-600">Personal reports in 3-5 business days</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/guides/non-legal-dna-test-cost"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Non-Legal Testing Guide
                </Link>
                <Link 
                  to="/shop/at-home-paternity-test"
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
                >
                  Order At-Home Kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Which DNA Testing Type Is Right for You?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Choose Legal DNA Testing If:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• You need results for court proceedings</li>
                <li>• You're dealing with child support or custody</li>
                <li>• You need documentation for immigration</li>
                <li>• You're involved in inheritance disputes</li>
                <li>• You need legally admissible evidence</li>
                <li>• A judge or attorney has requested testing</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Choose Non-Legal DNA Testing If:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• You want personal peace of mind</li>
                <li>• You need family relationship clarity</li>
                <li>• You're curious about biological relationships</li>
                <li>• You want to confirm paternity privately</li>
                <li>• You need answers for personal decisions</li>
                <li>• No legal documentation is required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">DNA Testing Cost Comparison</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Legal DNA Testing Costs</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Legal Paternity Test</span>
                    <span className="font-semibold text-blue-600">$350 - $450</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Legal Maternity Test</span>
                    <span className="font-semibold text-blue-600">$400 - $500</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Relationship Tests</span>
                    <span className="font-semibold text-blue-600">$450 - $550</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Non-Legal DNA Testing Costs</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">At-Home Peace of Mind</span>
                    <span className="font-semibold text-green-600">$199 - $249</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">In-Office Collection</span>
                    <span className="font-semibold text-green-600">$249 - $299</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Relationship Tests</span>
                    <span className="font-semibold text-green-600">$299 - $399</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <strong>Note:</strong> All prices are for Denver area testing. Actual costs may vary based on location, number of participants, and additional services. Both testing types include AABB-accredited laboratory analysis and results in 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Comparison */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How Each Testing Type Works</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Legal Process */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-6">Legal DNA Testing Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Schedule Appointment</h4>
                    <p className="text-gray-600 text-sm">Book with certified collector</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Identity Verification</h4>
                    <p className="text-gray-600 text-sm">Present photo ID and documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Professional Collection</h4>
                    <p className="text-gray-600 text-sm">Certified collector performs sampling</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Chain of Custody</h4>
                    <p className="text-gray-600 text-sm">Documentation ensures legal validity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Court Report</h4>
                    <p className="text-gray-600 text-sm">Admissible results delivered securely</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Legal Process */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-6">Non-Legal DNA Testing Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Order Kit or Schedule</h4>
                    <p className="text-gray-600 text-sm">Choose at-home kit or office visit</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Simple Collection</h4>
                    <p className="text-gray-600 text-sm">Self-collect or simple office collection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Send Samples</h4>
                    <p className="text-gray-600 text-sm">Prepaid shipping or drop-off</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Lab Analysis</h4>
                    <p className="text-gray-600 text-sm">Same AABB-accredited laboratory</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personal Results</h4>
                    <p className="text-gray-600 text-sm">Private results for your knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions About DNA Testing Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What's the main difference between legal and non-legal DNA testing?</h3>
              <p className="text-gray-600">
                Legal DNA testing requires professional collection, identity verification, and chain of custody documentation to produce court-admissible results. Non-legal testing uses simpler collection methods and produces results for personal knowledge only.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are non-legal DNA tests as accurate as legal tests?</h3>
              <p className="text-gray-600">
                Yes, both types use identical laboratory analysis methods and provide the same scientific accuracy when processed by AABB-accredited laboratories. The difference is in collection method and documentation, not accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I upgrade a non-legal test to legal later?</h3>
              <p className="text-gray-600">
                No, non-legal tests cannot be upgraded to legal tests because they don't meet chain of custody requirements. If you need legal results later, you'll need to take a separate legal DNA test with professional collection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Which test type should I choose?</h3>
              <p className="text-gray-600">
                Choose legal DNA testing if you need results for court, child support, immigration, or legal documentation. Choose non-legal testing for personal peace of mind, family clarity, or private relationship confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Choose Your DNA Testing Type?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you need legal documentation or personal peace of mind, we're here to help you choose the right DNA testing type for your specific needs.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:7209009342"
              onClick={() => {
                window.dataLayer?.push({
                  event: "phone_click",
                  phone_location: "DNATestingTypes - CTA"
                });
              }}
              className="bg-blue-800 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg border-2 border-blue-300"
            >
              Call for Guidance <br /> (720) 900-9342
            </a>
          </div>
        </div>
      </section>

      {/* Footer Sections */}
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default DNATestingTypes;
