import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Grandparentage components
import GrandparentageHero from '../../components/grandparentage/GrandparentageHero';
import GrandparentagePricing from '../../components/grandparentage/GrandparentagePricing';
import GrandparentageOverview from '../../components/grandparentage/GrandparentageOverview';
import GrandparentageWhoNeedsTest from '../../components/grandparentage/GrandparentageWhoNeedsTest';
import GrandparentageSteps from '../../components/grandparentage/GrandparentageSteps';
import GrandparentageLegalVsNonLegal from '../../components/grandparentage/GrandparentageLegalVsNonLegal';
import GrandparentageWhyChooseUs from '../../components/grandparentage/GrandparentageWhyChooseUs';
import GrandparentageCompliance from '../../components/grandparentage/GrandparentageCompliance';

// Common components
import ServingColorado from '../../components/common/ServingColorado';
import CallToAction from '../../components/grandparentage/CallToAction';

const GrandparentageTesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Grandparent DNA Test in Denver, CO | Legal & Non-Legal Testing | Mile High DNA</title>
        <meta
          name="description"
          content="Accurate, AABB-accredited grandparent DNA testing in Denver, Aurora, Thornton, & Lakewood Colorado. Court-admissible and peace-of-mind options available. Fast results and confidential support."
        />
        <meta
          name="keywords"
          content="grandparent DNA test Denver, grandparentage DNA test Colorado, legal grandparent DNA test, court admissible DNA testing, family relationship DNA Denver"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/grandparentage-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Grandparent DNA Test in Denver | Legal & Non-Legal Testing" />
        <meta property="og:description" content="AABB-accredited grandparent DNA testing in Denver, CO. Legal and non-legal testing with fast, confidential results." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/grandparentage-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grandparent DNA Test in Denver, CO" />
        <meta name="twitter:description" content="Fast, confidential, and AABB-accredited grandparent DNA testing." />
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

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://milehighdnatesting.com/services/grandparentage-testing#business",
            "name": "Mile High DNA Testing",
            "url": "https://milehighdnatesting.com/services/grandparentage-testing",
            "telephone": "+1-720-900-9342",
            "priceRange": "$$",
            "image": "https://milehighdnatesting.com/logo.png",
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

      {/* Hero Section */}
      <GrandparentageHero />

      {/* Pricing */}
      <GrandparentagePricing />

      {/* Overview */}
      <GrandparentageOverview />

      {/* Who Needs Test */}
      <GrandparentageWhoNeedsTest />

      {/* Steps */}
      <GrandparentageSteps />

      {/* Legal vs Non-Legal */}
      <GrandparentageLegalVsNonLegal />

      {/* Why Choose Us */}
      <GrandparentageWhyChooseUs />

      {/* TESTIMONIALS */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            {[
              {
                name: 'Ruth Gallegos',
                role: 'Grandmother in Denver, CO',
                text: 'Very good experience felt at ease, we all felt heard and seen.',
                source: 'Google Review',
                sourceUrl: 'https://www.google.com/maps?q=Mile+High+DNA+Testing+Denver',
              }
            ].map((testimonial, index) => (
              <a 
                key={index}
                href={testimonial.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="card h-full flex flex-col p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src="/images/5-star-rating.svg" 
                      alt="5 star rating"
                      className="w-24 h-auto mb-3"
                    />
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                  <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                  <p className="text-sm text-gray-500 mt-4">{testimonial.source}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Colorado */}
      <ServingColorado />

      {/* Call To Action */}
      <CallToAction />

      {/* Compliance */}
      <GrandparentageCompliance />

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

      {/* Related Services */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600">
              Related service:{" "}
              <Link to="/services/siblingship-testing" className="underline text-blue-600">
                Siblingship Testing
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/services/grandparentage-testing" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/services/grandparentage-testing&text=Grandparent%20DNA%20Test%20in%20Denver" 
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
            href="mailto:?subject=Grandparent%20DNA%20Test%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/services/grandparentage-testing" 
            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="font-medium">Email</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default GrandparentageTesting;
