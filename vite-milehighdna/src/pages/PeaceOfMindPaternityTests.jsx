import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroImage from "../assets/images/father-baby-3.png"; // Adjust path as needed
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';


const PeaceOfMindPaternityPage = () => {
  console.log("PeaceOfMindPaternityPage is rendering"); // Debug log

  return (
    <main className="min-h-screen bg-gray-50">
<Helmet>
  <html lang="en" />
  <title>Peace of Mind Paternity Test in Denver | Mile High DNA Testing</title>
  <meta name="description" content="Private, non-legal Peace of Mind Paternity Testing in Denver. Accurate, confidential results in 3–5 days. Book your appointment today." />
  <meta
    name="keywords"
    content="peace of mind paternity test Denver, non legal DNA test Colorado, at home paternity test kit Denver, AABB DNA testing, confidential DNA test Colorado"
  />
  <link rel="canonical" href="https://milehighdnatesting.com/peace-of-mind-paternity-tests" />
  <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/pruebas-de-paternidad-para-tranquilidad" />

  {/* OG / Twitter */}
  <meta property="og:title" content="Peace of Mind Paternity Test in Denver, CO | Fast, Accurate & Confidential DNA Testing" />
  <meta property="og:description" content="Fast, accurate, and confidential Peace of Mind Paternity Testing in Denver, CO. Order your home kit or schedule same-day in-person testing." />
  <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://milehighdnatesting.com/peace-of-mind-paternity-tests" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Peace of Mind Paternity Test in Denver, CO" />
  <meta name="twitter:description" content="Fast, accurate, and confidential non-legal paternity testing available online or in person across Denver, CO." />
  <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

  {/* Structured Data */}
  <script type="application/ld+json">
{JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Non-Legal Peace of Mind Paternity Testing",
    "name": "Peace of Mind Paternity Test in Denver",
    "alternateName": "Non-Legal DNA Test in Denver",
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
    "areaServed": [
      "Denver",
      "Aurora",
      "Lakewood",
      "Westminster",
      "Thornton",
      "Littleton"
    ],
    "description": "Mile High DNA Testing provides non-legal Peace of Mind Paternity Testing in Denver. Results are processed by AABB-accredited laboratories and delivered quickly with full confidentiality. Ideal for personal use, reassurance, and family peace of mind.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "249.00",
      "url": "https://milehighdnatesting.com/non-legal-paternity-testing",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": "US",
      "validFrom": "2025-01-01",
      "category": "Service",
      "itemOffered": {
        "@type": "Service",
        "name": "Peace of Mind Paternity Test (Non-Legal)",
        "description": "Private, non-legal paternity DNA testing service performed in person at Mile High DNA Testing’s Denver office. Includes identity verification, professional sample collection, and results processed by AABB-accredited laboratories."
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DNA Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Legal DNA Test",
          "url": "https://milehighdnatesting.com/legal-dna-cost-guide"
        },
        {
          "@type": "Offer",
          "name": "Non-Legal DNA Test",
          "url": "https://milehighdnatesting.com/non-legal-dna-cost-guide"
        },
        {
          "@type": "Offer",
          "name": "At-Home Peace of Mind DNA Kit",
          "url": "https://milehighdnatesting.com/products/peace-of-mind-dna-kit"
        }
      ]
    },
    "inLanguage": "en-US"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Peace of Mind Paternity Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Peace of Mind Paternity Test is a non-legal DNA test used for personal knowledge or reassurance. It provides accurate results processed by an AABB-accredited laboratory but cannot be used in court or legal cases."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a non-legal paternity test cost in Denver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average cost for a non-legal Peace of Mind Paternity Test in Denver is $249. This includes professional sample collection, lab analysis, and confidential results within 2–3 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Are Peace of Mind Paternity Test results court-admissible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Peace of Mind Paternity Test results are for personal use only. Court or immigration cases require a legal DNA test with verified chain of custody procedures."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Peace of Mind Paternity Test results are available within 2 to 3 business days after all samples have been collected and received by the lab."
        }
      },
      {
        "@type": "Question",
        "name": "Is the testing process private and confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All testing at Mile High DNA Testing is handled with complete confidentiality and professionalism. Results are released securely to authorized clients only."
        }
      }
    ]
  }
])}
</script>
</Helmet>

      {/* Hero Section */}
{/* Hero Section */}
<section className="relative bg-white">
  <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Non-Legal Peace of Mind Paternity Testing in Denver
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Fast. Confidential. Reliable Results You Can Trust.
      </p>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
        Our Peace of Mind Paternity Test provides private, 
        non-legal DNA results performed by AABB-accredited laboratories. 
        This service is ideal for personal knowledge, family reassurance, or resolving 
        sensitive questions without the need for court involvement.
      </p>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
        Same-day in-person testing at our Denver location is available, or 
        request an at-home kit if preferred. All tests are handled with care, discretion, 
        and professional support from start to finish.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://calendly.com/milehighdnatesting/non-legal-paternity-test"
          className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block text-center"
        >
          Schedule In-Person Test
        </a>
        <a
          href="/products/peace-of-mind-dna-kit"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block text-center"
        >
          Order Home Kit
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={HeroImage}
        alt="Peace of Mind Paternity Test in Denver"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our Peace of Mind Paternity Test?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li>✅ 99%+ Accuracy — Same technology used in court‑admissible labs</li>
            <li>✅ Completely Discreet — Unbranded packaging, personal data protected</li>
            <li>✅ Simple Home Collection — Easy cheek swab, no needles required</li>
            <li>✅ Speedy Results — As few as 2–3 business days after lab receives your kit</li>
            <li>✅ Non-Legal Testing — Results are not admissible in court, perfect for personal peace of mind</li>
            <li>✅ Family Reassurance — Ideal for personal confirmation and family understanding</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <ol className="grid md:grid-cols-4 gap-6 text-center text-gray-700">
            <li className="p-4 bg-gray-50 rounded-lg shadow">1. Order Your Kit</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">2. Collect Samples at Home</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">3. Ship Back to Lab</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">4. Receive Results Securely</li>
          </ol>
        </div>
      </section>

      {/* Pricing and Ordering Options */}
      <section id="pricing-info" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Testing Option</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Online Kit</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$199</p>
              <p className="text-gray-600 mb-4">Order online and complete the test <br/> from the comfort of your home</p>
              <a
                href="/products/peace-of-mind-dna-kit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full"
              >
                Order Online
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">In-Person Testing</h4>
              <p className="text-3xl font-bold text-green-600 mb-4">$249</p>
              <p className="text-gray-600 mb-4">Schedule an appointment <br />at our testing location</p>
              <a
                href="https://calendly.com/milehighdnatesting/non-legal-paternity-test"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            This non-legal DNA test uses the same laboratory technology as court-admissible tests, 
            but results are not admissible in court. Perfect for personal confirmation and family reassurance.
          </p>
          
        </div>

      </section>
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default PeaceOfMindPaternityPage;
