import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Components
import HeroSection from '../../components/common/HeroSection';
import Pricing from '../../components/immigration/Pricing';
import Overview from '../../components/immigration/Overview';
import USCISRelationshipTesting from '../../components/immigration/USCISRelationshipTesting';
import ProcessCompliance from '../../components/immigration/ProcessCompliance';
import StreamlinedServices from '../../components/immigration/StreamlinedServices';
import WhatYoullNeed from '../../components/immigration/WhatYoullNeed';
import Steps from '../../components/immigration/Steps';
import WhoNeedsTest from '../../components/immigration/WhoNeedsThis';
import WhyChooseUs from '../../components/immigration/WhyChooseUs';
import Compliance from '../../components/immigration/Compliance';
import ImportantInfoAndHelp from '../../components/immigration/ImportantInfoAndHelp';
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
                  "text": "Immigration DNA testing verifies biological relationships for visa, passport, and citizenship cases when required by USCIS or U.S. Embassies and Consulates. All testing is conducted through an AABB-accredited laboratory under strict USCIS chain-of-custody procedures to ensure legal admissibility."
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
                  "text": "Timeline varies by case requirements, international coordination, and laboratory processing. After you submit the referral form, our AABB-accredited lab partner will provide case-specific timelines and next steps."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use a regular DNA test for immigration purposes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Immigration DNA testing must be initiated through an AABB-accredited laboratory and follow strict USCIS and U.S. Department of State compliance requirements. Regular DNA tests are not accepted for immigration purposes."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Immigration DNA Testing for USCIS and U.S. Embassies"
        subtitle="USCIS-compliant DNA testing with an AABB-accredited lab partner. Local DNA collections in Denver with worldwide coordination for family members living abroad."
        imageUrl={immigrationHero}
        buttonText="Get Started Today"
        buttonLink="https://ufclab.forms-db.com/view.php?id=10429"
        secondaryButtonText="Call Now"
        secondaryButtonLink="tel:+17209009342"
      />

      {/* Overview */}
      <Overview />

      {/* USCIS-Approved Relationship Testing */}
      <USCISRelationshipTesting />

      {/* Make Your Immigration Process Easier */}
      <ProcessCompliance />

      {/* Streamlined Immigration DNA Testing Services */}
      <StreamlinedServices />

      {/* What You'll Need Before Getting Started */}
      <WhatYoullNeed />

      {/* Steps */}
      <Steps />

      {/* Important Information & Need Assistance */}
      <ImportantInfoAndHelp />


      {/* TESTIMONIALS */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A3C59] text-center mb-10">What Our Clients Say</h2>
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
                    <h4 className="font-semibold text-lg text-[#1A3C59]">{testimonial.name}</h4>
                    <p className="text-base text-gray-600">{testimonial.role}</p>
                  </div>
                  <p className="text-base text-gray-700 flex-grow leading-relaxed">{testimonial.text}</p>
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
      
      {/* Social Share Block */}
      <div className="py-10 md:py-12 px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-[#1A3C59] mb-4 text-center">Share This Page</h3>
          <p className="text-center text-base text-gray-600 mb-6 leading-relaxed">Help others find reliable immigration DNA testing in Denver.</p>
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
      </div>
    </main>
  );
};

export default ImmigrationDNATesting;
