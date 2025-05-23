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
import { Helmet } from 'react-helmet-async';


// or './ImmigrationPricing' if it's in the same folder

const ImmigrationDNA = () => {
    return (
      <main>
        <Helmet>
          <title>Immigration DNA Testing in Denver | USCIS & Embassy-Compliant</title>
          <meta 
            name="description" 
            content="AABB-accredited immigration DNA testing in Denver. USCIS-compliant tests for visas, green card petitions, and embassy requests. Fast, accurate, legal results." 
          />

          {/* Open Graph */}
          <meta property="og:title" content="USCIS-Approved Immigration DNA Testing in Colorado" />
          <meta property="og:description" content="Need a DNA test for a visa or green card? We provide immigration DNA testing in Denver that meets all USCIS and embassy requirements. AABB-accredited, fast results." />
          <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
          <meta property="og:url" content="https://milehighdnatesting.com/immigration-dna-tests" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        </Helmet>

        <HeroSection
          title="USCIS-Compliant Immigration DNA Testing"
          subtitle="AABB-accredited immigration DNA testing in Denver for USCIS, embassies, and visa cases. We coordinate directly with immigration authorities for secure delivery of results."
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
  