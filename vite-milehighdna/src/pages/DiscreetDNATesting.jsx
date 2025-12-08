import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroImage from "../assets/images/father-baby-3.png";
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';

const DiscreetDNATesting = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <html lang="en" />
        <title>Discreet DNA Testing in Denver | 100% Confidential & Private | Mile High DNA Testing</title>
        <meta name="description" content="Completely private and discreet DNA testing in Denver with unbranded packaging and confidential handling. Perfect for sensitive situations requiring maximum privacy. AABB-accredited results." />
        <meta
          name="keywords"
          content="discreet dna testing, private dna testing denver, confidential dna test, anonymous dna testing colorado, unbranded dna kit"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/discreet-dna-testing" />

        {/* OG / Twitter */}
        <meta property="og:title" content="Discreet DNA Testing in Denver, CO | 100% Confidential & Private" />
        <meta property="og:description" content="Completely private DNA testing with unbranded packaging and confidential handling. Perfect for sensitive situations requiring maximum privacy." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/discreet-dna-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discreet DNA Testing in Denver, CO" />
        <meta name="twitter:description" content="100% confidential DNA testing with unbranded packaging and private handling." />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Discreet DNA Testing",
            "name": "Discreet DNA Testing in Denver",
            "alternateName": "Private Confidential DNA Testing",
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
            "description": "Completely private and discreet DNA testing with unbranded packaging, confidential handling, and maximum privacy protection. Perfect for sensitive situations requiring absolute discretion.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "199.00",
              "url": "https://milehighdnatesting.com/discreet-dna-testing",
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
                "name": "Discreet DNA Testing",
                "item": "https://milehighdnatesting.com/discreet-dna-testing"
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
                "name": "What makes discreet DNA testing different?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Discreet testing uses unbranded packaging with no company logos or identifying information. All communications and data handling prioritize maximum privacy and confidentiality."
                }
              },
              {
                "@type": "Question",
                "name": "Is the accuracy the same as regular DNA tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Discreet DNA testing uses the same AABB-accredited laboratory technology and provides 99%+ accuracy. Only the packaging and privacy handling differ."
                }
              },
              {
                "@type": "Question",
                "name": "Can discreet test results be used in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Discreet testing is typically non-legal (peace of mind). For court-admissible results, you would need a legal DNA test with verified chain of custody, though we can arrange discreet handling for legal tests as well."
                }
              },
              {
                "@type": "Question",
                "name": "How are results delivered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Results are delivered securely via encrypted email to ensure complete privacy. No physical mail is sent unless specifically requested."
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
              Discreet DNA Testing in Denver
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              100% Confidential. Unbranded Packaging. Maximum Privacy.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our Discreet DNA Testing service provides completely private DNA testing with unbranded packaging 
              and confidential handling. Perfect for sensitive situations where maximum privacy is essential. 
              All testing is performed by AABB-accredited laboratories with the same accuracy as standard tests, 
              but with enhanced privacy protections.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Whether you need paternity testing, relationship verification, or any other DNA test, 
              we ensure your privacy is protected every step of the way. No identifying information 
              appears on packaging, and all communications are handled with complete discretion.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Mile High DNA Testing provides services throughout Denver, Aurora, Lakewood, Englewood, Thornton, Westminster, and surrounding Colorado communities. We serve clients statewide for both legal and non-legal DNA testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/products/peace-of-mind-dna-kit"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block text-center"
              >
                Order Discreet Kit
              </a>
              <a
                href="/appointments"
                className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block text-center"
              >
                Schedule Private Appointment
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={HeroImage}
              alt="Discreet DNA Testing in Denver"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Discreet Testing */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Discreet DNA Testing?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li>✅ Unbranded Packaging — No company logos or identifying information visible</li>
            <li>✅ Complete Confidentiality — All personal data protected and never shared</li>
            <li>✅ Private Communication — Secure, discreet handling of all correspondence</li>
            <li>✅ Same Accuracy — AABB-accredited laboratory testing with 99%+ accuracy</li>
            <li>✅ Flexible Options — At-home kit or private in-person appointment available</li>
            <li>✅ Fast Results — Results delivered securely within 2–3 business days</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How Discreet Testing Works</h2>
          <ol className="grid md:grid-cols-4 gap-6 text-center text-gray-700">
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
              <p className="font-semibold mb-2">Order Privately</p>
              <p className="text-sm">Order online with complete privacy protection</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
              <p className="font-semibold mb-2">Receive Unbranded Kit</p>
              <p className="text-sm">Package arrives with no identifying labels</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
              <p className="font-semibold mb-2">Collect & Return</p>
              <p className="text-sm">Simple cheek swab, return in provided envelope</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
              <p className="font-semibold mb-2">Secure Results</p>
              <p className="text-sm">Results delivered confidentially via secure email</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Privacy Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Unbranded Packaging</h3>
              <p className="text-gray-600">No company logos, names, or identifying information appears on any packaging or correspondence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Data Handling</h3>
              <p className="text-gray-600">All personal information is encrypted and stored securely. Never shared with third parties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Confidential Communication</h3>
              <p className="text-gray-600">All phone calls, emails, and results are handled with complete discretion and privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Discreet Testing Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">At-Home Kit</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$199</p>
              <p className="text-gray-600 mb-4">Unbranded kit delivered discreetly to your address</p>
              <a
                href="/products/peace-of-mind-dna-kit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full"
              >
                Order Kit
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Private Appointment</h4>
              <p className="text-3xl font-bold text-green-600 mb-4">$249</p>
              <p className="text-gray-600 mb-4">Private, confidential in-person testing at our location</p>
              <a
                href="/appointments"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            Both options provide the same AABB-accredited accuracy and complete privacy protection. 
            Choose the option that best fits your needs for maximum discretion.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What makes discreet DNA testing different?</h3>
              <p className="text-gray-600">Discreet testing uses unbranded packaging with no company logos or identifying information. All communications and data handling prioritize maximum privacy and confidentiality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is the accuracy the same as regular DNA tests?</h3>
              <p className="text-gray-600">Yes. Discreet DNA testing uses the same AABB-accredited laboratory technology and provides 99%+ accuracy. Only the packaging and privacy handling differ.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can discreet test results be used in court?</h3>
              <p className="text-gray-600">Discreet testing is typically non-legal (peace of mind). For court-admissible results, you would need a legal DNA test with verified chain of custody, though we can arrange discreet handling for legal tests as well.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How are results delivered?</h3>
              <p className="text-gray-600">Results are delivered securely via encrypted email to ensure complete privacy. No physical mail is sent unless specifically requested.</p>
            </div>
          </div>
        </div>
      </section>

      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default DiscreetDNATesting;


