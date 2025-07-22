import React from "react";
import HeroSection from "../components/common/HeroSection";
import ServiceOverview from "../components/legalPaternity/ServiceOverview";
import HowItWorks from "../components/legalPaternity/HowItWorks";
import LegalUseCases from "../components/legalPaternity/LegalUseCases";
import Testimonial from "../components/legalPaternity/Testimonial";
import CallToAction from "../components/legalPaternity/CallToAction";
import legalHero from "../assets/images/legal_hero.png";

const LegalPaternityPage = () => {
  return (
    <main>
      <HeroSection
        title="Legal DNA Paternity Testing"
        subtitle="Accurate, court-admissible DNA results you can trust. Get clarity and legal support with fast results and compassionate care — serving Denver and the Front Range."
        imageUrl={legalHero}
        buttonText="Schedule Your Test"
        buttonLink="https://calendly.com/milehighdnatesting/legal-paternity-test"
        secondaryButtonText="Talk to a Specialist"
        secondaryButtonLink="https://calendly.com/milehighdnatesting/freeconsultation"
      />

      <ServiceOverview
        title="What Is Legal DNA Paternity Testing?"
        paragraphs={[
          "Legal DNA paternity testing establishes the biological relationship between a child and an alleged father and is performed under strict chain-of-custody protocols to be valid in court.",
          "Our tests are processed through AABB-accredited laboratories to ensure reliable, legally admissible results. From scheduling to final delivery, we prioritize accuracy, confidentiality, and compassion.",
          "Whether you're navigating a custody case, child support order, or immigration paperwork, we're here to guide you every step of the way."
        ]}
      />

      <LegalUseCases
        title="When Is Legal Paternity Testing Required?"
        useCases={[
          {
            title: "Child Custody Disputes",
            description:
              "Confirm paternity to support legal custody arrangements or modifications.",
          },
          {
            title: "Child Support Court Orders",
            description:
              "Provide legal proof of paternity for court-mandated child support obligations.",
          },
          {
            title: "Birth Certificate Updates",
            description:
              "Establish paternity to add or correct a father's name on a birth certificate.",
          },
          {
            title: "Immigration Cases",
            description:
              "Verify biological relationships for immigration applications and petitions.",
          },
        ]}
      />

      <HowItWorks
        title="How Legal Paternity Testing Works"
        steps={[
          {
            title: "Book a Free Consultation",
            description:
              "Book a free consultation or schedule your legal paternity test appointment.",
          },
          {
            title: "Schedule an Appointment",
            description:
              "Come to our Denver location for a quick, professional sample collection.",
          },
          {
            title: "Get Your Results",
            description:
              "Receive your court-admissible results within 1-3 business days.",
          },
        ]}
      />

      <Testimonial
        quote="The process was smooth and professional. The results were delivered quickly and the staff was very supportive throughout."
        author="Sarah Johnson"
        role="Mother"
      />

      <CallToAction
        heading="Ready to Get Started?"
        subtext="Schedule your free consultation or book your legal paternity test today."
        buttonText="Book Now"
        buttonLink="https://calendly.com/milehighdnatesting/legal-paternity-test"
      />
    </main>
  );
};

export default LegalPaternityPage;
