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
          Legal Paternity Test Denver | Court-Admissible DNA Testing in Colorado
        </title>
        <meta
          name="description"
          content="Court-admissible legal paternity testing in Denver, Aurora, and Lakewood. AABB-accredited labs, same-day appointments, and results in 2–5 business days."
        />
        <meta
          property="og:title"
          content="Legal Paternity Test in Denver | Court-Admissible Results"
        />
        <meta
          property="og:description"
          content="Fast, confidential, and AABB-accredited DNA testing for custody, child support, and birth certificate cases. Serving Denver, Aurora, Lakewood, and all of Colorado."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/legal-paternity-tests"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />

        {/* FAQ Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does a legal paternity test take in Denver?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most results are ready in 2–5 business days after sample collection in our Denver office."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I schedule a legal DNA test in Aurora, Colorado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can schedule online or by phone. Our Denver office serves Aurora families daily with AABB-accredited, court-admissible testing."
                }
              },
              {
                "@type": "Question",
                "name": "Is legal DNA testing available in Lakewood, CO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Many Lakewood families use our Denver location for legal DNA testing. Results are admissible in Colorado courts and ready within 2–5 business days."
                }
              },
              {
                "@type": "Question",
                "name": "Do you serve clients in Westminster, Colorado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Westminster clients can easily access our Denver office for professional sample collection. Results are fully court-admissible across Colorado."
                }
              },
              {
                "@type": "Question",
                "name": "Is legal DNA testing available for families in Thornton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Thornton families are regularly served at our Denver office. All results are processed by AABB-accredited labs and accepted by Colorado courts."
                }
              },
              {
                "@type": "Question",
                "name": "Are Mile High DNA Testing results court-admissible?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all tests follow strict chain-of-custody procedures and are processed by AABB-accredited labs, making them fully admissible in court."
                }
              }
            ]
          }
          `}</script>
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
