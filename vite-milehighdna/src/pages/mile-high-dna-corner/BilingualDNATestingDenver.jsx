import React from "react";
import { Helmet } from "react-helmet-async";
import CornerLayout from "../../components/corner/CornerLayout";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";
import cornerImage from "../../assets/images/corner-bilingual-1.png";

export default function BilingualDNATestingDenver() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Why Bilingual DNA Testing Matters in Denver | Spanish DNA Testing for Families
        </title>

        <meta
          name="description"
          content="Learn why bilingual DNA testing is essential for Denver families. Mile High DNA Testing offers Spanish and English support for legal, immigration, and peace-of-mind DNA tests."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver"
        />

        <meta
          name="keywords"
          content="bilingual DNA testing Denver, Spanish DNA testing, Latino families DNA test, immigration DNA Denver, legal DNA Denver Spanish"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Why Bilingual DNA Testing Matters for Families in Denver" />
        <meta property="og:description" content="Spanish & English bilingual DNA testing for Denver families. Supporting legal, immigration, and peace-of-mind DNA tests." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/corner-bilingual-1.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Bilingual DNA Testing Matters | Mile High DNA Testing" />
        <meta name="twitter:description" content="Full bilingual DNA testing support for Denver families. Spanish + English testing for legal, immigration, and peace-of-mind needs." />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/corner-bilingual-1.png" />

        {/* Structured Data */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Why Bilingual DNA Testing Matters for Families in Denver",
          "description": "Learn why bilingual DNA testing matters for Denver's diverse community and how Mile High DNA Testing supports Spanish-speaking families.",
          "image": "https://milehighdnatesting.com/images/corner-bilingual-1.png",
          "author": {
            "@type": "Organization",
            "name": "Mile High DNA Testing"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Mile High DNA Testing",
            "logo": {
              "@type": "ImageObject",
              "url": "https://milehighdnatesting.com/logo.png"
            }
          },
          "mainEntityOfPage": "https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver",
          "url": "https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver",
          "datePublished": "2025-01-01",
          "dateModified": "2025-01-01"
        }
        `}</script>
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver#dna-testing-denver",
              "name": "Mile High DNA Testing",
              "image": "https://milehighdnatesting.com/logo.png",
              "url": "https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver",
              "telephone": "+1-720-900-9342",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "975 N Lincoln St Suite 205C",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80203",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.7323,
                "longitude": -104.9862
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver#webpage",
              "url": "https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver",
              "name": "Why Bilingual DNA Testing Matters in Denver | Spanish DNA Testing for Families",
              "description": "Learn why bilingual DNA testing is essential for Denver families. Mile High DNA Testing offers Spanish and English support for legal, immigration, and peace-of-mind DNA tests.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Mile High DNA Testing",
                "url": "https://milehighdnatesting.com"
              }
            }
          ])}
        </script>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where can I find bilingual DNA testing in Denver?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mile High DNA Testing is Denver’s only full-service bilingual DNA testing center offering support in English and Spanish."
              }
            },
            {
              "@type": "Question",
              "name": "What DNA tests are available in Spanish?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer paternity, legal, immigration, and non-invasive prenatal DNA tests in Spanish."
              }
            },
            {
              "@type": "Question",
              "name": "How much does a bilingual DNA test cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non-legal paternity tests start at $249, while legal DNA tests begin at $349."
              }
            },
            {
              "@type": "Question",
              "name": "Can bilingual DNA tests be used for immigration?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We coordinate immigration DNA testing through AABB-accredited partner labs."
              }
            },
            {
              "@type": "Question",
              "name": "Why is choosing a bilingual provider important?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bilingual testing ensures accurate communication, avoids misunderstandings, and provides confidence during emotional situations."
              }
            }
          ]
        }
        `}</script>
      </Helmet>
      
      <CornerLayout>
        {/* Hero Section */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={cornerImage}
            alt="Bilingual DNA Testing in Denver - Mile High DNA Testing"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-2 drop-shadow-lg">
              Why Bilingual DNA Testing Matters: Bridging Language Gaps for Families in Denver
            </h1>
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Understanding the Importance of Clear Communication in DNA Testing
          </h2>
          <p className="text-base mb-6 text-justify">
            DNA testing can be one of the most emotional and life-changing experiences a family faces.
            Whether for legal paternity, immigration, or peace of mind, every word and instruction matters.
            Misunderstandings due to language barriers can lead to mistakes or delays.
          </p>
          <p className="text-base mb-6 text-justify">
            That is where bilingual DNA testing plays a critical role. At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>,
            we proudly serve Denver's diverse community with full-service Spanish DNA testing and English support,
            ensuring every family receives accurate information, compassionate communication, and reliable results.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            The Growing Need for Bilingual DNA Testing in Denver
          </h2>
          <p className="text-base mb-6 text-justify">
            Denver’s Latino community continues to grow, making it one of the most diverse metro areas in Colorado.
            Yet many DNA testing centers are not equipped to fully support Spanish-speaking clients.
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2 text-base">
            <li>Difficulty understanding consent forms, legal terminology, or instructions</li>
            <li>Fear of being misunderstood or judged during sensitive conversations</li>
            <li>Limited access to Spanish-speaking staff</li>
            <li>Delays caused by miscommunication with laboratories or agencies</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Why Bridging the Language Gap Matters
          </h2>
          <p className="text-base mb-6 text-justify">
            When families are dealing with emotional or legal matters, clarity is everything. 
            Bilingual services ensure clients fully understand their rights, the process, and results.
            Bridging the language gap is about providing equal access and compassionate care.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Our Community Matters to Us
          </h2>
          <p className="text-base mb-6 text-justify">
            As a Latina-owned DNA testing company, we understand the importance of representation. 
            We are more than a testing center — we are part of this community. We listen to our clients, 
            honor their experiences, and guide them with care.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            How Mile High DNA Testing Bridges the Language Gap
          </h2>
          <ul className="list-disc ml-6 mb-6 space-y-2 text-base">
            <li>Bilingual staff available from start to finish (English or Spanish)</li>
            <li>Translated forms and documents</li>
            <li>Support for legal and immigration DNA tests (AABB-accredited labs)</li>
            <li>Cultural understanding and respect for Latino family values</li>
          </ul>
          <p className="text-base mb-6 text-justify">
            We also coordinate nationwide testing for families outside Colorado. Every family receives full bilingual support — no matter where they are.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Why Choose Mile High DNA Testing
          </h2>
          <ul className="list-disc ml-6 mb-6 space-y-2 text-base">
            <li>Denver’s only full-service bilingual DNA testing center</li>
            <li>AABB-accredited partner labs for court and immigration standards</li>
            <li>Payment plans available</li>
            <li>In-office, mobile, and at-home collection options</li>
            <li>Respectful, confidential, and compassionate service</li>
          </ul>
          <p className="text-base mb-6">
            <strong>Visit us:</strong> 975 N Lincoln St, Suite 205C, Denver, CO 80203<br />
            <strong>Call:</strong> (720) 900-9342<br />
            <strong>Book your appointment:</strong> <a href="/appointments" className="text-blue-600 underline">Book in English</a> | <a href="/es/programar-cita" className="text-blue-600 underline">Reserva en español</a>
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Building Trust Through Bilingual Service
          </h2>
          <p className="text-base text-justify mb-8">
            For many families, DNA testing represents clarity, closure, or a new beginning. 
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we believe language should never stand 
            in the way of truth. Book your test today and experience compassionate, bilingual 
            DNA testing that Denver families trust.
          </p>

          <div className="mt-6">
            <a
              href="/appointments"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now in English
            </a>
            <a
              href="/es/programar-cita"
              className="inline-block bg-gray-200 text-gray-900 px-6 py-3 ml-4 rounded-lg hover:bg-gray-300 transition"
            >
              Reserva tu prueba en español
            </a>
          </div>

          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share This Article</h3>
              <p className="text-gray-600 mb-6">Help other families find bilingual DNA testing resources</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver" 
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium">Facebook</span>
                </a>
                
                <a 
                  href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver&text=Why%20Bilingual%20DNA%20Testing%20Matters" 
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-medium">X / Twitter</span>
                </a>

                <a 
                  href="mailto:?subject=Why%20Bilingual%20DNA%20Testing%20Matters%20-%20Mile%20High%20DNA%20Testing&body=Check%20out%20this%20article%20about%20bilingual%20DNA%20testing%20in%20Denver:%0A%0Ahttps://milehighdnatesting.com/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver%0A%0AThis%20article%20explains%20why%20bilingual%20DNA%20testing%20is%20important%20for%20families%20in%20Denver%20and%20how%20it%20bridges%20language%20gaps." 
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </CornerLayout>

      <section className="w-full">
        <ServingColorado />
        <CallToAction />
        <p className="text-center text-sm text-gray-600 mt-6">
  Mile High DNA Testing provides bilingual DNA testing services for families across Denver, Aurora, and Lakewood.
  Our English and Spanish DNA tests include legal, non-legal, and immigration options.
</p>
      </section>
    </>
  );
}

