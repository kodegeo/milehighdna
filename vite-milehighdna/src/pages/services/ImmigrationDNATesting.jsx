import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Components
import HeroSection from '../../components/common/HeroSection';
import Pricing from '../../components/immigration/Pricing';
import Overview from '../../components/immigration/Overview';
import Steps from '../../components/immigration/Steps';
import WhoNeedsTest from '../../components/immigration/WhoNeedsThis';
import WhyChooseUs from '../../components/immigration/WhyChooseUs';
import Compliance from '../../components/immigration/Compliance';
import ServingColorado from '../../components/common/ServingColorado';
import CallToAction from '../../components/immigration/CallToAction';

// Assets
import immigrationHero from '../../assets/images/immigration-hero.png';

const ImmigrationDNATesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Immigration DNA Testing in Denver | USCIS-Compliant DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="AABB-accredited immigration DNA testing in Denver for USCIS, embassy, and consular cases. Fast, accurate results accepted worldwide. Schedule your immigration DNA test today."
        />
        <meta
          name="keywords"
          content="immigration DNA testing Denver, USCIS DNA test, embassy DNA testing Colorado, AABB accredited immigration DNA, visa DNA test Denver"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/immigration-dna-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Immigration DNA Testing in Denver | USCIS-Compliant DNA Test" />
        <meta property="og:description" content="AABB-accredited immigration DNA testing for USCIS, embassy, and consular cases. Fast, accurate results accepted worldwide." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/immigration-dna-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Immigration DNA Testing in Denver | USCIS-Compliant" />
        <meta name="twitter:description" content="AABB-accredited immigration DNA testing for USCIS and embassy cases." />
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
                "name": "Immigration DNA Testing",
                "item": "https://milehighdnatesting.com/services/immigration-dna-testing"
              }
            ]
          })}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://milehighdnatesting.com/services/immigration-dna-testing#business",
            "name": "Mile High DNA Testing",
            "url": "https://milehighdnatesting.com/services/immigration-dna-testing",
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
                "name": "What is immigration DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Immigration DNA testing is a specialized process that verifies biological relationships for USCIS, embassy, and consular cases. Testing must be conducted through an AABB-accredited laboratory and follow strict protocols required for immigration applications."
                }
              },
              {
                "@type": "Question",
                "name": "Is immigration DNA testing required for all visa applications?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Immigration DNA testing is typically requested by USCIS, embassies, or consulates when documentation is insufficient to establish a biological relationship. The requesting agency will specify if DNA testing is required for your case."
                }
              },
              {
                "@type": "Question",
                "name": "How long does immigration DNA testing take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Immigration DNA testing involves coordination with an AABB-accredited laboratory and may include international sample collection. Timeline varies based on case requirements, laboratory processing, and any international coordination needed."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use a regular DNA test for immigration purposes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Immigration cases require testing through an AABB-accredited laboratory with specific documentation and chain-of-custody procedures. Regular DNA tests are not accepted for immigration purposes."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="USCIS-Compliant Immigration DNA Testing"
        subtitle="AABB-accredited immigration DNA testing in Denver for USCIS, embassies, and visa cases. We coordinate directly with immigration authorities for secure delivery of results."
        imageUrl={immigrationHero}
        buttonText="Schedule Your Test"
        buttonLink="https://calendly.com/milehighdnatesting/immigration"
        secondaryButtonText="Call Now"
        secondaryButtonLink="tel:7209009342"
      />

      {/* Pricing */}
      <Pricing />

      {/* Overview */}
      <Overview />

      {/* Steps */}
      <Steps />

      {/* Who Needs This Test */}
      <WhoNeedsTest />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* TESTIMONIALS */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            {[
              {
                name: 'Yasmin',
                role: 'Mother in Denver, CO',
                text: "We had such a wonderful experience with Mile High DNA Testing! The process was honestly overwhelming for our family, but Cynthia made everything simple, and clear from the very beginning. She went above and beyond to make sure we understood each step and felt supported the whole time. You can tell Cynthia truly cares about families going through immigration. We were treated with kindness, patience, and compassion. Everything was professional, quick, and handled with so much care. I'm really grateful for her help and would absolutely recommend her and Mile High DNA Testing to anyone needing immigration DNA testing. Thank you so much for supporting us during such an important moment.",
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
      <Compliance />

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
                  What is immigration DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Immigration DNA testing is a specialized process that verifies biological relationships for USCIS, embassy, and consular cases. Testing must be conducted through an AABB-accredited laboratory and follow strict protocols required for immigration applications.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Is immigration DNA testing required for all visa applications?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  No. Immigration DNA testing is typically requested by USCIS, embassies, or consulates when documentation is insufficient to establish a biological relationship. The requesting agency will specify if DNA testing is required for your case.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How long does immigration DNA testing take?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Immigration DNA testing involves coordination with an AABB-accredited laboratory and may include international sample collection. Timeline varies based on case requirements, laboratory processing, and any international coordination needed.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can I use a regular DNA test for immigration purposes?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  No. Immigration cases require testing through an AABB-accredited laboratory with specific documentation and chain-of-custody procedures. Regular DNA tests are not accepted for immigration purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/services/immigration-dna-testing" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/services/immigration-dna-testing&text=Immigration%20DNA%20Testing%20in%20Denver" 
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
            href="mailto:?subject=Immigration%20DNA%20Testing%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/services/immigration-dna-testing" 
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

export default ImmigrationDNATesting;
