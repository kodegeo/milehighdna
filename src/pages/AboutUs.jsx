import React from "react";
import HeroSection from "../components/common/HeroSection";
import WhoWeAre from "../components/about/WhoWeAre";
import ValuePillars from "../components/about/ValuePillars";
import ServingColorado from "../components/about/ServingColorado";
import CallToAction from "../components/about/CallToAction";
import aboutHero from "../assets/images/about_hero.png";
import aboutMid from "../assets/images/about_mid.png";

const AboutUsPage = () => {
  return (
    <main>
      <HeroSection
        title="About Mile High DNA Testing"
        subtitle="A trusted partner for families across Colorado — delivering accurate, compassionate, and legally-admissible DNA testing services."
        imageUrl={aboutHero}
        buttonText="Schedule a Consultation"
        buttonLink="https://calendly.com/cynthia-milehighdnatesting/30min"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="https://calendly.com/milehighdnatesting-info/30min"
      />

      <WhoWeAre
        title="Who We Are"
        content="Mile High DNA Testing was founded to give Colorado families access to accurate, compassionate, and confidential DNA testing. Whether you're navigating legal matters, immigration requirements, or seeking clarity through prenatal testing, we're here to support you with trust and care. With certified labs and fast turnaround times, our goal is to make the process simple, secure, and stress-free."
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
