import React from "react";
import HeroSection from "../../components/common/HeroSection";
import Pricing from "../../components/immigration/Pricing";
import Overview from "../../components/immigration/Overview";
import Steps from "../../components/immigration/Steps";
import WhoNeedsTest from "../../components/immigration/WhoNeedsThis";
import WhyChooseUs from "../../components/immigration/WhyChooseUs";
import Testimonials from "../../components/immigration/Testimonials";
import Contact from "../../components/immigration/Contact";
import Compliance from "../../components/immigration/Compliance";
import immigrationHero from "../../assets/images/immigration-hero.png";

const ImmigrationDNATestsEs = () => {
    return (
      <main>
        <HeroSection
          title="Pruebas de ADN para Inmigración Cumpliendo con USCIS"
          subtitle="Pruebas de ADN rápidas, precisas y legales para casos de inmigración en EE.UU. Coordinamos con embajadas y proporcionamos entrega directa a las autoridades de inmigración."
          imageUrl={immigrationHero}
          buttonText="Programe Su Prueba"
          buttonLink="https://calendly.com/cynthia-milehighdnatesting/30min"
          secondaryButtonText="Hable con un Especialista"
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
        <Contact />
  
        {/* Legal / Compliance Footer Note */}
        <Compliance />
      </main>
    );
  };
  
  export default ImmigrationDNATestsEs; 