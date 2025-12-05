import GrandparentageHero from '../components/grandparentage/GrandparentageHero';
import GrandparentagePricing from '../components/grandparentage/GrandparentagePricing';
import GrandparentageOverview from '../components/grandparentage/GrandparentageOverview';
import GrandparentageWhoNeedsTest from '../components/grandparentage/GrandparentageWhoNeedsTest';
import GrandparentageSteps from '../components/grandparentage/GrandparentageSteps';
import GrandparentageLegalVsNonLegal from '../components/grandparentage/GrandparentageLegalVsNonLegal';
import GrandparentageWhyChooseUs from '../components/grandparentage/GrandparentageWhyChooseUs';
import GrandparentageTestimonial from '../components/grandparentage/GrandparentageTestimonial';
import GrandparentageContact from '../components/grandparentage/GrandparentageContact';
import GrandparentageCompliance from '../components/grandparentage/GrandparentageCompliance';
import grandparentageHero from '../assets/images/grandparentage-hero.png';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/grandparentage/CallToAction';
import { Helmet } from 'react-helmet-async';


const GrandparentagePage = () => {
  return (
    <main>
<Helmet>
  <html lang="en" />
  <title>Grandparent DNA Test in Denver, CO | Legal & Non-Legal Testing – Mile High DNA</title>
  <meta
    name="description"
    content="Accurate, AABB-accredited grandparent DNA testing in Denver, Aurora, Thornton, & Lakewood Colorado. Court-admissible and peace-of-mind options available. Fast results and confidential support for families across Colorado."
  />
  <meta
    name="keywords"
    content="grandparent DNA test Denver, grandparentage DNA test Colorado, legal grandparent DNA test, court admissible DNA testing, family relationship DNA Denver"
  />
  <link rel="canonical" href="https://milehighdnatesting.com/grandparentage-dna-tests" />
  <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/pruebas-de-adn-de-abuelos" />

  {/* Open Graph */}
  <meta property="og:title" content="Grandparent DNA Test in Denver, CO | Legal & Non-Legal Testing" />
  <meta property="og:description" content="AABB-accredited grandparent DNA testing in Denver, CO. Legal and non-legal testing with fast, confidential results." />
  <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://milehighdnatesting.com/grandparentage-dna-tests" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Grandparent DNA Test in Denver, CO" />
  <meta name="twitter:description" content="Fast, confidential, and AABB-accredited grandparent DNA testing in Denver, CO." />
  <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

  {/* LocalBusiness + WebPage Schema */}
  <script type="application/ld+json">
    {JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://milehighdnatesting.com/grandparentage-dna-tests#dna-testing-denver",
        "name": "Mile High DNA Testing",
        "image": "https://milehighdnatesting.com/logo.png",
        "url": "https://milehighdnatesting.com/grandparentage-dna-tests",
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
        "@id": "https://milehighdnatesting.com/grandparentage-dna-tests#webpage",
        "url": "https://milehighdnatesting.com/grandparentage-dna-tests",
        "name": "Grandparent DNA Test in Denver, CO | Legal & Non-Legal Testing – Mile High DNA",
        "description": "Accurate, AABB-accredited grandparent DNA testing in Denver, Aurora, Thornton, & Lakewood Colorado. Court-admissible and peace-of-mind options available. Fast results and confidential support for families across Colorado.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Mile High DNA Testing",
          "url": "https://milehighdnatesting.com"
        }
      }
    ])}
  </script>
</Helmet>

      <GrandparentageHero />
      <GrandparentagePricing />
      <GrandparentageOverview />
      <GrandparentageWhoNeedsTest />
      <GrandparentageSteps />
      <GrandparentageLegalVsNonLegal />
      <GrandparentageWhyChooseUs />
      <GrandparentageTestimonial />
      <ServingColorado />
      <CallToAction />
      <GrandparentageCompliance />
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/grandparentage-dna-tests" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/grandparentage-dna-tests&text=Grandparent%20DNA%20Test%20in%20Denver" 
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
            href="mailto:?subject=Grandparent%20DNA%20Test%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/grandparentage-dna-tests" 
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

export default GrandparentagePage;
