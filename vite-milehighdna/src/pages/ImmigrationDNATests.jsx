import React from "react";
import HeroSection from "../components/common/HeroSection";
import Pricing from "../components/immigration/Pricing";
import Overview from "../components/immigration/Overview";
import Steps from "../components/immigration/Steps";
import WhoNeedsTest from "../components/immigration/WhoNeedsThis";
import WhyChooseUs from "../components/immigration/WhyChooseUs";
import Testimonials from "../components/immigration/Testimonials";
import Contact from "../components/immigration/Contact";
import Compliance from "../components/immigration/Compliance";
import immigrationHero from "../assets/images/immigration-hero.png";
import ServingColorado from "../components/common/ServingColorado";
import CallToAction from "../components/immigration/CallToAction";
import { Helmet } from "react-helmet-async";

const ImmigrationDNA = () => {
  return (
    <main>
      <Helmet>
        <title>Immigration DNA Testing in Denver | USCIS & Embassy-Compliant</title>

        <meta
          name="description"
          content="AABB-accredited immigration DNA testing in Denver. USCIS-compliant testing for visas, green card petitions, and embassy requests. Fast, accurate, and secure DNA results accepted worldwide."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="USCIS-Approved Immigration DNA Testing in Denver | Fast & Accurate"
        />
        <meta
          property="og:description"
          content="Need an immigration DNA test for USCIS, embassies, or visa cases? Our AABB-accredited laboratory provides fast and fully compliant results."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/immigration-dna-tests"
        />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://milehighdnatesting.com/immigration-dna-tests"
        />

        {/* LocalBusiness + WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://milehighdnatesting.com/immigration-dna-tests#dna-testing-denver",
              "name": "Mile High DNA Testing",
              "url": "https://milehighdnatesting.com/immigration-dna-tests",
              "image": "https://milehighdnatesting.com/logo.png",
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
              "@id": "https://milehighdnatesting.com/immigration-dna-tests#webpage",
              "url": "https://milehighdnatesting.com/immigration-dna-tests",
              "name": "Immigration DNA Testing in Denver | USCIS & Embassy-Compliant",
              "description": "AABB-accredited immigration DNA testing in Denver. USCIS-compliant testing for visas, green card petitions, and embassy requests. Fast, accurate, and secure DNA results accepted worldwide.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Mile High DNA Testing",
                "url": "https://milehighdnatesting.com"
              }
            }
          ])}
        </script>
      </Helmet>

      <HeroSection
        title="USCIS-Compliant Immigration DNA Testing"
        subtitle="AABB-accredited immigration DNA testing in Denver for USCIS, embassies, and visa cases. We coordinate directly with immigration authorities for secure delivery of results."
        imageUrl={immigrationHero}
        buttonText="Schedule Your Test"
        buttonLink="https://calendly.com/milehighdnatesting/immigration"
        secondaryButtonText="Call Now"
        secondaryButtonLink="tel:7209009342"
      />

      <Pricing />
      <Overview />
      <Steps />
      <WhoNeedsTest />
      <WhyChooseUs />
      <Testimonials />
      <ServingColorado />
      <CallToAction />
      <Compliance />
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/immigration-dna-tests" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/immigration-dna-tests&text=Immigration%20DNA%20Testing%20in%20Denver" 
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
            href="mailto:?subject=Immigration%20DNA%20Testing%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/immigration-dna-tests" 
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

export default ImmigrationDNA;
