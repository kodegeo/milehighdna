import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/common/HeroSection";
import PricingEs from "../../components/es/immigration/PricingEs";
import OverviewEs from "../../components/es/immigration/OverviewEs";
import StepsEs from "../../components/es/immigration/StepsEs";
import WhoNeedsTestEs from "../../components/es/immigration/WhoNeedsTestEs";
import WhyChooseUsEs from "../../components/es/immigration/WhyChooseUsEs";
import TestimonialsEs from "../../components/es/immigration/TestimonialsEs";
import ServingColoradoEs from "../../components/es/common/ServingColoradoEs";
import CallToActionEs from "../../components/es/common/CallToActionEs";
import Compliance from "../../components/es/immigration/Compliance";
import immigrationHero from "../../assets/images/immigration-hero.png";

const ImmigrationDNATestsEs = () => {
    return (
      <main>
        <Helmet>
        <link rel="canonical" href="https://milehighdnatesting.com/es/prueba-de-inmigracion" />
        <link rel="alternate" hreflang="en-us" href="https://milehighdnatesting.com/services/immigration-dna-testing" />
        <link rel="alternate" hreflang="es-us" href="https://milehighdnatesting.com/es/prueba-de-inmigracion" />
        <link rel="alternate" hreflang="x-default" href="https://milehighdnatesting.com/" />


        </Helmet>
        <HeroSection
          title="Prueba de ADN para Inmigración (USCIS)"
          subtitle={
            <>
              Pruebas de ADN rápidas, precisas y legalmente válidas para casos de inmigración en EE.UU. Cumplen con los requisitos del USCIS y están respaldadas por un laboratorio acreditado por la AABB.
              {"\n\n"}
              Coordinamos directamente con embajadas, consulados, tribunales migratorios y el USCIS para asegurar un proceso ágil y confiable.
            </>
          }
          imageUrl={immigrationHero}
          buttonText="Agenda tu prueba"
          buttonLink="https://calendly.com/milehighdnatesting/consulta-gratuita"
          secondaryButtonText="Hable con un Especialista"
          secondaryButtonLink="https://calendly.com/milehighdnatesting/consulta-gratuita"
        />
  
        {/* Pricing Section – Moved Up */}
        <PricingEs />
  
        {/* Overview Section */}
        <OverviewEs />
  
        {/* Step-by-Step Process */}
        <StepsEs />
  
        {/* Who Needs This Test */}
        <WhoNeedsTestEs />
  
        {/* Why Choose Us */}
        <WhyChooseUsEs />
  
        {/* Testimonials / Case Studies */}
        <TestimonialsEs />
  
        {/* Schedule & Contact */}
        <ServingColoradoEs />
        <CallToActionEs />
  
        {/* Legal / Compliance Footer Note */}
        <Compliance />
      </main>
    );
  };
  
  export default ImmigrationDNATestsEs; 