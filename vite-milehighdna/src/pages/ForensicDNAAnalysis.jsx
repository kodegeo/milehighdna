import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroImage from "../assets/images/legal_hero.png";
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';

const ForensicDNAAnalysis = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <html lang="en" />
        <title>Forensic DNA Analysis in Denver | Expert DNA Testing for Legal Cases | Mile High DNA Testing</title>
        <meta name="description" content="Expert forensic DNA analysis in Denver for legal cases, missing persons, and complex relationship verification. AABB-accredited specialty DNA testing with court-admissible results." />
        <meta
          name="keywords"
          content="forensic dna analysis, legal dna testing denver, forensic dna colorado, court dna evidence, missing persons dna, expert dna witness"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/forensic-dna-analysis" />

        {/* OG / Twitter */}
        <meta property="og:title" content="Forensic DNA Analysis in Denver, CO | Expert Legal DNA Testing" />
        <meta property="og:description" content="Expert forensic DNA analysis for legal cases, missing persons, and complex relationship verification. AABB-accredited specialty testing." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/forensic-dna-analysis" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forensic DNA Analysis in Denver, CO" />
        <meta name="twitter:description" content="Expert forensic DNA analysis for legal cases and complex relationship verification." />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Forensic DNA Analysis",
            "name": "Forensic DNA Analysis in Denver",
            "alternateName": "Expert Legal DNA Testing",
            "provider": {
              "@type": "Organization",
              "name": "Mile High DNA Testing",
              "url": "https://milehighdnatesting.com",
              "telephone": "+1-720-900-9342",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "975 N Lincoln St Suite 205C",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80203",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              "Denver",
              "Aurora",
              "Lakewood",
              "Westminster",
              "Thornton",
              "Littleton",
              "Colorado Springs",
              "Boulder"
            ],
            "description": "Expert forensic DNA analysis for legal cases, missing persons investigations, and complex relationship verification. AABB-accredited specialty DNA testing with court-admissible results and expert testimony support.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "url": "https://milehighdnatesting.com/forensic-dna-analysis",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

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
                "name": "Forensic DNA Analysis",
                "item": "https://milehighdnatesting.com/forensic-dna-analysis"
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
                "name": "What is forensic DNA analysis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Forensic DNA analysis is specialized DNA testing performed with strict chain-of-custody procedures for legal cases, missing persons investigations, and complex relationship verification requiring court-admissible results."
                }
              },
              {
                "@type": "Question",
                "name": "How long does forensic DNA analysis take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard forensic DNA analysis typically takes 3-5 business days. Complex cases or missing persons investigations may require additional time depending on the specific requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Are forensic DNA test results court-admissible?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All forensic DNA analysis follows strict chain-of-custody procedures and is performed by AABB-accredited laboratories, ensuring results are court-admissible and suitable for legal proceedings."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide expert testimony?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We can arrange expert witness testimony and support for legal cases requiring DNA evidence interpretation and expert analysis."
                }
              },
              {
                "@type": "Question",
                "name": "What types of samples can be tested?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We can test standard cheek swabs, blood samples, tissue samples, and other specimens. For non-standard samples, please contact us to discuss your specific needs."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Forensic DNA Analysis in Denver
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Expert DNA Testing for Legal Cases & Complex Investigations
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our Forensic DNA Analysis service provides expert DNA testing for legal cases, 
              missing persons investigations, and complex relationship verification. Performed by 
              AABB-accredited laboratories with strict chain-of-custody procedures, our forensic 
              DNA testing meets the highest standards for court admissibility and legal documentation.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Whether you need DNA evidence for a court case, identification for missing persons, 
              or complex relationship analysis, our experienced team provides expert analysis 
              and documentation to support your legal needs.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Mile High DNA Testing provides services throughout Denver, Aurora, Lakewood, Englewood, Thornton, Westminster, and surrounding Colorado communities. We serve clients statewide for both legal and non-legal DNA testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/appointments"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block text-center"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+17209009342"
                className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block text-center"
              >
                Call for Expert Consultation
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={HeroImage}
              alt="Forensic DNA Analysis in Denver"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Forensic Analysis */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our Forensic DNA Analysis?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li>✅ AABB-Accredited — Certified laboratories meeting highest industry standards</li>
            <li>✅ Court-Admissible — Strict chain-of-custody procedures for legal cases</li>
            <li>✅ Expert Analysis — Complex relationship verification and DNA evidence interpretation</li>
            <li>✅ Missing Persons — Specialized testing for identification and family reunification</li>
            <li>✅ Legal Documentation — Comprehensive reports suitable for court proceedings</li>
            <li>✅ Expert Testimony — Support available for legal cases requiring expert witness</li>
          </ul>
        </div>
      </section>

      {/* Types of Forensic Testing */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Types of Forensic DNA Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Case DNA Evidence</h3>
              <p className="text-gray-600">DNA testing for court cases including paternity disputes, custody battles, and legal documentation requirements. Full chain-of-custody procedures ensure court admissibility.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Missing Persons Identification</h3>
              <p className="text-gray-600">Specialized DNA testing for missing persons cases, including comparison with family reference samples and database searches for identification purposes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Complex Relationship Verification</h3>
              <p className="text-gray-600">Advanced DNA analysis for complex family relationships when standard testing is insufficient, including extended family analysis and genetic reconstruction.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Post-Mortem DNA Testing</h3>
              <p className="text-gray-600">Specialized DNA testing from post-mortem samples, tissue samples, or other non-standard specimens requiring expert handling and analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chain of Custody */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Chain of Custody Procedures</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-6 text-lg">
              All forensic DNA analysis follows strict chain-of-custody procedures to ensure court admissibility:
            </p>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span><strong>Verified Identity:</strong> All parties are photo-identified and verified before sample collection.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span><strong>Documented Collection:</strong> Every step of sample collection is documented and witnessed.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span><strong>Secure Handling:</strong> Samples are sealed, labeled, and tracked throughout the entire process.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">4.</span>
                <span><strong>Laboratory Processing:</strong> AABB-accredited laboratory analysis with full documentation.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">5.</span>
                <span><strong>Legal Documentation:</strong> Comprehensive reports suitable for court submission.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Forensic Analysis Process</h2>
          <ol className="grid md:grid-cols-4 gap-6 text-center text-gray-700">
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
              <p className="font-semibold mb-2">Initial Consultation</p>
              <p className="text-sm">Discuss your case and testing requirements</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
              <p className="font-semibold mb-2">Sample Collection</p>
              <p className="text-sm">Professional collection with chain-of-custody</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
              <p className="font-semibold mb-2">Expert Analysis</p>
              <p className="text-sm">AABB-accredited laboratory processing</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
              <p className="font-semibold mb-2">Legal Documentation</p>
              <p className="text-sm">Court-admissible reports and expert support</p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What is forensic DNA analysis?</h3>
              <p className="text-gray-600">Forensic DNA analysis is specialized DNA testing performed with strict chain-of-custody procedures for legal cases, missing persons investigations, and complex relationship verification requiring court-admissible results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does forensic DNA analysis take?</h3>
              <p className="text-gray-600">Standard forensic DNA analysis typically takes 3-5 business days. Complex cases or missing persons investigations may require additional time depending on the specific requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Are forensic DNA test results court-admissible?</h3>
              <p className="text-gray-600">Yes. All forensic DNA analysis follows strict chain-of-custody procedures and is performed by AABB-accredited laboratories, ensuring results are court-admissible and suitable for legal proceedings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Do you provide expert testimony?</h3>
              <p className="text-gray-600">Yes. We can arrange expert witness testimony and support for legal cases requiring DNA evidence interpretation and expert analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What types of samples can be tested?</h3>
              <p className="text-gray-600">We can test standard cheek swabs, blood samples, tissue samples, and other specimens. For non-standard samples, please contact us to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default ForensicDNAAnalysis;


