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
        <title>Legal DNA Paternity Testing | Court-Admissible Results in Denver, Aurora & Lakewood</title>
        <meta
          name="description"
          content="Get fast, confidential, and court-admissible legal DNA paternity testing in Denver, Aurora, Lakewood, and across Colorado. AABB-accredited labs for custody, child support, and birth certificate cases."
        />
        <meta property="og:title" content="Legal DNA Paternity Testing in Colorado | Court-Admissible Results" />
        <meta
          property="og:description"
          content="Court-approved, AABB-accredited DNA testing for custody, child support, and birth certificate updates. Serving Denver and all Colorado communities."
        />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/legal-paternity-tests" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      {/* HERO SECTION */}
      <HeroSection
        title="Court-Admissible Legal DNA Paternity Testing in Colorado"
        subtitle="Fast, confidential, and AABB-accredited testing accepted by Colorado family courts and government agencies. Serving Denver, Aurora, Lakewood, and nearby communities."
        imageUrl={legalHero}
        buttonText="Book Your Legal Test"
        buttonLink="https://calendly.com/milehighdnatesting/legal-paternity-test"
        secondaryButtonText="Talk to a Specialist"
        secondaryButtonLink="tel:+17209009342"
      />

      {/* INLINE QUICK BENEFITS */}
      <section className="py-10 px-6 bg-blue-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Legal Paternity Testing?</h2>
          <p className="text-gray-700 mb-6">
            We make the process simple, fast, and 100% court-admissible. Trusted by Colorado families and legal professionals.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow p-4">
              ✅ Court-Admissible Results Accepted by Colorado Family Courts
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              ✅ Fast Turnaround (2–5 Business Days)
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              ✅ AABB-Accredited Labs with Strict Chain of Custody
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              ✅ Confidential & Professional Service
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION PROMINENTLY EARLY */}
      <Pricing />

      {/* SERVICE OVERVIEW */}
      <ServiceOverview
        title="What Is Legal DNA Paternity Testing?"
        paragraphs={[
          "Legal DNA paternity testing is used when proof of biological parentage must meet strict legal standards. It’s commonly required for child custody disputes, child support cases, and birth certificate corrections.",
          "At Mile High DNA Testing, we work with AABB-accredited labs and follow a strict chain-of-custody process to ensure results are 100% valid in court and accepted by government agencies.",
          "Whether you’re preparing for a custody hearing or need definitive answers for legal purposes, we provide clear guidance, professional sample collection, and fast, confidential results."
        ]}
      />

      {/* LEGAL USE CASES */}
      <LegalUseCases
        title="When Is Legal Paternity Testing Required?"
        useCases={[
          {
            title: "Child Custody & Visitation",
            description: "Establish paternity to support custody cases anywhere in Colorado."
          },
          {
            title: "Child Support Court Orders",
            description: "Provide AABB-accredited proof of paternity for child support enforcement or court filings."
          },
          {
            title: "Birth Certificate Updates",
            description: "Amend or add the father’s name to a child’s birth certificate with legally valid results."
          },
          {
            title: "Guardianship & Legal Recognition",
            description: "Confirm biological relationships for guardianship or other legal recognitions."
          }
        ]}
      />

      {/* HOW IT WORKS */}
      <HowItWorks
        title="How the Legal DNA Process Works"
        steps={[
          {
            title: "1. Schedule Your Appointment",
            description: "Book online or call to reserve your legal paternity test appointment."
          },
          {
            title: "2. Professional Sample Collection",
            description: "Visit our Denver office for a quick, secure, and legally documented collection."
          },
          {
            title: "3. Receive Court-Ready Results",
            description: "Get your court-admissible results within 2–4 business days."
          }
        ]}
      />

      {/* MID-PAGE BOOKING CTA for mobile users */}
      <section className="py-12 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Book Your Legal DNA Test?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Schedule your appointment in minutes. Book online below or call for immediate assistance.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/milehighdnatesting/legal-paternity-test"
            width="100%"
            height="500"
            frameBorder="0"
            title="Schedule Legal DNA Test Appointment"
            style={{ minHeight: "500px", borderRadius: "12px", border: "1px solid #e5e7eb" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonial
        quote="The process was smooth and professional. Results were delivered quickly and were accepted in court with no issues."
        author="Sarah J."
        role="Mother in Denver, CO"
      />

      {/* LOCAL TRUST & COVERAGE */}
      <ServingColorado />

      {/* CALL TO ACTION */}
      <CallToAction
        heading="Ready for Court-Admissible Results?"
        subtext="Schedule your appointment today for fast, confidential, legally valid DNA testing."
        buttonText="Book Your Test Now"
        buttonLink="https://calendly.com/milehighdnatesting/legal-paternity-test"
      />

      {/* COMPLIANCE INFO */}
      <Compliance />
    </main>
  );
};

export default LegalPaternityPage;
