import React from "react";
import HeroSection from "../components/common/HeroSection";
import Pricing from "../components/immigration/Pricing";
import Overview from "../components/immigration/Overview";
import Steps from "../components/immigration/Steps";
import WhoNeedsTest from "../components/immigration/WhoNeedsThis";
import WhyChooseUs from "../components/immigration/WhyChooseUs";
import Testimonials from "../components/immigration/Testimonials";
import Contact from "../components/immigration/Contact";
import Compliance from "../components/immigration/Compliance";
import immigrationHero from "../assets/images/immigration-hero.png";
import ServingColorado from "../components/common/ServingColorado";
import CallToAction from "../components/immigration/CallToAction";


// or './ImmigrationPricing' if it's in the same folder

const ImmigrationDNA = () => {
    return (
      <main>
        <HeroSection
          title="USCIS-Compliant Immigration DNA Testing"
          subtitle="Fast, accurate, and legal DNA testing for U.S. immigration cases. We coordinate with embassies and provide direct delivery to immigration authorities."
          imageUrl={immigrationHero}
          buttonText="Schedule Your Test"
          buttonLink="https://calendly.com/cynthia-milehighdnatesting/30min"
          secondaryButtonText="Talk to a Specialist"
          secondaryButtonLink="https://calendly.com/milehighdnatesting-info/30min"
        />
  
        {/* Pricing Section – Moved Up */}
        <Pricing />
  
        {/* Overview Section */}
        <Overview />
  
        {/* Step-by-Step Process */}
        <Steps />
  
        {/* Who Needs This Test */}
        <WhoNeedsTest />
  
        {/* Why Choose Us */}
        <WhyChooseUs />
  
        {/* Testimonials / Case Studies */}
        <Testimonials />
  
        {/* Schedule & Contact */}
        <ServingColorado />
        
        <CallToAction />
  
        {/* Legal / Compliance Footer Note */}
        <Compliance />
      </main>
    );
  };
  
  export default ImmigrationDNA;
  