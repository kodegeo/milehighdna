import React from 'react';
import HeroSection from '../components/appointments/HeroSection';
import FreeConsultationSection from '../components/appointments/FreeConsultationSection';
import ScheduleTestSection from '../components/appointments/ScheduleTestSection';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';


const Appointments = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title> Book a DNA Test in Denver, CO | Legal & Prenatal (NIPP) Appointments – Mile High DNA</title>
        <meta 
          name="description" 
          content="Schedule your legal, peace of mind, or prenatal DNA test in Denver, Aurora, Thornton & Lakewood Colorado today. Mile High DNA Testing offers same-day appointments, AABB-accredited labs, and results accepted for court cases." 
        />
        <meta name="keywords" 
        content="DNA testing appointment Denver, book paternity test, legal DNA testing Colorado, non invasive prenatal paternity appointment DNA testing Denver" />

        <link rel="canonical" href="https://milehighdnatesting.com/appointments" />
        <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/citas" />
        <link rel="alternate" hreflang="en" href="https://milehighdnatesting.com/appointments" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "DNA Testing Appointments",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Mile High DNA Testing",
              "image": "https://milehighdnatesting.com/images/family-dna-hero.png",
              "url": "https://milehighdnatesting.com/appointments",
              "telephone": "+1-720-900-9342",
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
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://milehighdnatesting.com/appointments",
              "availableLanguage": ["English", "Spanish"]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "DNA Testing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Avuncular DNA Testing (Aunt / Uncle)",
                    "description": "Avuncular DNA testing helps determine a biological relationship between a child and an alleged aunt or uncle when a parent is unavailable for testing. This option is commonly used when a mother or father cannot participate but extended family members are available.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Mile High DNA Testing",
                      "image": "https://milehighdnatesting.com/images/family-dna-hero.png",
                      "url": "https://milehighdnatesting.com/appointments",
                      "telephone": "+1-720-900-9342",
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
                    "availableChannel": {
                      "@type": "ServiceChannel",
                      "serviceUrl": "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment",
                      "availableLanguage": ["English", "Spanish"]
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infidelity DNA Testing",
                    "description": "Infidelity DNA testing provides discreet analysis using personal items or DNA samples to help confirm or exclude biological relationships. This testing is conducted with strict confidentiality and sensitivity, making it suitable for private, non-court use situations.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Mile High DNA Testing",
                      "image": "https://milehighdnatesting.com/images/family-dna-hero.png",
                      "url": "https://milehighdnatesting.com/appointments",
                      "telephone": "+1-720-900-9342",
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
                    "availableChannel": {
                      "@type": "ServiceChannel",
                      "serviceUrl": "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment",
                      "availableLanguage": ["English", "Spanish"]
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Immigration DNA Testing (AABB-Accredited Lab Contact Request)",
                    "description": "This appointment initiates a USCIS-compliant immigration DNA test through an AABB-accredited laboratory. It includes coordination of case requirements, documentation guidance, and proper sample collection procedures required for immigration cases.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Mile High DNA Testing",
                      "image": "https://milehighdnatesting.com/images/family-dna-hero.png",
                      "url": "https://milehighdnatesting.com/appointments",
                      "telephone": "+1-720-900-9342",
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
                    "availableChannel": {
                      "@type": "ServiceChannel",
                      "serviceUrl": "https://calendly.com/milehighdnatesting/immigration",
                      "availableLanguage": ["English", "Spanish"]
                    }
                  }
                }
              ]
            }
          })}
          </script>

      </Helmet>

      <HeroSection
      title="Book a DNA Test or Contact Our Team | Mile High DNA | Denver, Aurora, Lakewood"
      subtitle="Schedule an appointment online or speak with a DNA specialist. We offer paternity, immigration, siblingship, and grandparentage testing — with flexible and same-day availability."
      />



      <ScheduleTestSection />
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default Appointments; 