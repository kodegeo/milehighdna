import React from "react";
import HeroSection from "../components/common/HeroSection";
import ServiceOverview from "../components/legalPaternity/ServiceOverview";
import HowItWorks from "../components/legalPaternity/HowItWorks";
import LegalUseCases from "../components/legalPaternity/LegalUseCases";
import CallToAction from "../components/legalPaternity/CallToAction";
import legalHero from "../assets/images/legal_hero.png";
import Pricing from "../components/legalPaternity/Pricing";
import ServingColorado from "../components/common/ServingColorado";
import Compliance from "../components/legalPaternity/Compliance";
import { Helmet } from "react-helmet-async";

const LegalPaternityPage = () => {
  return (
    <main>
<Helmet>
  <html lang="en" />
  <title>
    Court-Admissible Legal Paternity Test in Denver, CO | Fast, AABB-Accredited DNA Results – Mile High DNA
  </title>
  <meta
    name="description"
    content="Get a fast, confidential, and AABB-accredited legal paternity test in Denver, Aurora, Thornton, & Lakewood Colorado. Court-admissible results for child custody, child support, and legal documentation — results ready in 3–5 business days."
  />
  <meta
    name="keywords"
    content="legal paternity test Denver, court-admissible DNA testing Colorado, AABB-accredited paternity test, legal DNA results, child custody DNA test Denver"
  />
  <link rel="canonical" href="https://milehighdnatesting.com/legal-paternity-tests" />
  <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/pruebas-de-paternidad-legales" />
  <link rel="alternate" hreflang="en" href="https://milehighdnatesting.com/legal-paternity-tests" />

  {/* OG / Twitter */}
  <meta property="og:title" content="Legal Paternity Test in Denver | Court-Admissible DNA Testing" />
  <meta property="og:description" content="Fast, confidential, and AABB-accredited DNA testing for custody, child support, and legal cases across Colorado." />
  <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
  <meta property="og:url" content="https://milehighdnatesting.com/legal-paternity-tests" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

  {/* Existing FAQ Schema */}
  {/* (Keep your current FAQ block as-is) */}

  {/* LocalBusiness + WebPage Schema */}
  <script type="application/ld+json">
    {JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://milehighdnatesting.com/legal-paternity-tests#dna-testing-denver",
        "name": "Mile High DNA Testing",
        "image": "https://milehighdnatesting.com/logo.png",
        "url": "https://milehighdnatesting.com/legal-paternity-tests",
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
        "@id": "https://milehighdnatesting.com/legal-paternity-tests#webpage",
        "url": "https://milehighdnatesting.com/legal-paternity-tests",
        "name": "Court-Admissible Legal Paternity Test in Denver, CO | Fast, AABB-Accredited DNA Results – Mile High DNA",
        "description": "Get a fast, confidential, and AABB-accredited legal paternity test in Denver, Aurora, Thornton, & Lakewood Colorado. Court-admissible results for child custody, child support, and legal documentation — results ready in 3–5 business days.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Mile High DNA Testing",
          "url": "https://milehighdnatesting.com"
        }
      }
    ])}
  </script>
</Helmet>
      
      {/* HERO */}
      <HeroSection
        title="Court-Admissible Legal DNA Paternity Testing in Colorado"
        subtitle="Fast, confidential, and AABB-accredited testing accepted by family courts and government agencies. Serving Denver, Aurora, Lakewood, Westminster, and surrounding communities."
        imageUrl={legalHero}
        buttonText="Book Your Legal Test"
        buttonLink="https://calendly.com/milehighdnatesting/legal-paternity-test"
        secondaryButtonText="Call Now"
        secondaryButtonLink="tel:+17209009342"
      />

      {/* QUICK BENEFITS */}
      <section className="py-10 px-6 bg-blue-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Why Choose Mile High DNA Testing?
          </h2>
          <p className="text-gray-700 mb-6">
            Trusted by Colorado families, attorneys, and agencies. Our legal DNA
            testing process is simple, fast, and fully court-admissible.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow p-4">
              ✅ Court-Admissible Results Accepted by Colorado Courts
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              ✅ Fast Turnaround (3–5 Business Days)
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              ✅ AABB-Accredited Labs with Chain of Custody
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              ✅ Confidential & Professional Service
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <Pricing />

      {/* OVERVIEW */}
      <ServiceOverview
        title="What Is Legal DNA Paternity Testing?"
        paragraphs={[
          "Legal DNA paternity testing is required when proof of parentage must meet legal standards. Courts often request it for child custody disputes, child support, and birth certificate corrections.",
          "At Mile High DNA Testing, every sample is collected under a strict chain-of-custody process and analyzed by AABB-accredited laboratories. This ensures your results are 100% valid in court.",
          "Whether you are preparing for a family court case or updating legal records, we provide professional collection, clear guidance, and fast, confidential results."
        ]}
      />

      {/* USE CASES */}
      <LegalUseCases
        title="When Is Legal Paternity Testing Required?"
        useCases={[
          {
            title: "Child Custody & Visitation",
            description:
              "Establish paternity for custody or visitation disputes across Colorado."
          },
          {
            title: "Child Support Enforcement",
            description:
              "Provide AABB-accredited proof of paternity for court-ordered child support."
          },
          {
            title: "Birth Certificate Updates",
            description:
              "Amend or add the father’s name with legally valid results."
          },
          {
            title: "Guardianship & Inheritance",
            description:
              "Confirm biological relationships for guardianship, probate, or estate cases."
          }
        ]}
      />

      {/* HOW IT WORKS */}
      <HowItWorks
        title="How the Legal DNA Process Works"
        steps={[
          {
            title: "Schedule Your Appointment",
            description:
              "Book online or call our Denver office for same-day availability."
          },
          {
            title: "Professional Sample Collection",
            description:
              "Visit our office for secure, legally documented sample collection."
          },
          {
            title: "Receive Court-Ready Results",
            description:
              "Get your certified results in 3–5 business days, admissible in court."
          }
        ]}
      />

      {/* INLINE BOOKING CTA */}
      <section className="py-12 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Ready to Book Your Legal DNA Test?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Schedule your appointment in minutes. Book online below or call us
          today for immediate assistance.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/milehighdnatesting/legal-paternity-test"
            width="100%"
            height="500"
            frameBorder="0"
            title="Schedule Legal DNA Test Appointment"
            style={{
              minHeight: "500px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb"
            }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            {[
              {
                name: 'Ilyas Ibrahim',
                role: 'Father in Denver, CO',
                text: 'Mile High DNA Testing was amazing. The team was kind, professional, and very supportive throughout our case. We truly appreciate all their help and highly recommend them.',
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

      {/* LOCAL COVERAGE */}
      <ServingColorado />

      {/* RELATED LINKS */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Other Services</h2>
        <p className="text-gray-700 mb-6">
          Looking for other types of DNA testing? Explore our{" "}
          <a
            href="/peace-of-mind-dna-tests"
            className="text-blue-600 underline"
          >
            Peace of Mind DNA Test
          </a>{" "}
          or{" "}
          <a href="/immigration-dna-tests" className="text-blue-600 underline">
            Immigration DNA Testing
          </a>
          .
        </p>
      </section>

      {/* CALL TO ACTION */}
      <CallToAction
        heading="Need Court-Admissible Results?"
        subtext="Book your appointment today for fast, confidential, and legally valid DNA testing."
        buttonText="Book Your Test Now"
        buttonLink="https://calendly.com/milehighdnatesting/legal-paternity-test"
      />

      {/* COMPLIANCE */}
      <Compliance />
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/legal-paternity-tests" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/legal-paternity-tests&text=Court-Admissible%20Legal%20Paternity%20Test%20in%20Denver" 
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
            href="mailto:?subject=Court-Admissible%20Legal%20Paternity%20Test%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/legal-paternity-tests" 
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

export default LegalPaternityPage;
