import React from "react";
import HeroSection from "../components/common/HeroSection";
import WhoWeAre from "../components/about/WhoWeAre";
import ValuePillars from "../components/about/ValuePillars";
import ServingColorado from "../components/common/ServingColorado";
import CallToAction from "../components/common/CallToAction";
import aboutHero from "../assets/images/about_hero.png";
import aboutMid from "../assets/images/about_mid.png";
import { Helmet } from 'react-helmet-async';


const AboutUsPage = () => {
  return (
    <main>
    <Helmet>
      <title>Paternity DNA Testing in Denver, Aurora, and Lakewood | About Us</title>
      <meta 
        name="description" 
        content="Mile High DNA Testing provides AABB-accredited paternity and immigration DNA tests in Denver, Aurora, Lakewood, and throughout Colorado. Fast, legal, and confidential testing." 
        />

      {/* Open Graph for Social Media */}
      <meta property="og:title" content="Trusted Paternity DNA Testing in Denver, Aurora, Lakewood" />
      <meta property="og:description" content="Learn more about Mile High DNA Testing — your partner for AABB-accredited paternity and immigration DNA tests in Colorado. Fast, legal, and confidential." />
      <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      <meta property="og:url" content="https://milehighdnatesting.com/about" />
      <meta property="og:type" content="website" />

      {/* Twitter (Optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
    </Helmet>
    <HeroSection
        title="About Mile High DNA Testing"
        subtitle="Providing reliable paternity and immigration DNA testing in Denver, Aurora, Lakewood, and across Colorado. AABB-accredited and court-admissible results."
        imageUrl={aboutHero}
        buttonText="Schedule a Consultation"
        buttonLink="https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="https://calendly.com/milehighdnatesting-info/30min"
      />

      <WhoWeAre
        title="Who We Are"
        content="We proudly serve families throughout Denver, Aurora, Lakewood, and the greater Colorado region. Whether you need a paternity test for legal purposes or an immigration DNA test for USCIS, our AABB-accredited process ensures results you can rely on."
        imageUrl={aboutMid}
      />

      <ValuePillars
        title="What Makes Us Different"
        pillars={[
          { icon: "🧪", title: "Certified Accuracy", description: "We partner with AABB-accredited labs to ensure legally admissible and highly reliable results." },
          { icon: "⚡", title: "Fast Turnaround", description: "Get your results within 1–3 business days, with updates every step of the way." },
          { icon: "🤝", title: "Compassionate Service", description: "Our team understands the personal nature of testing. We're here to support you throughout the process." },
        ]}
      />

      <ServingColorado />

      <CallToAction />
    </main>
  );
};

export default AboutUsPage;
