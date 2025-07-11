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
import { Helmet } from 'react-helmet-async';


const LegalPaternityPage = () => {
  return (
    <main>
    <Helmet>
      <title>Legal DNA Paternity Testing in Denver, Aurora & Lakewood | Mile High DNA</title>
      <meta 
        name="description" 
        content="Court-admissible legal DNA paternity testing in Denver, Aurora, Lakewood, and surrounding Colorado communities. AABB-accredited lab results for custody, child support, and immigration cases." 
      />
      <meta property="og:title" content="Legal DNA Paternity Testing in Colorado | Court-Admissible Results" />
      <meta property="og:description" content="Get fast, confidential, AABB-accredited legal DNA testing for paternity. Serving Denver, Aurora, Lakewood and surrounding areas for custody and immigration needs." />
      <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      <meta property="og:url" content="https://milehighdnatesting.com/legal-paternity-tests" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
    </Helmet>

    <HeroSection
      title="Legal DNA Paternity Testing in Denver and Beyond"
      subtitle="Get accurate, court-approved paternity DNA testing in Denver, Aurora, Lakewood, and surrounding Colorado communities. AABB-accredited. Fast, confidential results."
      imageUrl={legalHero}
      buttonText="Schedule Your Test"
      buttonLink="https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment"
      secondaryButtonText="Talk to a Specialist"
      secondaryButtonLink="https://calendly.com/milehighdnatesting-info/30min"
    />

      <Pricing />

      <ServiceOverview
        title="What Is Legal DNA Paternity Testing?"
        paragraphs={[
          "Legal DNA paternity testing is a court-recognized process to determine biological parentage. It’s essential in legal matters such as custody disputes, child support cases, immigration petitions, and birth certificate corrections.",
          "At Mile High DNA Testing, we provide legal paternity tests in Denver, Aurora, Lakewood, and throughout Colorado using AABB-accredited labs. Our strict chain-of-custody procedures ensure that your results are valid in court and accepted by government agencies.",
          "Whether you're preparing for a legal case or seeking peace of mind, our team offers fast results, professional guidance, and complete confidentiality — every step of the way."
        ]}
      />
      <LegalUseCases
        title="When Is Legal Paternity Testing Required?"
        useCases={[
          {
            title: "Child Custody Disputes",
            description:
              "Establish legal paternity to support custody cases in Denver, Aurora, Lakewood, or anywhere in Colorado.",
          },
          {
            title: "Child Support Court Orders",
            description:
              "Provide AABB-accredited DNA proof of paternity for child support enforcement or court filings.",
          },
          {
            title: "Birth Certificate Updates",
            description:
              "Use legal DNA test results to amend or add the father's name to a child’s birth certificate in Colorado.",
          },
          {
            title: "Immigration Cases",
            description:
              "Submit legally valid DNA results for USCIS and other immigration-related applications.",
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
              "Receive your court-admissible results within 2-5 business days.",
          },
        ]}
      />

      <Testimonial
        quote="The process was smooth and professional. The results were delivered quickly and the staff was very supportive throughout."
        author="Sarah Johnson"
        role="Mother"
      />

      <ServingColorado />
    

      <CallToAction
        heading="Ready to Get Started?"
        subtext="Schedule your free consultation or book your legal paternity test today."
        buttonText="Book Now"
        buttonLink="https://calendly.com/milehighdnatesting-info/30min"
      />

      <Compliance />
    </main>
  );
};

export default LegalPaternityPage;
