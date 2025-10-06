import SiblingshipHero from '../components/siblingship/SiblingshipHero';
import SiblingshipPricing from '../components/siblingship/SiblingshipPricing';
import SiblingshipOverview from '../components/siblingship/SiblingshipOverview';
import SiblingshipTypes from '../components/siblingship/SiblingshipTypes';
import SiblingshipWhenToUse from '../components/siblingship/SiblingshipWhenToUse';
import SiblingshipSteps from '../components/siblingship/SiblingshipSteps';
import SiblingshipLegalVsNonLegal from '../components/siblingship/SiblingshipLegalVsNonLegal';
import SiblingshipWhyChooseUs from '../components/siblingship/SiblingshipWhyChooseUs';
import SiblingshipTestimonials from '../components/siblingship/SiblingshipTestimonials';
import SiblingshipContact from '../components/siblingship/SiblingshipContact';
import SiblingshipLegalNote from '../components/siblingship/SiblingshipLegalNote';
import siblingshipHero from "../assets/images/siblingship-hero.png";
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/siblingship/CallToAction';
import { Helmet } from 'react-helmet';

const Siblingship = () => {
  return (
    <main>
<Helmet>
  <html lang="en" />
  <title>Sibling DNA Test in Denver, CO | Legal & Non-Legal Relationship Testing – Mile High DNA</title>
  <meta 
    name="description" 
    content="Confirm sibling relationships with our AABB-accredited DNA testing in Denver, Aurora, Thornton, and Lakewood Colorado. Legal and non-legal sibling DNA tests with fast, confidential results accepted for court and immigration use."
  />
  <meta 
    name="keywords" 
    content="sibling DNA test Denver, half sibling DNA test Colorado, brother sister DNA testing, legal sibling DNA test, AABB DNA test Colorado"
  />
  <link rel="canonical" href="https://milehighdnatesting.com/siblingship-dna-tests" />
  <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/pruebas-de-adn-de-hermanos" />

  {/* Open Graph */}
  <meta property="og:title" content="Sibling DNA Test in Denver, CO | Legal & Non-Legal Relationship Testing" />
  <meta property="og:description" content="AABB-accredited sibling DNA testing in Denver, CO. Legal and non-legal testing for full, half, or no biological relation. Fast, confidential results." />
  <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://milehighdnatesting.com/siblingship-dna-tests" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sibling DNA Test in Denver, CO" />
  <meta name="twitter:description" content="Confirm sibling relationships with accurate, AABB-accredited DNA testing in Denver, CO." />
  <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Sibling DNA Testing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Mile High DNA Testing",
        "url": "https://milehighdnatesting.com/siblingship-dna-tests",
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
        "url": "https://milehighdnatesting.com/siblingship-dna-tests",
        "availability": "https://schema.org/InStock"
      },
      "additionalType": "https://schema.org/MedicalTest",
      "description": "AABB-accredited sibling DNA testing in Denver, CO for legal and non-legal purposes. Accurate, confidential, and fast results accepted by courts and immigration authorities."
    })}
  </script>
</Helmet>

      <SiblingshipHero 
        title="Sibling DNA Test | Relationship DNA Testing in Denver, Aurora & Lakewood"
        subtitle="AABB-accredited sibling DNA testing in Denver, Aurora, and Lakewood. Legal and non-legal options to confirm biological relationships for family, court, or immigration needs."
      />
      <SiblingshipPricing />
      <SiblingshipOverview />
      <SiblingshipTypes />
      <SiblingshipWhenToUse />
      <SiblingshipSteps />
      <SiblingshipLegalVsNonLegal />
      <SiblingshipWhyChooseUs />
      <SiblingshipTestimonials />
      <ServingColorado />
      <CallToAction />
      <SiblingshipLegalNote />
    </main>
  );
};

export default Siblingship;
