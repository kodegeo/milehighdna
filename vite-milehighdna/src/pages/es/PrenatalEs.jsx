import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';
import TestimonialsEs from '../../components/es/TestimonialsEs';
import FAQSectionEs from '../../components/es/FAQ/FAQSectionEs';
import PrenatalHero from '../../components/es/prenatal/PrenatalHero';
import PrenatalOverview from '../../components/es/prenatal/PrenatalOverview';
import PrenatalPricing from '../../components/es/prenatal/PrenatalPricing';
import PrenatalWhyChooseUs from '../../components/es/prenatal/PrenatalWhyChooseUs';
import PrenatalWhoNeedsTest from '../../components/es/prenatal/PrenatalWhoNeedsTest';
import PrenatalSteps from '../../components/es/prenatal/PrenatalSteps';

const PrenatalEs = () => {
  return (
    <main>
      <Helmet>
        <title>Prueba de Paternidad Prenatal | Pruebas No Invasivas en Denver, Aurora y Lakewood</title>
        <meta 
          name="description" 
          content="Pruebas de paternidad prenatal no invasivas en Denver, Aurora y Lakewood. Pruebas seguras, precisas y confidenciales para madres embarazadas. Resultados de laboratorio acreditado por AABB." 
        />

        <link rel="canonical" href="https://milehighdnatesting.com/es/prueba-de-paternidad-prenatal" />
        <link rel="alternate" hreflang="en-us" href="https://milehighdnatesting.com/services/prenatal-paternity-testing" />
        <link rel="alternate" hreflang="es-us" href="https://milehighdnatesting.com/es/prueba-de-paternidad-prenatal" />
        <link rel="alternate" hreflang="x-default" href="https://milehighdnatesting.com/" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Pruebas de Paternidad Prenatal en Colorado" />
        <meta property="og:description" content="Obtenga pruebas de paternidad prenatal seguras y no invasivas en Colorado. Resultados rápidos, confidenciales y acreditados por AABB para madres embarazadas y familias." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/prueba-de-paternidad-prenatal" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <PrenatalHero />
      <PrenatalPricing />
      <PrenatalOverview />
      <PrenatalWhoNeedsTest />
      <PrenatalSteps />
      <PrenatalWhyChooseUs />
      <ServingColoradoEs />
      <CallToActionEs />
    </main>
  );
};

export default PrenatalEs; 