import React from 'react';
import { Helmet } from 'react-helmet';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQ/FAQSection';
import PrenatalHero from '../components/prenatal/PrenatalHero';
import PrenatalOverview from '../components/prenatal/PrenatalOverview';
import PrenatalPricing from '../components/prenatal/PrenatalPricing';
import PrenatalWhyChooseUs from '../components/prenatal/PrenatalWhyChooseUs';
import PrenatalWhoNeedsTest from '../components/prenatal/PrenatalWhoNeedsTest';
import PrenatalSteps from '../components/prenatal/PrenatalSteps';

const Prenatal = () => {
  return (
    <main>
      <Helmet>
        <title>Prenatal Paternity DNA Test | Non-Invasive Testing in Denver, Aurora & Lakewood</title>
        <meta 
          name="description" 
          content="Non-invasive prenatal paternity DNA testing in Denver, Aurora, and Lakewood. Safe, accurate, and confidential testing for expectant mothers. AABB-accredited lab results." 
        />
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Prenatal Paternity DNA Testing in Colorado" />
        <meta property="og:description" content="Get safe, non-invasive prenatal paternity DNA tests in Colorado. Fast, confidential, and AABB-accredited results for expectant mothers and families." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/prenatal-dna-test" />
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
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default Prenatal; 