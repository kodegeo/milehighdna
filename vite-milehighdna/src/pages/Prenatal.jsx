import React from 'react';
import { Helmet } from 'react-helmet';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/prenatal/CallToAction';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQ/FAQSection';
import PrenatalHero from '../components/prenatal/PrenatalHero';
import PrenatalOverview from '../components/prenatal/PrenatalOverview';
import PrenatalPricing from '../components/prenatal/PrenatalPricing';
import PrenatalWhyChooseUs from '../components/prenatal/PrenatalWhyChooseUs';
import PrenatalWhoNeedsTest from '../components/prenatal/PrenatalWhoNeedsTest';
import PrenatalSteps from '../components/prenatal/PrenatalSteps';
import PrenatalFAQ from '../components/prenatal/PrenatalFAQ';

const Prenatal = () => {
  return (
    <main>
      <Helmet>
        <title>Non-Invasive Prenatal DNA Test in Denver, CO | Safe & Accurate from 7 Weeks – Mile High DNA</title>
        <meta
          name="description"
          content="Experience Denver’s trusted, non-invasive prenatal DNA test from 7 weeks. Safe for mother and baby, AABB-accredited, and court-admissible. Serving Denver, Aurora, Thornton & Lakewood. Schedule your test today."
        />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Prenatal DNA Test in Denver | Mile High DNA Testing" />
        <meta
          property="og:description"
          content="Safe and accurate prenatal paternity testing in Denver, Aurora & Lakewood. Non-invasive, AABB-accredited labs. Results in 7–10 days. Schedule your test today."
        />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/prenatal-dna-test" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prenatal DNA Test Denver | Non-Invasive Paternity Testing" />
        <meta
          name="twitter:description"
          content="Denver’s trusted provider of non-invasive prenatal DNA tests. Accurate, court-admissible, and AABB-accredited. Results in 7–10 days."
        />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://milehighdnatesting.com/prenatal-dna-test" />

          {/* MedicalBusiness schema for local SEO */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Mile High DNA Testing",
              "image": "https://milehighdnatesting.com/logo.png",
              "@id": "https://milehighdnatesting.com",
              "url": "https://milehighdnatesting.com/prenatal-dna-test",
              "telephone": "+1-720-900-9342",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "975 N Lincoln St, Suite 205C",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80203",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.7313,
                "longitude": -104.985
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday","Sunday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/milehighdnatesting",
                "https://www.instagram.com/milehighdnatesting"
              ],
              "serviceOffered": {
                "@type": "MedicalTest",
                "name": "Non-Invasive Prenatal Paternity Test",
                "description": "Safe, accurate prenatal paternity DNA test in Denver with results as early as 7 weeks. Legal ($1,799) and Peace of Mind ($1,599) options available.",
                "areaServed": {
                  "@type": "Country",
                  "name": "United States"
                }
              }
            }
            `}
          </script>

          {/* FAQ schema for rich snippets */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where can I get a prenatal DNA test in Denver?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can schedule your appointment at our Denver office (975 N Lincoln St, Suite 205C) or request mobile testing in the Denver metro area."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to be in Denver to take this test?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We can coordinate testing nationwide (except New York), making it convenient for families outside of Colorado."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if the mother and alleged father live in different states?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We arrange separate-location testing so both parties can collect samples locally. All samples are securely tracked and analyzed by our AABB-accredited lab."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer mobile testing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Mobile testing is available in the Denver metro area for your convenience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can more than one alleged father be tested?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Multiple alleged fathers can be tested. Ask us about this option when scheduling your appointment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does the test cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Peace of Mind test is $1,599, while the Legal (court-admissible) test is $1,799. Additional service options may include a fee. Pricing is always transparent with no hidden charges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the test safe for my baby?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The test only requires a blood draw from the mother and a cheek swab from the alleged father. There is no risk to the pregnancy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How early can the test be done?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our non-invasive prenatal DNA test can be performed as early as 7 weeks into pregnancy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to get results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Results are typically available in 7–10 business days. Expedited options may be available upon request."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can results be used in court?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. If you select the Legal Prenatal Test ($1,799), your results include notarized documentation and a verified chain of custody, making them admissible in court."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where are you located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We are located at 975 N Lincoln St, Suite 205C, Denver, CO 80203. We proudly serve families across Denver, Aurora, Lakewood, and the surrounding Colorado communities."
                  }
                }
              ]
            }
            `}
          </script>

      </Helmet>

      <PrenatalHero />
      <PrenatalPricing />
      <PrenatalOverview />
      <PrenatalWhoNeedsTest />
      <PrenatalSteps />
      <PrenatalWhyChooseUs />
      <PrenatalFAQ />
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default Prenatal; 