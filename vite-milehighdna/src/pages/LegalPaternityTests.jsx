import React from "react";
import HeroSection from "../components/common/HeroSection";
import ServiceOverview from "../components/legalPaternity/ServiceOverview";
import HowItWorks from "../components/legalPaternity/HowItWorks";
import LegalUseCases from "../components/legalPaternity/LegalUseCases";
import Testimonial from "../components/legalPaternity/Testimonial";
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
    content="Get a fast, confidential, and AABB-accredited legal paternity test in Denver, Aurora, Thornton, & Lakewood Colorado. Court-admissible results for child custody, child support, and legal documentation — results ready in 2–5 business days."
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

  {/* New LocalBusiness + Service Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Legal Paternity DNA Testing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Mile High DNA Testing",
        "image": "https://milehighdnatesting.com/images/banner-1200.png",
        "url": "https://milehighdnatesting.com/legal-paternity-tests",
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
      "areaServed": ["Denver", "Aurora", "Lakewood", "Westminster", "Thornton"],
      "offers": {
        "@type": "Offer",
        "price": "349.00",
        "priceCurrency": "USD",
        "url": "https://milehighdnatesting.com/legal-paternity-tests",
        "availability": "https://schema.org/InStock"
      }
    })}
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
              ✅ Fast Turnaround (2–5 Business Days)
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
              "Get your certified results in 2–5 business days, admissible in court."
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

      {/* TESTIMONIAL */}
      <Testimonial
        quote="The process was smooth and professional. Results were delivered quickly and accepted in court with no issues."
        author="Sarah J."
        role="Mother in Denver, CO"
      />

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
    </main>
  );
};

export default LegalPaternityPage;
