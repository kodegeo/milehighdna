import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/prenatal/CallToAction';
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

          {/* LocalBusiness + WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://milehighdnatesting.com/prenatal-dna-test#dna-testing-denver",
                "name": "Mile High DNA Testing",
                "image": "https://milehighdnatesting.com/logo.png",
                "url": "https://milehighdnatesting.com/prenatal-dna-test",
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
                "@id": "https://milehighdnatesting.com/prenatal-dna-test#webpage",
                "url": "https://milehighdnatesting.com/prenatal-dna-test",
                "name": "Non-Invasive Prenatal DNA Test in Denver, CO | Safe & Accurate from 7 Weeks – Mile High DNA",
                "description": "Experience Denver's trusted, non-invasive prenatal DNA test from 7 weeks. Safe for mother and baby, AABB-accredited, and court-admissible. Serving Denver, Aurora, Thornton & Lakewood. Schedule your test today.",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "Mile High DNA Testing",
                  "url": "https://milehighdnatesting.com"
                }
              }
            ])}
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
      {/* TESTIMONIALS */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            {[
              {
                name: 'Rosie Sanchez',
                role: 'Mother in Denver, CO',
                text: [
                  "I recently got a non-invasive prenatal paternity test here, and I couldn't be happier with the entire experience. The staff was on it from start to finish. A few days before my appointment, they sent me an email with clear instructions on how to prepare before and after the test, which helped calm my nerves and made everything so much easier.",
                  "The owner was incredibly communicative throughout the whole process, always making sure I knew what to expect. We even received our results faster than expected. The results were AABB accredited and can be used for court, which gave me so much peace of mind.",
                  "The customer service alone is worth every penny. I felt like I was in great hands the whole time, and the staff made me feel so comfortable during the appointment. Such a sweet and caring team. Highly recommend!"
                ],
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
                  <div className="flex-grow">
                    {testimonial.text.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">{testimonial.source}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ServingColorado />
      <CallToAction />
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/prenatal-dna-test" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/prenatal-dna-test&text=Non-Invasive%20Prenatal%20DNA%20Test%20in%20Denver" 
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
            href="mailto:?subject=Non-Invasive%20Prenatal%20DNA%20Test%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/prenatal-dna-test" 
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

export default Prenatal; 