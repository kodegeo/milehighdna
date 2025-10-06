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

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Grandparent DNA Testing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Mile High DNA Testing",
        "url": "https://milehighdnatesting.com/grandparentage-dna-tests",
        "image": "https://milehighdnatesting.com/images/banner-1200.png",
        "telephone": "+1-720-900-9342",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "700 N Colorado Blvd Suite 574",
          "addressLocality": "Denver",
          "addressRegion": "CO",
          "postalCode": "80206",
          "addressCountry": "US"
        }
      },
      "areaServed": ["Denver", "Aurora", "Lakewood", "Colorado Springs"],
      "offers": {
        "@type": "Offer",
        "price": "299.00",
        "priceCurrency": "USD",
        "url": "https://milehighdnatesting.com/grandparentage-dna-tests",
        "availability": "https://schema.org/InStock"
      },
      "additionalType": "https://schema.org/MedicalTest",
      "description": "AABB-accredited grandparent DNA testing in Denver, CO for both legal and non-legal cases. Accurate, confidential, and court-admissible results."
    })}
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
    </main>
  );
};

export default GrandparentagePage;
